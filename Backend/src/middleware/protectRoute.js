import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
 requireAuth(),
 async (req, res, next) => {
 try {
 const clerkId = req.auth().userId;

 if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

// Use findOneAndUpdate with upsert: true to find the user, 
      // or create them if they don't exist.
      let user = await User.findOneAndUpdate(
        { clerkId }, // Query
        { clerkId }, // Data to set (can include name/email if retrieved from Clerk)
        { new: true, upsert: true, runValidators: true } // Options
      );

      // If the user object is still null for some reason (rare, e.g., validation failed)
      if (!user) {
        return res.status(500).json({ message: "Error creating user profile in database" });
      }

      // attach user to req
      req.user = user;

      next(); // Request now proceeds to the controller
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
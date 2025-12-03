import mongoose from "mongoose";

import ENV from "./ENV.js"
export const connectDB = async ()=>{
  try{
    const conn = await mongoose.connect(ENV.DB)
    console.log("CONNECTED TO MONGO DB:",conn.connection.host);
  }catch(error){
    console.error("Error connecting to db".error)
    process.exit(1);
  };
  
}
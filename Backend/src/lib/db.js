import mongoose from "mongoose";

import EN from "./ENV.js"

export const connectDB = async ()=>{
  try{
    const conn = await mongoose.connect(EN.DB)
    console.log("CONNECTED TO MONGO DB:",conn.connection.host);
  }catch(error){
    console.error("Error connecting to db".error)
    process.exit(1);
  };
  
}
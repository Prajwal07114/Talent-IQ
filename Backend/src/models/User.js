import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  clerkId:{
    type:String,
    required:true,
    unique:true,
  },
  profileImage:{
    type:String,
    default:"",
  },
  }
)

const User = mongoose.model("User",userSchema)
export default User;
import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  problem:{
    type:String,
    required:true
  },
  Difficulty:{
    enum:["easy","medium","hard"],
    type:String,
    required:true
  },
  host:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  participant:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    default:null},
    status:{
      type:String,
      enum:["active","completed"],
      default:"active"
    },
    callId:{
      type:String,
      default:""
    },

},{timestamps:true});

const Sessions = mongoose.model("Session",SessionSchema);

export default Sessions
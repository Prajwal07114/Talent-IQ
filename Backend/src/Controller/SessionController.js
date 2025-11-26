import { streamClient } from "../lib/stream"
import {sessions} from "../models/Sessions"

export async function CreateSessions(req,res){
  try{
    const{problem,difficulty} = req.body
    const userId = req.user._id
    const clerkId = req.user.clerkId
    
    if(!problem || !difficulty){
      return res.status(400).json({message:"Problem and difficulty are required"})
    }
    const callId  =`session_${Date.now()}_${Math.random().toString(36).substring(7)}`

    const session = await sessions.create({problem,difficulty,host:userId,callId})

    await streamClient.video.call("default",callId).getOrCreate({
      data:{
        created_by_id:clerkId,
        custom:{problem,difficulty,sessionId:session._id.toString()}
      }
    })
  }
}

export async function joinSession (req,res){}
export async function EndSession(req,res){}
export async function getActiveSessions(req,res){}
export async function getRecentSessions(req,res){}
export async function getSessionId(req,res){}
import express from "express"
import EN from "./lib/ENV.js";
import  {connectDB} from "./lib/db.js";
import cors from "cors"
import {serve} from "inngest/express"
import sessionRoutes from "./Routes/sessionRoutes.js"
import { inngest,functions} from "./lib/inngest.js";
const app = express();


app.use(express.json())

app.use(cors({origin:EN.CLIENT_URL,credentials:true}))
app.use("/api/inngest", serve({
  client: inngest,
  functions,
  serveHealthCheck: true
}));
app.use("/api/sessions",sessionRoutes)
app.get("/",(req,res)=>{
  res.status(200).json({msg:"Hello"})
})


const StartServer=async()=>{
  try {
    await connectDB();
    app.listen(EN.PORT,()=>{
  console.log("Server is running on port:",EN.PORT);
})
  } catch (error) {
    console.error("Error starting the",error);
  }
};


StartServer();
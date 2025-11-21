import dotenv from "dotenv"

dotenv.config();

const EN = {
  PORT:process.env.PORT,
  DB:process.env.DB_url,
  INNGEST_EVENT_KEY:process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY:process.env.INNGEST_SIGNING_KEY,
  STREAM_API_KEY:process.env.STREAM_API_KEY,
  STREAM_API_SECRET:process.env.STREAM_API_SECRET,
  CLIENT_URL:process.env.CLIENT_URL
}

export default EN;
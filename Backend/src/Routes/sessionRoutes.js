import express from "express"
import { protectedRoute } from "./protectedRoute.js"
import CreateSessions from "../Controllers/CreateSessions.js"
import getActiveSessions from "../Controllers/getActiveSessions.js"
const router = express.Router()

router.post("/",protectedRoute,CreateSessions)
router.get("/active",protectedRoute,getActiveSessions)
router.get("/my-recent",protectedRoute,getRecentSessions)

router.get("/:id",protectedRoute,getSessionId)
router.post("/:id/join",protectedRoute,joinSession)
router.post("/:id/end",protectedRoute,EndSession)

export default router;
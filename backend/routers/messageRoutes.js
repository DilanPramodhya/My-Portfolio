import express from "express";
import {
  deleteMessage,
  getAllMessages,
  sendMessage,
} from "../controllers/messageController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/allMessages", getAllMessages);
router.delete("/deleteMessage/:id", isAuthenticated, deleteMessage);

export default router;

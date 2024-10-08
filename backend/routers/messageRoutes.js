import express from "express";
import {
  deleteMessage,
  getAllMessages,
  sendMessage,
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/allMessages", getAllMessages);
router.delete("/deleteMessage/:id", deleteMessage);

export default router;

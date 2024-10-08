import express from "express";
import {
  getUser,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/me/:id", isAuthenticated, getUser);
router.put("/update/me", isAuthenticated, updateProfile);

export default router;

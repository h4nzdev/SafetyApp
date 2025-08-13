import express from "express";
import {
  getUsers,
  loginUser,
  registerUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;

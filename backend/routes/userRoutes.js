import express from "express";
import {
  getUsers,
  loginUser,
  registerUser,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update-user/:id", updateUser);

export default router;

import mongoose from "mongoose";
import express from "express";
import { getReports, addReports } from "../controller/reportController.js";

const router = express.Router();

router.get("/reports", getReports);
router.post("/add-reports", addReports);

export default router;

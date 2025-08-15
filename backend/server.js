import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;
const mongo_url = "mongodb://localhost:27017/community_reporting";

mongoose.connect(mongo_url).then(() => {
  app.listen(port, () => {
    console.log(`Server is running in port : `, port);
  });

  console.log("Connected to the database");
});

app.use("/", userRoutes);
app.use("/", reportRoutes);

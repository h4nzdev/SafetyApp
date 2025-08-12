import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const mongo_url = "mongodb://localhost:27017/community_reporting";
const port = 3000;

mongoose.connect(mongo_url).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port :`, port);
  });

  console.log("Connected to the database!");
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
});

const User = mongoose.model("users", UserSchema);

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "No users lists found!" });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Error :", error);
    return res.status(500).send("There is something error in users lists!");
  }
});

app.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const existedEmail = await User.findOne({ email: user.email });

    if (existedEmail) {
      return res.status(400).json({ message: "Email is already existed!" });
    }

    if (!user) {
      return res.status(404).json({ message: "Please fill up the form!" });
    }

    const newUsers = new User(user);
    await newUsers.save();
    res
      .status(201)
      .json({ message: "User registered successfully!", newUsers });
  } catch (error) {
    console.error("Error :", error);
    return res
      .status(500)
      .send("There is something wrong on registering the user!");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        res.status(200).json({ success: true, user });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Password is incorrect!" });
      }
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Email cannot be found!" });
    }
  } catch (error) {
    console.error("Error :", error);
    return res
      .status(500)
      .send("There is something wrong on logging in the user!");
  }
});

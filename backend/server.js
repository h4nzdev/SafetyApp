import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;
const db_url = "mongodb://localhost:27017/myapp";

app.use(express.json());

mongoose
  .connect(db_url)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is connect in port: ${port}`);
    });
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
});

const User = mongoose.model("users", UserSchema);

//Get all the users from the database
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error: ", error);
  }
});

//Add users to the database
app.post("/add-users", async (req, res) => {
  try {
    const existedEmail = await User.findOne({ email: req.body.email });

    if (existedEmail) {
      return res.status(400).json({ message: "Email is already existed!" });
    }

    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(200)
      .json({ message: `User ${newUser.name} added successfully!` });
  } catch (error) {
    console.error("Error: ", error);
  }
});

//Update user in the database
app.put("/update-user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "User not found!" });
    }

    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ message: "User updated successfully", updateUser });
  } catch (error) {
    console.error("Error: ", error);
  }
});

//Delete user to the database
app.delete("/delete-user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "User cannot be found!" });
    }

    const deletedUser = await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: `User ${deletedUser.name} has deleted successfully` });
  } catch (error) {
    console.error("Error: ", error);
  }
});

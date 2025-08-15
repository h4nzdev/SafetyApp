// controllers/userController.js
import User from "../model/userModel.js";

// GET all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "No users lists found!" });
    }
    res.status(200).json(users);
  } catch (error) {
    console.error("Error :", error);
    res.status(500).send("There is something error in users lists!");
  }
};

// REGISTER a new user
export const registerUser = async (req, res) => {
  try {
    const user = req.body;
    const existedEmail = await User.findOne({ email: user.email });

    if (existedEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already existed!" });
    }

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Please fill up the form!" });
    }

    const newUsers = new User(user);
    await newUsers.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully!",
      newUsers,
    });
  } catch (error) {
    console.error("Error :", error);
    res.status(500).send("There is something wrong on registering the user!");
  }
};

// LOGIN a user
export const loginUser = async (req, res) => {
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
    res.status(500).send("There is something wrong on logging in the user!");
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateDetails = req.body;

    if (!id) {
      return res
        .status(404)
        .json({ success: false, message: "Cannot find the user" });
    }

    const updateUser = await User.findByIdAndUpdate(id, updateDetails, {
      new: true,
    });

    res
      .status(200)
      .json({ success: true, message: "User updated successfully", updateUser });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ success: false, message: `Error in : ${error}` });
  }
};

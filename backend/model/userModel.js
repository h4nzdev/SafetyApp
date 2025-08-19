import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  address: String,
  department: String,
  photo: String,
  time: {
    type: Date,
    default: () => {
      const today = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      return today.toLocaleDateString("en-US", options);
    },
  },
});

const User = mongoose.model("users", UserSchema);

export default User;

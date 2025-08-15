import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  address: String,
  department: String,
});

const User = mongoose.model("users", UserSchema);

export default User;

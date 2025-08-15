import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  type: String,
  description: String,
  location: String,
  time: {
    type: Date,
    default: Date.now,
  },
  severity: {
    type: String,
    default: "medium",
  },
  photo: String,
  status: {
    type: String,
    default: "Active",
  },
});

const Report = mongoose.model("reports", ReportSchema);

export default Report;

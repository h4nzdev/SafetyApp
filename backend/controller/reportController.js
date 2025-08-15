import Report from "../model/reportModel.js";

export const getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    if (reports.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No reports found!" });
    }
    res.status(200).json(reports);
  } catch (error) {
    console.error("Error :", error);
    return res.status(500).send("Error on fetching the reports");
  }
};

export const addReports = async (req, res) => {
  try {
    const report = req.body;
    const newReports = new Report(report);
    await newReports.save();
    res
      .status(200)
      .json({ success: true, message: "Report has been added", newReports });
  } catch (error) {
    console.error("Error :", error);
    return res.status(500).send("Error on adding the reports");
  }
};

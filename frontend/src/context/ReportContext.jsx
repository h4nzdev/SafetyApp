import { useEffect, useState, createContext } from "react";
import axios from "axios"; // don't forget to import axios

// Create context
export const ReportContext = createContext();

// Create provider
export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState(() => {
    const storedReport = sessionStorage.getItem("reports");
    return storedReport ? JSON.parse(storedReport) : [];
  });

  const fetchReports = async () => {
    try {
      const res = await axios.get("http://localhost:3000/reports");

      if (!res.data) {
        console.log("No data yet!");
        setReports([]);
      } else {
        setReports(res.data);
        sessionStorage.setItem("reports", JSON.stringify(res.data)); // optional: store in session
      }
    } catch (error) {
      console.error("Error :", error);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // Return the provider wrapping the children
  return (
    <ReportContext.Provider value={{ reports, setReports, fetchReports }}>
      {children}
    </ReportContext.Provider>
  );
};

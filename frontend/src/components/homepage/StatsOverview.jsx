import React, { useContext } from "react";
import { AlertTriangle, TrendingUp, Clock } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { ReportContext } from "../../context/ReportContext";

const StatsOverview = () => {
  const { isDarkMode } = useTheme();
  const { reports } = useContext(ReportContext);

  const activeReport = reports.filter(
    (report) => report.status === "Active"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        className={`${
          isDarkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        } p-5 rounded-xl border shadow-sm`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`${
                isDarkMode ? "text-slate-300" : "text-slate-500"
              } text-sm font-medium`}
            >
              Active Incidents
            </p>
            <p
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              {activeReport}
            </p>
          </div>
          <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>

      <div
        className={`${
          isDarkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        } p-5 rounded-xl border shadow-sm`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`${
                isDarkMode ? "text-slate-300" : "text-slate-500"
              } text-sm font-medium`}
            >
              Today's Reports
            </p>
            <p
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              {reports.length}
            </p>
          </div>
          <div
            className={`${
              isDarkMode ? "bg-slate-700" : "bg-slate-100"
            } w-12 h-12 rounded-lg flex items-center justify-center`}
          >
            <TrendingUp
              className={`w-6 h-6 ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          isDarkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        } p-5 rounded-xl border shadow-sm`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`${
                isDarkMode ? "text-slate-300" : "text-slate-500"
              } text-sm font-medium`}
            >
              Response Time
            </p>
            <p
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              4.2m
            </p>
          </div>
          <div
            className={`${
              isDarkMode ? "bg-slate-700" : "bg-slate-100"
            } w-12 h-12 rounded-lg flex items-center justify-center`}
          >
            <Clock
              className={`w-6 h-6 ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;

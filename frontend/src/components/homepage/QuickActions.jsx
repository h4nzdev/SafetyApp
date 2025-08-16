import React from "react";
import { Phone, FileText, MapPin, Users } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const QuickActions = ({ handleCall, navigate }) => {
  const { isDarkMode } = useTheme();
  return (
    <div>
      <h2
        className={`text-2xl font-bold ${
          isDarkMode ? "text-white" : "text-slate-800"
        } mb-6`}
      >
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          onClick={handleCall}
          className={`${
            isDarkMode
              ? "bg-slate-800 border-slate-700 hover:border-red-500"
              : "bg-white border-slate-200 hover:border-red-300"
          } p-4 flex flex-col items-center rounded-xl border hover:shadow-md transition-all duration-200 group`}
        >
          <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors">
            <Phone className="w-6 h-6 text-red-600" />
          </div>
          <span
            className={`text-sm font-semibold ${
              isDarkMode ? "text-white" : "text-slate-700"
            }`}
          >
            Call 911
          </span>
        </button>

        <button
          onClick={() => navigate("/report-incident")}
          className={`${
            isDarkMode
              ? "bg-slate-800 border-slate-700 hover:border-red-500"
              : "bg-white border-slate-200 hover:border-red-300"
          } p-4 flex flex-col items-center rounded-xl border hover:shadow-md transition-all duration-200 group`}
        >
          <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors">
            <FileText className="w-6 h-6 text-red-600" />
          </div>
          <span
            className={`text-sm font-semibold ${
              isDarkMode ? "text-white" : "text-slate-700"
            }`}
          >
            Report Incident
          </span>
        </button>

        <button
          onClick={() => navigate("/map-incedent")}
          className={`${
            isDarkMode
              ? "bg-slate-800 border-slate-700 hover:border-red-500"
              : "bg-white border-slate-200 hover:border-red-300"
          } p-4 flex flex-col items-center rounded-xl border hover:shadow-md transition-all duration-200 group`}
        >
          <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors">
            <MapPin className="w-6 h-6 text-red-600" />
          </div>
          <span
            className={`text-sm font-semibold ${
              isDarkMode ? "text-white" : "text-slate-700"
            }`}
          >
            View Map
          </span>
        </button>

        <button
          onClick={() => navigate("/emergency-contact")}
          className={`${
            isDarkMode
              ? "bg-slate-800 border-slate-700 hover:border-red-500"
              : "bg-white border-slate-200 hover:border-red-300"
          } p-4 flex flex-col items-center rounded-xl border hover:shadow-md transition-all duration-200 group`}
        >
          <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors">
            <Users className="w-6 h-6 text-red-600" />
          </div>
          <span
            className={`text-sm font-semibold ${
              isDarkMode ? "text-white" : "text-slate-700"
            }`}
          >
            Contacts
          </span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;

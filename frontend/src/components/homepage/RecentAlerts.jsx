import React from "react";
import { AlertTriangle, Clock } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const RecentAlerts = () => {
  const { isDarkMode } = useTheme();
  return (
    <div>
      <h2
        className={`text-2xl font-bold ${
          isDarkMode ? "text-white" : "text-slate-800"
        } mb-6`}
      >
        Recent Alerts
      </h2>
      <div className="space-y-3">
        <div
          className={`${
            isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white"
          } border-l-4 border-yellow-500 rounded-xl shadow-sm`}
        >
          <div className="p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-yellow-100 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    Flood Warning
                  </h3>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                    MEDIUM
                  </span>
                </div>
                <p
                  className={`${
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  } mb-2 text-sm`}
                >
                  Heavy rainfall expected in downtown area. Avoid low-lying
                  roads and stay updated on weather conditions.
                </p>
                <div
                  className={`flex items-center text-xs ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  <Clock className="w-3 h-3 mr-1" />2 hours ago
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            isDarkMode ? "bg-slate-800 border-slate-700" : "bg-white"
          } border-l-4 border-red-500 rounded-xl shadow-sm`}
        >
          <div className="p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-red-100 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    Road Closure
                  </h3>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                    HIGH
                  </span>
                </div>
                <p
                  className={`${
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  } mb-2 text-sm`}
                >
                  Main Street closed due to accident. Use alternate routes and
                  expect delays.
                </p>
                <div
                  className={`flex items-center text-xs ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  <Clock className="w-3 h-3 mr-1" />4 hours ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentAlerts;

import React, { useContext } from "react";
import { FileText, MapPin, AlertTriangle, Clock } from "lucide-react";
import { useIncidentAddresses } from "../incidentmap/useIncidentAddresses";
import { ReportContext } from "../../context/ReportContext";
import { useTheme } from "../../context/ThemeContext";
import { formatTime } from "../../utils/formatTime";

function parseLocation(loc) {
  if (!loc) return null;
  const [lat, lng] = loc.split(",").map(Number);
  if (isNaN(lat) || isNaN(lng)) return null;
  return { lat, lng };
}

const RecentIncedents = () => {
  const { reports } = useContext(ReportContext);
  const addresses = useIncidentAddresses(reports);
  const { isDarkMode } = useTheme();
  return (
    <div>
      <h2
        className={`text-2xl font-bold ${
          isDarkMode ? "text-white" : "text-slate-800"
        } mb-6`}
      >
        Recent Incidents
      </h2>

      {reports.length === 0 ? (
        <div
          className={`text-center py-8 ${
            isDarkMode
              ? "bg-slate-800 border-slate-700"
              : "bg-slate-50 border-slate-200"
          } rounded-xl border`}
        >
          <div
            className={`w-12 h-12 ${
              isDarkMode ? "bg-slate-700" : "bg-slate-200"
            } rounded-lg flex items-center justify-center mx-auto mb-3`}
          >
            <FileText
              className={`w-6 h-6 ${
                isDarkMode ? "text-slate-400" : "text-slate-400"
              }`}
            />
          </div>
          <p className={`${isDarkMode ? "text-slate-300" : "text-slate-500"}`}>
            No incidents found!
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {reports.map((report) => (
            <div
              key={report.id}
              className={`${
                isDarkMode
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-slate-200"
              } rounded-xl border shadow-sm hover:shadow-md transition-all duration-200`}
            >
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold ${
                          isDarkMode ? "text-white" : "text-slate-800"
                        }`}
                      >
                        {report.type}
                      </h3>
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                        {report.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p
                  className={`${
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  } mb-3 text-sm ${
                    isDarkMode ? "bg-slate-700" : "bg-slate-50"
                  } p-3 rounded-lg`}
                >
                  {report.description}
                </p>

                <div
                  className={`flex items-center justify-between pt-3 border-t ${
                    isDarkMode ? "border-slate-700" : "border-slate-100"
                  }`}
                >
                  <div
                    className={`flex items-center text-xs ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="truncate">
                      {(() => {
                        const pos = parseLocation(report.location);
                        const key = pos ? `${pos.lat},${pos.lng}` : null;
                        return key
                          ? addresses[key] || "Loading address..."
                          : "No location";
                      })()}
                    </span>
                  </div>
                  <div
                    className={`flex items-center text-xs ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <Clock className="w-3 h-3 mr-1" />
                    {formatTime(report.time)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentIncedents;

import React, { useContext } from "react";
import {
  AlertTriangle,
  Clock,
  MapPin,
  User,
  Moon,
  Filter,
  Heart,
  Users,
  Bell,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { ReportContext } from "../context/ReportContext";
import { useIncidentAddresses } from "../components/incidentmap/useIncidentAddresses";
import { Link } from "react-router-dom";

function parseLocation(loc) {
  if (!loc) return null;
  const [lat, lng] = loc.split(",").map(Number);
  if (isNaN(lat) || isNaN(lng)) return null;
  return { lat, lng };
}

function IncidentsFeed() {
  // Toggle this to true for dark mode
  const { isDarkMode } = useTheme();
  const { reports } = useContext(ReportContext);
  const addresses = useIncidentAddresses(reports);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <div className="max-w-auto mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Emergecny Feed</h1>
              <p className="text-red-100 text-lg mt-2">
                Live reports and incidents
              </p>
            </div>
          </div>
        </div>

        {/* Feed Items */}
        <div className="space-y-4 pt-8">
          {/* Incident 1 */}
          {reports.map((report) => (
            <div
              className={`rounded-xl p-6 ${
                isDarkMode
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-white border border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3
                      className={`font-semibold text-lg ${
                        isDarkMode ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {report.type}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode
                          ? "bg-red-900 text-red-300"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      active
                    </span>
                  </div>
                  <p
                    className={`${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    } mb-3`}
                  >
                    {report.description}
                  </p>
                </div>
                <div
                  className={`ml-4 text-right text-sm ${
                    isDarkMode ? "text-red-400" : "text-red-600"
                  } font-medium uppercase`}
                >
                  HIGH
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <User
                      className={`w-4 h-4 font-bold ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}
                    />
                    <Link to={`/profile-visit/${report.user.id}`}>
                      <span
                        className={`text-sm font-bold underline cursor-pointer ${
                          isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {report.user.name}
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin
                      className={`w-4 h-4 ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {(() => {
                        const pos = parseLocation(report.location);
                        const key = pos ? `${pos.lat},${pos.lng}` : null;
                        return key
                          ? addresses[key] || "Loading address..."
                          : "No location";
                      })()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock
                    className={`w-4 h-4 ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    2 minutes ago
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-4">
                  <button
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isDarkMode
                        ? "bg-blue-900 hover:bg-blue-800 text-blue-300"
                        : "bg-blue-100 hover:bg-blue-200 text-blue-700"
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-medium">I Can Help</span>
                    <span className="text-xs bg-blue-600 text-white rounded-full px-2 py-0.5">
                      3
                    </span>
                  </button>
                  <button
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isDarkMode
                        ? "bg-orange-900 hover:bg-orange-800 text-orange-300"
                        : "bg-orange-100 hover:bg-orange-200 text-orange-700"
                    }`}
                  >
                    <Bell className="w-4 h-4" />
                    <span className="text-sm font-medium">Alert Nearby</span>
                  </button>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <Users className="w-4 h-4" />
                  <span>7 people helping</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IncidentsFeed;

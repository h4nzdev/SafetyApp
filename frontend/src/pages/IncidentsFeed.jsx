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
  Image as ImageIcon,
  Camera,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { ReportContext } from "../context/ReportContext";
import { useIncidentAddresses } from "../components/incidentmap/useIncidentAddresses";
import { Link } from "react-router-dom";
import { parseLocation } from "../hooks/parselocation";
import { formatTime } from "../utils/formatTime";

function IncidentsFeed() {
  const { isDarkMode } = useTheme();
  const { reports } = useContext(ReportContext);
  const addresses = useIncidentAddresses(reports);

  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case "high":
        return isDarkMode
          ? "bg-red-900 text-red-300"
          : "bg-red-100 text-red-800";
      case "medium":
        return isDarkMode
          ? "bg-yellow-900 text-yellow-300"
          : "bg-yellow-100 text-yellow-800";
      case "low":
        return isDarkMode
          ? "bg-green-900 text-green-300"
          : "bg-green-100 text-green-800";
      default:
        return isDarkMode
          ? "bg-gray-900 text-gray-300"
          : "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <div className="max-w-auto mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white mb-6">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Emergency Feed</h1>
              <p className="text-red-100 text-lg mt-2">
                Live reports and incidents
              </p>
            </div>
          </div>
        </div>

        {/* Feed Items */}
        <div className="space-y-6">
          {reports && reports.length > 0 ? (
            reports.map((report, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg ${
                  isDarkMode
                    ? "bg-slate-800 border border-slate-700"
                    : "bg-white border border-slate-200"
                }`}
              >
                {/* Post Header - Author Info */}
                <div className="flex items-center justify-between p-4 pb-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isDarkMode ? "bg-slate-700" : "bg-slate-100"
                      }`}
                    >
                      <User
                        className={`w-6 h-6 ${
                          isDarkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <Link to={`/profile-visit/${report?.user?.id}`}>
                        <h4
                          className={`font-semibold text-base hover:underline cursor-pointer ${
                            isDarkMode ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {report?.user?.name}
                        </h4>
                      </Link>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          <Clock
                            className={`w-3 h-3 ${
                              isDarkMode ? "text-slate-400" : "text-slate-500"
                            }`}
                          />
                          <span
                            className={`text-xs ${
                              isDarkMode ? "text-slate-400" : "text-slate-500"
                            }`}
                          >
                            {formatTime(report.time)}
                          </span>
                        </div>
                        <span
                          className={`text-xs ${
                            isDarkMode ? "text-slate-500" : "text-slate-400"
                          }`}
                        >
                          •
                        </span>
                        <div className="flex items-center space-x-1">
                          <MapPin
                            className={`w-3 h-3 ${
                              isDarkMode ? "text-slate-400" : "text-slate-500"
                            }`}
                          />
                          <span
                            className={`text-xs ${
                              isDarkMode ? "text-slate-400" : "text-slate-500"
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
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(
                        report.severity
                      )}`}
                    >
                      {report?.severity?.toUpperCase() || "UNKNOWN"}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode
                          ? "bg-green-900 text-green-300"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {report?.status?.toUpperCase() || "ACTIVE"}
                    </span>
                  </div>
                </div>

                {/* Incident Type Badge */}
                <div className="px-4 pb-3">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle
                      className={`w-5 h-5 ${
                        isDarkMode ? "text-red-400" : "text-red-600"
                      }`}
                    />
                    <h3
                      className={`font-bold text-lg ${
                        isDarkMode ? "text-red-400" : "text-red-600"
                      }`}
                    >
                      {report?.type}
                    </h3>
                  </div>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-3">
                  <p
                    className={`text-base leading-relaxed ${
                      isDarkMode ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    {report?.description}
                  </p>
                </div>

                {/* Image Placeholder */}
                <div
                  className={`mx-4 mb-4 rounded-lg overflow-hidden ${
                    isDarkMode ? "bg-slate-700" : "bg-slate-100"
                  }`}
                >
                  {report?.photo ? (
                    <img
                      src={report.photo}
                      alt="Incident"
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <div
                      className={`h-48 flex flex-col items-center justify-center border-2 border-dashed ${
                        isDarkMode
                          ? "border-slate-600 text-slate-400"
                          : "border-slate-300 text-slate-500"
                      }`}
                    >
                      <Camera className="w-12 h-12 mb-2" />
                      <p className="text-sm font-medium">No image provided</p>
                      <p className="text-xs">User didn't attach a photo</p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div
                  className={`px-4 py-3 border-t ${
                    isDarkMode ? "border-slate-700" : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
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
                        <span className="text-sm font-medium">
                          Alert Nearby
                        </span>
                      </button>
                    </div>
                    <div
                      className={`flex items-center space-x-2 text-sm ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      <Users className="w-4 h-4" />
                      <span>7 people helping</span>
                    </div>
                  </div>
                </div>

                {/* Engagement Footer */}
                <div
                  className={`px-4 py-2 text-xs border-t ${
                    isDarkMode
                      ? "border-slate-700 text-slate-500"
                      : "border-slate-200 text-slate-400"
                  }`}
                >
                  <span>
                    Emergency report • Help save lives • Share to spread
                    awareness
                  </span>
                </div>
              </div>
            ))
          ) : (
            // No posts message
            <div
              className={`text-center py-16 ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              <div
                className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isDarkMode ? "bg-slate-800" : "bg-slate-100"
                }`}
              >
                <AlertTriangle className="w-12 h-12" />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                No Emergency Reports Yet
              </h3>
              <p
                className={`text-base max-w-md mx-auto ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                There are currently no emergency incidents reported in your
                area. Stay safe and check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IncidentsFeed;

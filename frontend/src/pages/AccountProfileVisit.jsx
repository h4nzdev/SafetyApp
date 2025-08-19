import React, { useContext } from "react";
import {
  User,
  MapPin,
  Mail,
  Shield,
  AlertTriangle,
  Clock,
  Award,
  Moon,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ReportContext } from "../context/ReportContext";
import { parseLocation } from "../hooks/parselocation";
import { useIncidentAddresses } from "../components/incidentmap/useIncidentAddresses";
import { formatTime } from "../utils/formatTime";

function AccountProfileVisit() {
  // Toggle this to true for dark mode
  const { isDarkMode } = useTheme();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { reports } = useContext(ReportContext);
  const addresses = useIncidentAddresses(reports);

  const getUserReport = reports.filter((report) => report?.user?.id === id);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/user/${id}`);
      if (res.data.success) {
        setUser(res.data.findUser);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(user);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <div className="max-w-auto mx-auto">
        {/* Header with Dark Mode Toggle */}
        {/* Profile Header */}
        <div
          className={`rounded-2xl p-8 mb-8 ${
            isDarkMode
              ? "bg-slate-800 border border-slate-700"
              : "bg-white border border-slate-200"
          } shadow-lg`}
        >
          <div className="flex items-start space-x-6">
            {/* Profile Picture */}
            <div
              className={`w-32 h-32 rounded-2xl flex items-center justify-center ${
                isDarkMode ? "bg-slate-700" : "bg-slate-200"
              }`}
            >
              <User
                className={`w-16 h-16 ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {user?.name}
                </h1>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                    isDarkMode
                      ? "bg-blue-900 text-blue-300"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {user?.department}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <Mail
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  />
                  <span
                    className={`${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {user?.email}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  />
                  <span
                    className={`${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {user?.address}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield
                    className={`w-5 h-5 ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  />
                  <span
                    className={`${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    Member since January 2024
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${
                      isDarkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {getUserReport.length}
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Total Reports
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${
                      isDarkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    18
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Verified Reports
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${
                      isDarkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    94%
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Accuracy Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div
          className={`rounded-2xl p-6 mb-8 ${
            isDarkMode
              ? "bg-slate-800 border border-slate-700"
              : "bg-white border border-slate-200"
          } shadow-lg`}
        >
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h2
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Recent Reports
            </h2>
          </div>

          <div className="space-y-4">
            {/* Report 1 */}

            {getUserReport.map((report) => (
              <div
                className={`border rounded-xl p-4 ${
                  isDarkMode
                    ? "border-slate-700 bg-slate-700/30"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {report.type}
                    </h3>
                    <p
                      className={`text-sm mt-1 ${
                        isDarkMode ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {report.description}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      isDarkMode
                        ? "bg-green-900 text-green-300"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    Resolved
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <MapPin
                        className={`w-4 h-4 ${
                          isDarkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      />
                      <span
                        className={`${
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
                  <div className="flex items-center space-x-1">
                    <Clock
                      className={`w-4 h-4 ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}
                    />
                    <span
                      className={`${
                        isDarkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {formatTime(report.time)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-6">
            <button
              className={`px-6 py-2 rounded-xl font-medium transition-colors ${
                isDarkMode
                  ? "bg-slate-700 hover:bg-slate-600 text-slate-300"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            >
              View All Reports
            </button>
          </div>
        </div>

        {/* Community Impact */}
        <div
          className={`rounded-2xl p-6 ${
            isDarkMode
              ? "bg-slate-800 border border-slate-700"
              : "bg-white border border-slate-200"
          } shadow-lg`}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Award className="w-6 h-6 text-yellow-600" />
            <h2
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Community Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={`text-center p-4 rounded-xl ${
                isDarkMode ? "bg-slate-700" : "bg-slate-50"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                } mb-1`}
              >
                156
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                People Helped
              </div>
            </div>

            <div
              className={`text-center p-4 rounded-xl ${
                isDarkMode ? "bg-slate-700" : "bg-slate-50"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-green-400" : "text-green-600"
                } mb-1`}
              >
                45min
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Avg Response Time Saved
              </div>
            </div>

            <div
              className={`text-center p-4 rounded-xl ${
                isDarkMode ? "bg-slate-700" : "bg-slate-50"
              }`}
            >
              <div
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                } mb-1`}
              >
                Gold
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Community Badge
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountProfileVisit;

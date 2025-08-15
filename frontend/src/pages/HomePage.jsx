import {
  Phone,
  FileText,
  MapPin,
  Users,
  AlertTriangle,
  TrendingUp,
  Clock,
  Map,
} from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { ReportContext } from "../context/ReportContext";
import { formatTime } from "../utils/formatTime";
import Swal from "sweetalert2";
import { useIncidentAddresses } from "../components/incidentmap/useIncidentAddresses";
import { useTheme } from "../context/ThemeContext";

function parseLocation(loc) {
  if (!loc) return null;
  const [lat, lng] = loc.split(",").map(Number);
  if (isNaN(lat) || isNaN(lng)) return null;
  return { lat, lng };
}

function HomePage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { reports } = useContext(ReportContext);
  const addresses = useIncidentAddresses(reports);
  const { isDarkMode } = useTheme();

  console.log(reports);
  const activeReport = reports.filter(
    (report) => report.status === "Active"
  ).length;

  const handleCall = () => {
    Swal.fire({
      title: "Calling 911",
      text: "Your call has been proccessed",
    });
    window.location.href = "tell:911";
  };

  return (
    <div className="space-y-8">
      {/* Clean Welcome Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user.name.split(" ")[0]}!
        </h1>
        <p className="text-red-100 text-lg">
          Stay informed about emergency situations in your area
        </p>
      </div>

      {/* Streamlined Quick Actions */}
      <div>
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-6`}>Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={handleCall}
            className={`${isDarkMode ? 'bg-slate-800 border-slate-700 hover:border-red-500' : 'bg-white border-slate-200 hover:border-red-300'} p-4 flex flex-col items-center rounded-xl border hover:shadow-md transition-all duration-200 group`}
          >
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors">
              <Phone className="w-6 h-6 text-red-600" />
            </div>
            <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>Call 911</span>
          </button>

          <button
            onClick={() => navigate("/report-incident")}
            className={`${isDarkMode ? 'bg-slate-800 border-slate-700 hover:border-red-500' : 'bg-white border-slate-200 hover:border-red-300'} p-4 flex flex-col items-center rounded-xl border hover:shadow-md transition-all duration-200 group`}
          >
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>Report Incident</span>
          </button>

          <button
            onClick={() => navigate("/map-incedent")}
            className={`${isDarkMode ? 'bg-slate-800 border-slate-700 hover:border-red-500' : 'bg-white border-slate-200 hover:border-red-300'} p-4 flex flex-col items-center rounded-xl border hover:shadow-md transition-all duration-200 group`}
          >
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors">
              <MapPin className="w-6 h-6 text-red-600" />
            </div>
            <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>View Map</span>
          </button>

          <button
            onClick={() => navigate("/emergency-contact")}
            className={`${isDarkMode ? 'bg-slate-800 border-slate-700 hover:border-red-500' : 'bg-white border-slate-200 hover:border-red-300'} p-4 flex flex-col items-center rounded-xl border hover:shadow-md transition-all duration-200 group`}
          >
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>Contacts</span>
          </button>
        </div>
      </div>

      {/* Clean Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-5 rounded-xl border shadow-sm`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-500'} text-sm font-medium`}>Active Incidents</p>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{activeReport}</p>
            </div>
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-5 rounded-xl border shadow-sm`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-500'} text-sm font-medium`}>Today's Reports</p>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{reports.length}</p>
            </div>
            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'} w-12 h-12 rounded-lg flex items-center justify-center`}>
              <TrendingUp className={`w-6 h-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`} />
            </div>
          </div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-5 rounded-xl border shadow-sm`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-500'} text-sm font-medium`}>Response Time</p>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>4.2m</p>
            </div>
            <div className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'} w-12 h-12 rounded-lg flex items-center justify-center`}>
              <Clock className={`w-6 h-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Recent Alerts */}
      <div>
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-6`}>Recent Alerts</h2>
        <div className="space-y-3">
          <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white'} border-l-4 border-yellow-500 rounded-xl shadow-sm`}>
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Flood Warning</h3>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                      MEDIUM
                    </span>
                  </div>
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mb-2 text-sm`}>
                    Heavy rainfall expected in downtown area. Avoid low-lying roads and stay updated on weather conditions.
                  </p>
                  <div className={`flex items-center text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    <Clock className="w-3 h-3 mr-1" />
                    2 hours ago
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white'} border-l-4 border-red-500 rounded-xl shadow-sm`}>
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Road Closure</h3>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                      HIGH
                    </span>
                  </div>
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mb-2 text-sm`}>
                    Main Street closed due to accident. Use alternate routes and expect delays.
                  </p>
                  <div className={`flex items-center text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    <Clock className="w-3 h-3 mr-1" />
                    4 hours ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Recent Incidents */}
      <div>
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'} mb-6`}>Recent Incidents</h2>

        {reports.length === 0 ? (
          <div className={`text-center py-8 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'} rounded-xl border`}>
            <div className={`w-12 h-12 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'} rounded-lg flex items-center justify-center mx-auto mb-3`}>
              <FileText className={`w-6 h-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`} />
            </div>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>No incidents found!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {reports.map((report) => (
              <div key={report.id} className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} rounded-xl border shadow-sm hover:shadow-md transition-all duration-200`}>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{report.type}</h3>
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                          {report.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mb-3 text-sm ${isDarkMode ? 'bg-slate-700' : 'bg-slate-50'} p-3 rounded-lg`}>
                    {report.description}
                  </p>
                  
                  <div className={`flex items-center justify-between pt-3 border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-100'}`}>
                    <div className={`flex items-center text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
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
                    <div className={`flex items-center text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
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
    </div>
  );
}

export default HomePage;
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

function HomePage() {
  const { user } = useContext(UserContext);
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user.name.split(" ")[0]}!
        </h1>
        <p className="text-red-100 text-lg">
          Stay informed about emergency situations in your area
        </p>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <button className="bg-white p-6 rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-200 group">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
              <Phone className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-sm font-semibold text-slate-700">
              Call 911
            </span>
          </button>

          <button className="bg-white p-6 rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-200 group">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-sm font-semibold text-slate-700">
              Report Incident
            </span>
          </button>

          <button className="bg-white p-6 rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-200 group">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
              <MapPin className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-sm font-semibold text-slate-700">
              View Map
            </span>
          </button>

          <button className="bg-white p-6 rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all duration-200 group">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-sm font-semibold text-slate-700">
              Contacts
            </span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">
                Active Incidents
              </p>
              <p className="text-2xl font-bold text-slate-800">12</p>
            </div>
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">
                Today's Reports
              </p>
              <p className="text-2xl font-bold text-slate-800">8</p>
            </div>
            <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-slate-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">
                Response Time
              </p>
              <p className="text-2xl font-bold text-slate-800">4.2m</p>
            </div>
            <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-slate-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Recent Alerts
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <h3 className="font-semibold text-slate-800">
                    Flood Warning
                  </h3>
                </div>
                <p className="text-slate-600 text-sm mb-2">
                  Heavy rainfall expected in downtown area. Avoid low-lying
                  roads and stay updated on weather conditions.
                </p>
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="w-4 h-4 mr-1" />2 hours ago
                </div>
              </div>
              <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <h3 className="font-semibold text-slate-800">Road Closure</h3>
                </div>
                <p className="text-slate-600 text-sm mb-2">
                  Main Street closed due to accident. Use alternate routes and
                  expect delays.
                </p>
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="w-4 h-4 mr-1" />4 hours ago
                </div>
              </div>
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Incidents */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Recent Incidents
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Traffic Accident
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Two-vehicle collision at intersection requiring emergency
                  response.
                </p>
                <div className="flex items-center text-xs text-slate-500">
                  <Map className="w-4 h-4 mr-1" />
                  Main St & Oak Ave
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />1 hour ago
                </div>
              </div>
              <div className="bg-red-100 px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-red-700">Active</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Fire Incident
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Small kitchen fire quickly contained by fire department.
                </p>
                <div className="flex items-center text-xs text-slate-500">
                  <Map className="w-4 h-4 mr-1" />
                  123 Elm Street
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />3 hours ago
                </div>
              </div>
              <div className="bg-green-100 px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-green-700">
                  Resolved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

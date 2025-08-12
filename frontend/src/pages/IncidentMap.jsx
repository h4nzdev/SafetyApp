import { MapPin, Map, Filter, Clock, AlertTriangle, TrendingUp } from "lucide-react";

function IncidentMap() {
  const mockIncidents = [
    {
      id: 1,
      type: "Traffic Accident",
      description: "Multiple vehicle collision with minor injuries",
      location: "Intersection of Main St & 5th Ave",
      time: "15 minutes ago",
      severity: "high"
    },
    {
      id: 2,
      type: "Fire Alert",
      description: "Residential fire reported, fire department on scene",
      location: "742 Evergreen Terrace",
      time: "45 minutes ago",
      severity: "high"
    },
    {
      id: 3,
      type: "Medical Emergency",
      description: "Elderly person requiring immediate medical attention",
      location: "Golden Age Retirement Home",
      time: "1 hour ago",
      severity: "medium"
    },
    {
      id: 4,
      type: "Power Outage",
      description: "Widespread power outage affecting 200+ homes",
      location: "Downtown District",
      time: "2 hours ago",
      severity: "medium"
    },
    {
      id: 5,
      type: "Flooding",
      description: "Street flooding due to heavy rain",
      location: "Riverside Avenue",
      time: "3 hours ago",
      severity: "low"
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-slate-500";
    }
  };

  const getSeverityText = (severity) => {
    switch (severity) {
      case "high": return "High Priority";
      case "medium": return "Medium Priority";
      case "low": return "Low Priority";
      default: return "Unknown";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center">
            <Map className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Incident Map</h1>
            <p className="text-red-100 text-lg mt-2">Real-time view of emergency situations across your area</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">Active Incidents</p>
              <p className="text-2xl font-bold text-slate-800">5</p>
            </div>
            <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">High Priority</p>
              <p className="text-2xl font-bold text-slate-800">2</p>
            </div>
            <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">Response Time</p>
              <p className="text-2xl font-bold text-slate-800">4.2m</p>
            </div>
            <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-slate-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">Today's Reports</p>
              <p className="text-2xl font-bold text-slate-800">12</p>
            </div>
            <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-slate-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-800">Live Incident Map</h3>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-colors duration-200">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-xl transition-colors duration-200">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">My Location</span>
            </button>
          </div>
        </div>

        {/* Map Placeholder with Enhanced Legend */}
        <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-96 rounded-2xl relative overflow-hidden">
          <div className="absolute top-6 right-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-4">Severity Legend</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-red-500 mr-3 shadow-sm"></span>
                <span className="text-sm font-medium text-slate-700">High Priority</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-yellow-500 mr-3 shadow-sm"></span>
                <span className="text-sm font-medium text-slate-700">Medium Priority</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-green-500 mr-3 shadow-sm"></span>
                <span className="text-sm font-medium text-slate-700">Low Priority</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-12 h-12 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-700 mb-2">Interactive Map</h4>
              <p className="text-slate-600 mb-2">
                Real-time incident locations with detailed information
              </p>
              <p className="text-sm text-slate-500">
                Click on pins to view incident details
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Incident List */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-800">Recent Incidents</h3>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-xl text-sm font-medium hover:bg-red-200 transition-colors">
              All Incidents
            </button>
            <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors">
              High Priority
            </button>
            <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors">
              Last 24h
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {mockIncidents.map((incident) => (
            <div
              key={incident.id}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-200 hover:border-red-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className={`inline-block w-4 h-4 rounded-full mr-3 ${getSeverityColor(incident.severity)} shadow-sm`}></span>
                    <h4 className="font-bold text-lg text-slate-800">
                      {incident.type}
                    </h4>
                    <span className="ml-3 px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-medium">
                      {getSeverityText(incident.severity)}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    {incident.description}
                  </p>
                  <div className="flex items-center text-sm text-slate-500 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {incident.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {incident.time}
                    </div>
                  </div>
                </div>
                <button className="ml-6 p-3 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl transition-colors duration-200">
                  <MapPin className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IncidentMap;

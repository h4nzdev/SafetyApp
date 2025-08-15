import React from "react";
import { useContext } from "react";
import { ReportContext } from "../context/ReportContext";
import IncidentMapLeaflet from "../components/incidentmap/IncidentMapLeaflet";
import IncidentList from "../components/incidentmap/IncidentList";
import { useIncidentAddresses } from "../components/incidentmap/useIncidentAddresses";
import { AlertTriangle, Clock, Filter, MapPin, TrendingUp } from "lucide-react";
import { Map as MapIcon } from "lucide-react";

function IncidentMap() {
  const { reports } = useContext(ReportContext);
  const addresses = useIncidentAddresses(reports);
  const activeReport = reports.filter(
    (report) => report.status === "Active"
  ).length;

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-slate-500";
    }
  };

  const getSeverityText = (severity) => {
    switch (severity) {
      case "high":
        return "High Priority";
      case "medium":
        return "Medium Priority";
      case "low":
        return "Low Priority";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center">
            <MapIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Incident Map</h1>
            <p className="text-red-100 text-lg mt-2">
              Real-time view of emergency situations across your area
            </p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">
                Active Incidents
              </p>
              <p className="text-2xl font-bold text-slate-800">
                {activeReport}
              </p>
            </div>
            <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium">
                High Priority
              </p>
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
              <p className="text-slate-500 text-sm font-medium">
                Response Time
              </p>
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
              <p className="text-slate-500 text-sm font-medium">
                Today's Reports
              </p>
              <p className="text-2xl font-bold text-slate-800">
                {reports.length}
              </p>
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
          <h3 className="text-xl font-bold text-slate-800">
            Live Incident Map
          </h3>
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
        {/* Real Map with Incident Markers */}
        <div className="relative h-96 rounded-2xl overflow-hidden">
          {/* Severity Legend */}
          <div className="absolute top-6 right-6 z-[1000] bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-4">Severity Legend</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-red-500 mr-3 shadow-sm"></span>
                <span className="text-sm font-medium text-slate-700">
                  High Priority
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-yellow-500 mr-3 shadow-sm"></span>
                <span className="text-sm font-medium text-slate-700">
                  Medium Priority
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-green-500 mr-3 shadow-sm"></span>
                <span className="text-sm font-medium text-slate-700">
                  Low Priority
                </span>
              </div>
            </div>
          </div>

          {/* Leaflet Map */}
          <IncidentMapLeaflet reports={reports} addresses={addresses} />
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

        <IncidentList
          reports={reports}
          getSeverityColor={getSeverityColor}
          getSeverityText={getSeverityText}
          addresses={addresses}
        />
      </div>
    </div>
  );
}

export default IncidentMap;

import { MapPin, Clock } from "lucide-react";
import { formatTime } from "../../utils/formatTime";

function parseLocation(loc) {
  if (!loc) return null;
  const [lat, lng] = loc.split(",").map(Number);
  if (isNaN(lat) || isNaN(lng)) return null;
  return { lat, lng };
}

export default function IncidentList({ reports, getSeverityColor, getSeverityText, addresses }) {
  return (
    <div className="space-y-4">
      {reports.map((incident) => (
        <div
          key={incident.id}
          className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-200 hover:border-red-200"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <span
                  className={`inline-block w-4 h-4 rounded-full mr-3 ${getSeverityColor(
                    incident.severity
                  )} shadow-sm`}
                ></span>
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
                  {(() => {
                    const pos = parseLocation(incident.location);
                    const key = pos ? `${pos.lat},${pos.lng}` : null;
                    return key ? (addresses[key] || "Loading address...") : "No location";
                  })()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {formatTime(incident.time)}
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
  );
}

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";

const createMarkerIcon = (color) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });
};

const severityMarkers = {
  high: createMarkerIcon("red"),
  medium: createMarkerIcon("yellow"),
  low: createMarkerIcon("green"),
  default: createMarkerIcon("blue"),
};

function parseLocation(loc) {
  if (!loc) return null;
  const [lat, lng] = loc.split(",").map(Number);
  if (isNaN(lat) || isNaN(lng)) return null;
  return { lat, lng };
}

export default function IncidentMapLeaflet({ reports, addresses }) {
  const center = { lat: 10.3157, lng: 123.8854 };
  return (
    <MapContainer
      center={center}
      zoom={12}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {reports.map((incident) => {
        const pos = parseLocation(incident.location);
        if (!pos) return null;
        const key = `${pos.lat},${pos.lng}`;
        return (
          <Marker
            key={incident.id}
            position={pos}
            icon={
              severityMarkers[incident.severity?.toLowerCase()] ||
              severityMarkers.default
            }
          >
            <Popup>
              <div>
                <strong>{incident.type}</strong>
                <br />
                {incident.description}
                <br />
                <span
                  className={`font-medium ${
                    incident.severity?.toLowerCase() === "high"
                      ? "text-red-600"
                      : incident.severity?.toLowerCase() === "medium"
                      ? "text-yellow-600"
                      : incident.severity?.toLowerCase() === "low"
                      ? "text-green-600"
                      : "text-slate-600"
                  }`}
                >
                  Priority: {incident.severity || "Not specified"}
                </span>
                <br />
                <span className="text-xs text-slate-500">
                  {addresses[key] || "Loading address..."}
                </span>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

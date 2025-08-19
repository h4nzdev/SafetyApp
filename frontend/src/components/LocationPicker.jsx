import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Simple marker icon fix for Leaflet + React
import L from "leaflet";
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Component for picking a location on the map
function LocationMarker({ onChange, value }) {
  const [position, setPosition] = useState(value || null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      if (onChange) onChange(e.latlng);
    },
  });

  return position ? <Marker position={position} icon={markerIcon} /> : null;
}

/**
 * LocationPicker - A simple map for picking a location
 * @param {function} onChange - Called with {lat, lng} when user picks a location
 * @param {object} value - Initial value {lat, lng}
 */
const LocationPicker = ({ onChange, value }) => {
  const [center, setCenter] = useState(
    value || { lat: 10.3157, lng: 123.8854 }
  ); // Default to Cebu City

  useEffect(() => {
    // Get user's current location if available
    if (!value && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCenter(userLocation);
          if (onChange) onChange(userLocation);
        },
        (error) => {
          console.log("Geolocation error:", error);
          // Keep default center if geolocation fails
        }
      );
    }
  }, []);

  return (
    <div style={{ height: "300px", width: "100%", marginBottom: 16 }}>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onChange={onChange} value={value} />
      </MapContainer>
    </div>
  );
};

export default LocationPicker;

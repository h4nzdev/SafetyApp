import { useEffect, useState } from "react";

export function useIncidentAddresses(reports) {
  const [addresses, setAddresses] = useState({});

  function parseLocation(loc) {
    if (!loc) return null;
    const [lat, lng] = loc.split(",").map(Number);
    if (isNaN(lat) || isNaN(lng)) return null;
    return { lat, lng };
  }

  const fetchAddress = async (lat, lng) => {
    const key = `${lat},${lng}`;
    if (addresses[key]) return addresses[key];
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      const address = data.display_name || `${lat}, ${lng}`;
      setAddresses((prev) => ({ ...prev, [key]: address }));
      return address;
    } catch {
      return `${lat}, ${lng}`;
    }
  };

  useEffect(() => {
    reports.forEach((incident) => {
      const pos = parseLocation(incident.location);
      if (!pos) return;
      const key = `${pos.lat},${pos.lng}`;
      if (!addresses[key]) {
        fetchAddress(pos.lat, pos.lng).then((address) => {
          setAddresses((prev) => ({ ...prev, [key]: address }));
        });
      }
    });
    // eslint-disable-next-line
  }, [reports]);

  return addresses;
}

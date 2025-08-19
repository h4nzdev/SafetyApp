export async function getAddressFromCoordinates(lat, lng) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
    );
    const data = await response.json();
    return data.display_name;
  } catch (error) {
    console.error("Error fetching address:", error);
    return `${lat}, ${lng}`; // Fallback to coordinates if geocoding fails
  }
}

export async function getCoordinatesFromAddress(address) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
    );
    const data = await response.json();
    if (data && data[0]) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
}

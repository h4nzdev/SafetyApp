export function parseLocation(loc) {
  if (!loc) return null;
  const [lat, lng] = loc.split(",").map(Number);
  if (isNaN(lat) || isNaN(lng)) return null;
  return { lat, lng };
}

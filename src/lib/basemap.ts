// CARTO "Positron" (light_all) raster basemap, shared by every Leaflet map.
//
// Since 23 September 2026 CARTO serves an "API KEY REQUIRED" watermark in place
// of every tile unless the request carries a key. Keys are free for
// non-profits (up to 5M requests/month): https://carto.com/basemaps/apikey
//
// Required env var:
//   NEXT_PUBLIC_CARTO_API_KEY — inlined into the client bundle at build time,
//                               so redeploy after adding or changing it.

const key = process.env.NEXT_PUBLIC_CARTO_API_KEY;

if (!key && process.env.NODE_ENV !== "production") {
  console.warn(
    "[basemap] NEXT_PUBLIC_CARTO_API_KEY is not set — map tiles will show CARTO's \"API key required\" watermark.",
  );
}

export const BASEMAP_URL =
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" +
  (key ? `?key=${encodeURIComponent(key)}` : "");

export const BASEMAP_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

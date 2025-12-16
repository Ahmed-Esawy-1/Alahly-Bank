import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet.markercluster";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const sampleATMs = [
  {
    id: 1,
    name: "NBE ATM - Tahrir",
    address: "Tahrir Square",
    city: "Cairo",
    lat: 30.0444,
    lng: 31.2357,
  },
  {
    id: 2,
    name: "NBE ATM - Maadi",
    address: "El Nasr St.",
    city: "Cairo",
    lat: 29.9668,
    lng: 31.2646,
  },
  {
    id: 3,
    name: "NBE ATM - Alexandria Mall",
    address: "Alex Mall",
    city: "Alexandria",
    lat: 31.2001,
    lng: 29.9187,
  },
  {
    id: 4,
    name: "NBE ATM - Zamalek",
    address: "Saray El Gezirah St.",
    city: "Cairo",
    lat: 30.0626,
    lng: 31.2153,
  },
];

function Markers({ data }) {
  const map = useMap();

  useEffect(() => {
    const cluster = L.markerClusterGroup();
    data.forEach((atm) => {
      const marker = L.marker([atm.lat, atm.lng]);
      marker.bindPopup(
        `<b>${atm.name}</b><br>${atm.address}<br><small>${atm.city}</small>`
      );
      cluster.addLayer(marker);
    });

    map.addLayer(cluster);
    return () => map.removeLayer(cluster);
  }, [data]);

  return null;
}

export default function ATMLocations() {
  const [allATMs] = useState(sampleATMs);
  const [filtered, setFiltered] = useState(sampleATMs);
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const unique = [...new Set(allATMs.map((a) => a.city))];
    setCities(unique);
  }, []);

  useEffect(() => {
    let result = allATMs;

    if (city) result = result.filter((a) => a.city === city);
    if (search.trim() !== "") {
      result = result.filter((a) =>
        (a.name + a.address + a.city)
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  }, [search, city]);

  return (
    <div className="container" style={{ height: "100vh" }}>
      {/* Controls */}
      <div style={{ padding: "10px", display: "flex", gap: "10px" }}>
        <input
          placeholder="Search ATM..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "6px", flex: 1 }}
        />

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "6px" }}
        >
          <option value="">All cities</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Map */}
      <MapContainer
        center={[30.0444, 31.2357]}
        zoom={6}
        style={{ height: "90vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Markers data={filtered} />
      </MapContainer>
    </div>
  );
}

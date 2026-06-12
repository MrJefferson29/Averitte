import React, { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import pin from "../../Assets/pin.png";

export const parseCoordinate = (value) => {
  if (value === null || value === undefined) return null;

  const trimmed = String(value).trim();
  if (trimmed === "") return null;

  const num = Number(trimmed);
  return Number.isFinite(num) ? num : null;
};

export const getValidMapCoordinates = (lat, lng) => {
  const latitude = parseCoordinate(lat);
  const longitude = parseCoordinate(lng);

  if (latitude === null || longitude === null) return null;
  if (latitude < -90 || latitude > 90) return null;
  if (longitude < -180 || longitude > 180) return null;

  return { lat: latitude, lng: longitude };
};

const customIcon = new L.Icon({
  iconUrl: pin,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function ChangeMapView({ lat, lng, zoom }) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], zoom);
  }, [lat, lng, zoom, map]);

  return null;
}

function MapResizeHandler() {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 0);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
}

const Map = ({ lat, long, lng, location = "", height = "400px", zoom = 13 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const coordinates = useMemo(
    () => getValidMapCoordinates(lat, long ?? lng),
    [lat, long, lng]
  );

  if (!coordinates) {
    return <p>Location information is not available.</p>;
  }

  const center = [coordinates.lat, coordinates.lng];
  const mapKey = `${coordinates.lat}-${coordinates.lng}`;

  if (!mounted) {
    return (
      <div
        style={{ height, width: "100%", background: "#e9ecef", borderRadius: "8px" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="package-map-wrapper" style={{ height, width: "100%" }}>
      <MapContainer
        key={mapKey}
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%", borderRadius: "8px" }}
        scrollWheelZoom
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <ChangeMapView lat={coordinates.lat} lng={coordinates.lng} zoom={zoom} />
        <MapResizeHandler />
        <Marker position={center} icon={customIcon}>
          <Popup>
            {location
              ? `Package current location: ${location}`
              : `Coordinates: ${coordinates.lat}, ${coordinates.lng}`}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

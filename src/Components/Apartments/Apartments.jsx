import React, { useState } from "react";
import './Apartments.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon for leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Mock apartment data (replace with API call in future)
const mockApartments = [
  {
    id: 1,
    name: "Green Villa",
    location: "London",
    price: "£1200/mo",
    image: "https://via.placeholder.com/120x80?text=Green+Villa",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: 2,
    name: "City Heights",
    location: "London",
    price: "£1500/mo",
    image: "https://via.placeholder.com/120x80?text=City+Heights",
    lat: 51.509,
    lng: -0.13,
  },
  {
    id: 3,
    name: "Sunset Flats",
    location: "Manchester",
    price: "£900/mo",
    image: "https://via.placeholder.com/120x80?text=Sunset+Flats",
    lat: 53.4808,
    lng: -2.2426,
  },
];

export default function Apartments({ location }) {
  const [selectedApartment, setSelectedApartment] = useState(null);

  // Filter apartments by location
  const filteredApartments = location
    ? mockApartments.filter(a =>
        a.location.toLowerCase().includes(location.toLowerCase())
      )
    : mockApartments;

  // Center map on first filtered apartment or default to London
  const mapCenter = filteredApartments.length
    ? [filteredApartments[0].lat, filteredApartments[0].lng]
    : [51.5074, -0.1278];

  return (
    <div className="apartments-container">
      <div className="apartments-list">
        <h2>Available Apartments</h2>
        {filteredApartments.map(apartment => (
          <div
            key={apartment.id}
            className="apartment-item"
            onClick={() => setSelectedApartment(apartment)}
          >
            <img
              src={apartment.image}
              alt={apartment.name}
              className="apartment-image"
            />
            <div className="apartment-info">
              <div className="apartment-title">{apartment.name}</div>
              <div className="apartment-location">{apartment.location}</div>
              <div className="apartment-price">{apartment.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="apartments-map">
        <MapContainer
          center={mapCenter}
          zoom={6}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredApartments.map(apartment => (
            <Marker
              key={apartment.id}
              position={[apartment.lat, apartment.lng]}
              eventHandlers={{
                click: () => setSelectedApartment(apartment),
              }}
            >
              <Popup>
                <img
                  src={apartment.image}
                  alt={apartment.name}
                  style={{ width: "100px", borderRadius: "6px", marginBottom: "6px" }}
                />
                <div className="popup-title">{apartment.name}</div>
                <div className="popup-location">{apartment.location}</div>
                <div className="apartment-price">{apartment.price}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
import React from "react";
import "./BrowseApartments.css";

// Use same mock data for now
const mockApartments = [
  {
    id: 1,
    name: "Green Villa",
    location: "London",
    price: "£1200/mo",
    image: "https://via.placeholder.com/120x80?text=Green+Villa",
  },
  {
    id: 2,
    name: "City Heights",
    location: "London",
    price: "£1500/mo",
    image: "https://via.placeholder.com/120x80?text=City+Heights",
  },
  {
    id: 3,
    name: "Sunset Flats",
    location: "Manchester",
    price: "£900/mo",
    image: "https://via.placeholder.com/120x80?text=Sunset+Flats",
  },
];

export default function BrowseApartments() {
  return (
    <div className="browse-apartments-container">
      <h2>Browse Apartments</h2>
      <div className="apartments-grid">
        {mockApartments.map(apartment => (
          <div key={apartment.id} className="apartment-card">
            <img src={apartment.image} alt={apartment.name} className="apartment-image" />
            <div className="apartment-info">
              <div className="apartment-title">{apartment.name}</div>
              <div className="apartment-location">{apartment.location}</div>
              <div className="apartment-price">{apartment.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
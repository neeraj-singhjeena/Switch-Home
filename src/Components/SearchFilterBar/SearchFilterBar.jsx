import React, { useState } from 'react';
import './SearchFilterBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faTimesCircle,
  faSyncAlt,
  faTag,
  faBed,
  faHome,
  faStar,
  faEllipsisH,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

// Mock location data: countries, famous cities, Indian states/cities
const locations = [
  // Countries
  "United States", "United Kingdom", "India", "Canada", "Australia", "Germany", "France", "Italy", "Spain", "Japan", "China", "Brazil", "Russia",
  // Famous world cities
  "New York", "London", "Paris", "Tokyo", "Sydney", "Berlin", "Rome", "Barcelona", "Toronto", "Los Angeles", "Dubai", "Singapore", "Hong Kong",
  // Indian states
  "Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "West Bengal", "Gujarat", "Rajasthan", "Uttar Pradesh", "Kerala", "Punjab",
  // Famous Indian cities
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Goa"
];

const propertyTypes = ["Apartment", "Villa", "Studio", "Penthouse", "House", "Shared", "PG"];

const SearchFilterBar = ({
  location,
  setLocation,
  radius,
  setRadius,
  price,
  setPrice,
  bedrooms,
  setBedrooms,
  propertyType,
  setPropertyType,
  keywords,
  setKeywords
}) => {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [locationInput, setLocationInput] = useState(location || "");
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // Handlers for filter options
  const handleClearLocation = () => {
    setLocation('');
    setLocationInput('');
  };

  const handleLocationClick = () => {
    setShowLocationDropdown(!showLocationDropdown);
  };

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setLocationInput(loc);
    setShowLocationDropdown(false);
  };

  // Filter locations for dropdown
  const filteredLocations = locations.filter(loc =>
    loc.toLowerCase().includes(locationInput.toLowerCase())
  );

  return (
    <div className="search-filter-bar-container">
      {/* Search Input Section */}
      <div className="search-input-section">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon location-icon" />
        <div className="search-text-group">
          <span className="search-label">Search</span>
          <div className="location-display-wrapper" style={{ position: "relative" }}>
            <input
              type="text"
              className="location-text"
              placeholder="Select Location"
              value={locationInput}
              onChange={e => {
                setLocationInput(e.target.value);
                setShowLocationDropdown(true);
              }}
              onClick={handleLocationClick}
              autoComplete="off"
            />
            <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
            {locationInput && (
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="clear-location-icon"
                onClick={handleClearLocation}
              />
            )}
            {/* Location dropdown */}
            {showLocationDropdown && (
              <div className="location-dropdown" style={{
                position: "absolute",
                top: "110%",
                left: 0,
                right: 0,
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                zIndex: 100,
                maxHeight: "180px",
                overflowY: "auto"
              }}>
                {filteredLocations.length === 0 && (
                  <div style={{ padding: "8px", color: "#888" }}>No matches found</div>
                )}
                {filteredLocations.map(loc => (
                  <div
                    key={loc}
                    style={{
                      padding: "8px 16px",
                      cursor: "pointer",
                      borderBottom: "1px solid #f5f5f5"
                    }}
                    onClick={() => handleLocationSelect(loc)}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filter Options Section */}
      <div className="filter-options-section">
        {/* Radius */}
        <div className="filter-option">
          <FontAwesomeIcon icon={faSyncAlt} className="filter-icon" />
          <span className="filter-label">Radius</span>
          <input
            type="number"
            min={1}
            max={50}
            value={radius || ""}
            onChange={e => setRadius(e.target.value)}
            placeholder="km"
            style={{ width: "50px", marginTop: "4px", fontSize: "0.8rem" }}
          />
        </div>
        {/* Price */}
        <div className="filter-option">
          <FontAwesomeIcon icon={faTag} className="filter-icon" />
          <span className="filter-label">Price</span>
          <input
            type="number"
            min={0}
            value={price || ""}
            onChange={e => setPrice(e.target.value)}
            placeholder="Max"
            style={{ width: "60px", marginTop: "4px", fontSize: "0.8rem" }}
          />
        </div>
        {/* Bedrooms */}
        <div className="filter-option">
          <FontAwesomeIcon icon={faBed} className="filter-icon" />
          <span className="filter-label">Bedrooms</span>
          <input
            type="number"
            min={1}
            max={10}
            value={bedrooms || ""}
            onChange={e => setBedrooms(e.target.value)}
            placeholder="#"
            style={{ width: "40px", marginTop: "4px", fontSize: "0.8rem" }}
          />
        </div>
        {/* Property Type */}
        <div className="filter-option">
          <FontAwesomeIcon icon={faHome} className="filter-icon" />
          <span className="filter-label">Property type</span>
          <select
            value={propertyType || ""}
            onChange={e => setPropertyType(e.target.value)}
            style={{ marginTop: "4px", fontSize: "0.8rem" }}
          >
            <option value="">Any</option>
            {propertyTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        {/* Keywords */}
        <div className="filter-option">
          <FontAwesomeIcon icon={faStar} className="filter-icon" />
          <span className="filter-label">Keywords</span>
          <input
            type="text"
            value={keywords || ""}
            onChange={e => setKeywords(e.target.value)}
            placeholder="e.g. pool, gym"
            style={{ width: "80px", marginTop: "4px", fontSize: "0.8rem" }}
          />
        </div>
        {/* More Filters */}
        <button
          className={`filter-option more-filters ${showMoreFilters ? 'active' : ''}`}
          onClick={() => setShowMoreFilters(!showMoreFilters)}
        >
          <FontAwesomeIcon icon={faEllipsisH} className="filter-icon" />
          <span className="filter-label">Filters</span>
        </button>
      </div>
      {showMoreFilters && (
        <div className="more-filters-panel">
          <p>More detailed filter controls would go here. E.g., min/max price, specific amenities, etc.</p>
          <button onClick={() => setShowMoreFilters(false)}>Close Filters</button>
        </div>
      )}
    </div>
  );
};

export default SearchFilterBar;

/*
  // TODO: In future, replace mock location data with API autocomplete (Google Places, etc.)
  // TODO: Connect filter states to apartment search API for live results
*/
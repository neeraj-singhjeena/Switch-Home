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

const SearchFilterBar = () => {
  // State for the selected location
  const [location, setLocation] = useState('London');
  // State for each filter's active status or selected value (conceptually)
  const [activeRadius, setActiveRadius] = useState(false);
  const [activePrice, setActivePrice] = useState(false);
  const [activeBedrooms, setActiveBedrooms] = useState(false);
  const [activePropertyType, setActivePropertyType] = useState(false);
  const [activeKeywords, setActiveKeywords] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // Handlers for filter interactions
  const handleClearLocation = () => {
    setLocation(''); // Clears the location
    // In a real app, you might also trigger a search update here
  };

  const handleLocationClick = () => {
    // This would typically open a location search modal/dropdown
    console.log('Open location selector');
    // For demonstration, let's toggle a dummy state
    // setLocationDropdownOpen(!locationDropdownOpen);
  };

  const handleFilterClick = (filterName) => {
    console.log(`Open ${filterName} filter options`);
    // Example: based on filterName, you could open a specific modal or dropdown
    switch (filterName) {
      case 'Radius':
        setActiveRadius(!activeRadius);
        break;
      case 'Price':
        setActivePrice(!activePrice);
        break;
      case 'Bedrooms':
        setActiveBedrooms(!activeBedrooms);
        break;
      case 'Property type':
        setActivePropertyType(!activePropertyType);
        break;
      case 'Keywords':
        setActiveKeywords(!activeKeywords);
        break;
      case 'Filters':
        setShowMoreFilters(!showMoreFilters); // Toggle the 'more filters' panel
        break;
      default:
        break;
    }
    // In a full implementation, you'd manage visibility of specific filter UIs
  };

  return (
    <div className="search-filter-bar-container">
      {/* Search Input Section */}
      <div className="search-input-section">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="search-icon location-icon" />
        <div className="search-text-group">
          <span className="search-label">Search</span>
          <div className="location-display-wrapper">
            {location ? (
              <span className="location-text" onClick={handleLocationClick}>
                <FontAwesomeIcon icon={faCaretDown} className="caret-icon" /> {location}
              </span>
            ) : (
              <span className="location-placeholder" onClick={handleLocationClick}>
                 Select Location
              </span>
            )}
            {location && (
              <FontAwesomeIcon
                icon={faTimesCircle}
                className="clear-location-icon"
                onClick={handleClearLocation}
              />
            )}
          </div>
        </div>
      </div>

      {/* Filter Options Section */}
      <div className="filter-options-section">
        {/* Each filter option is now a button styled to look like a clickable segment */}
        <button className={`filter-option ${activeRadius ? 'active' : ''}`} onClick={() => handleFilterClick('Radius')}>
          <FontAwesomeIcon icon={faSyncAlt} className="filter-icon" />
          <span className="filter-label">Radius</span>
        </button>

        <button className={`filter-option ${activePrice ? 'active' : ''}`} onClick={() => handleFilterClick('Price')}>
          <FontAwesomeIcon icon={faTag} className="filter-icon" />
          <span className="filter-label">Price</span>
        </button>

        <button className={`filter-option ${activeBedrooms ? 'active' : ''}`} onClick={() => handleFilterClick('Bedrooms')}>
          <FontAwesomeIcon icon={faBed} className="filter-icon" />
          <span className="filter-label">Bedrooms</span>
        </button>

        <button className={`filter-option ${activePropertyType ? 'active' : ''}`} onClick={() => handleFilterClick('Property type')}>
          <FontAwesomeIcon icon={faHome} className="filter-icon" />
          <span className="filter-label">Property type</span>
        </button>

        <button className={`filter-option ${activeKeywords ? 'active' : ''}`} onClick={() => handleFilterClick('Keywords')}>
          <FontAwesomeIcon icon={faStar} className="filter-icon" />
          <span className="filter-label">Keywords</span>
        </button>

        <button className={`filter-option more-filters ${showMoreFilters ? 'active' : ''}`} onClick={() => handleFilterClick('Filters')}>
          <FontAwesomeIcon icon={faEllipsisH} className="filter-icon" />
          <span className="filter-label">Filters</span>
        </button>
      </div>

      {/* This is where a dropdown or modal for "More Filters" would appear */}
      {showMoreFilters && (
        <div className="more-filters-panel">
          <p>More detailed filter controls would go here. E.g., min/max price, specific amenities, etc.</p>
          {/* Close button for the panel */}
          <button onClick={() => setShowMoreFilters(false)}>Close Filters</button>
        </div>
      )}
    </div>
  );
};

export default SearchFilterBar;
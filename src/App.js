// import "./App.css";
// import Hero from "./Components/hero/Hero";
// import Navbar from "./Components/navbar/Navbar";
// import SearchFilterBar from "./Components/SearchFilterBar/SearchFilterBar";
// import Footer from "./Components/Footer/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <SearchFilterBar />
//       <Hero />
//       <Footer />
//     </>
//   );
// }

// export default App;
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import SearchFilterBar from "./Components/SearchFilterBar/SearchFilterBar";
import Footer from "./Components/Footer/Footer";
import Apartments from "./Components/Apartments/Apartments";
import MatchApartments from "./Components/MatchApartments/MatchApartments";
import BrowseApartments from "./Components/BrowseApartments/BrowseApartments";

function App() {
  // Filter states
  const [location, setLocation] = useState("London");
  const [radius, setRadius] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [keywords, setKeywords] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero>
                <SearchFilterBar
                  location={location}
                  setLocation={setLocation}
                  radius={radius}
                  setRadius={setRadius}
                  price={price}
                  setPrice={setPrice}
                  bedrooms={bedrooms}
                  setBedrooms={setBedrooms}
                  propertyType={propertyType}
                  setPropertyType={setPropertyType}
                  keywords={keywords}
                  setKeywords={setKeywords}
                />
              </Hero>
              <MatchApartments location={location} />
              <Apartments location={location} />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Hero>
                <SearchFilterBar
                  location={location}
                  setLocation={setLocation}
                  radius={radius}
                  setRadius={setRadius}
                  price={price}
                  setPrice={setPrice}
                  bedrooms={bedrooms}
                  setBedrooms={setBedrooms}
                  propertyType={propertyType}
                  setPropertyType={setPropertyType}
                  keywords={keywords}
                  setKeywords={setKeywords}
                />
              </Hero>
            </>
          }
        />
        <Route
          path="/browse"
          element={<BrowseApartments />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
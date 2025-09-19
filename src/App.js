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
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import SearchFilterBar from "./Components/SearchFilterBar/SearchFilterBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchFilterBar />
              <Hero />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <SearchFilterBar />
              <Hero />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

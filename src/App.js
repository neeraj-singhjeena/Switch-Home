import "./App.css";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import SearchFilterBar from "./Components/SearchFilterBar/SearchFilterBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <SearchFilterBar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;

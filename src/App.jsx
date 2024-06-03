import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Cards from "./components/news/Cards";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Team from "./components/pages/team/Team";
import Gallery from "./components/pages/gallery/Gallery";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactHero from "./components/hero/contact/Contact";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cards" element={<Cards />} />

        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<ContactHero />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

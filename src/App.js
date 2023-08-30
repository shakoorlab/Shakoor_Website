import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/pages/NavBar/Navbar";
import Home from "./components/pages/Home/Home";
import Team from "./components/pages/Team/Team";
import Footer from "./components/pages/Footer/Footer";
import Cards from "./components/pages/Article/Cards";
import QuoteHero from "./components/pages/Quote1/QuoteHero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { About } from "./components/pages/About/About";
import { Contact } from "./components/pages/Contact/Contact";
import { End } from "./components/End/End";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="#" element={<QuoteHero />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<Cards />} />
          <Route path="#" element={<End />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

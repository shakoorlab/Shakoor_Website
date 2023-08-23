import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/pages/NavBar/Navbar";
import Home from "./components/pages/Home/Home";
import Team from "./components/pages/Team/Team";
import Footer from "./components/pages/Footer/Footer";
import Cards from "./components/pages/Article/Cards";
import AboutHero from "./components/pages/About/AboutHero";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutHero />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<Cards />} />
          {/* <Route path="/contact-us" component={ContactUs} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

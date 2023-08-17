import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<HomeComponent />} /> */}
          {/* <Route path="/about" element={<AboutComponent />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

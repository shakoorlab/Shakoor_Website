import React from "react";
import "../../../App.css";
import Cards from "../Article/Cards";
import Footer from "../Footer/Footer";
import HeroSection from "../Hero/HeroSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;

import React, { useState } from "react";
import SorghumCards from "../gallery/SorghumCard";

const SorghumAboutTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="gallery-research-tabs-container">
      <div className="gallery-tabs">
        <h1
          className={`tab ${activeTab === "Whatis" ? "active" : ""}`}
          onClick={() => setActiveTab("Whatis")} // corrected the tab key to "Whatis"
        >
          What is Sorghum?
        </h1>
        <h1
          className={`tab ${activeTab === "Uses" ? "active" : ""}`}
          onClick={() => setActiveTab("Uses")}
        >
          Uses
        </h1>
        <h1
          className={`tab ${activeTab === "GlobalProd" ? "active" : ""}`}
          onClick={() => setActiveTab("GlobalProd")}
        >
          Global Production
        </h1>
      </div>
    </div>
  );
};

function SorghumAbout() {
  const [activeTab, setActiveTab] = useState("Whatis");
  return (
    <>
      <div className="cards">
        <SorghumAboutTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Whatis" && (
          <div className="content">
            Sorghum, the world's 5th major cereal crop, is among the most
            efficient crops in conversion of solar energy. It thrives in
            climates where many food crop struggle due to it's resilience to
            drought and heat stress.
          </div>
        )}
        {activeTab === "Uses" && (
          <div className="content">
            Sorghum is a critical source of nutrition for more than half a
            billion people in Africa. It contains nearly 12% protein. Sorghum is
            also rich in iron, zinc, phosphorous, and B-complex vitamins. Along
            with having a high vitamin content, it is also a leading bioenergy
            feedstock.
          </div>
        )}
        {activeTab === "GlobalProd" && (
          <div className="content">
            Sorghum is grown in all corners of the globe, with a harvest of
            nearly 60 M tons in 2021. The U.S. is the largest producer of grain
            sorghum, and produced 11 M tons in 2021.
          </div>
        )}
        {/* Move SorghumCards outside the conditional render blocks */}
        <SorghumCards />
      </div>
    </>
  );
}

export default SorghumAbout;

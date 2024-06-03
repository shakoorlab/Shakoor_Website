import React, { useState } from "react";
import FieldCards from "./FieldCard";
import PhenoCards from "./PhenoCard";
import OutreachCards from "./OutreachCard";
import GreenhouseCards from "./GreenhouseCard";
import FieldDockCards from "./FieldDockCard";

const GalleryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="research-tabs-container">
      <div className="gallery-tabs">
        <h1
          className={`tab ${activeTab === "fieldwork" ? "active" : ""}`}
          onClick={() => setActiveTab("fieldwork")}
        >
          Fieldwork
        </h1>
        <h1
          className={`tab ${activeTab === "outreach" ? "active" : ""}`}
          onClick={() => setActiveTab("outreach")}
        >
          Outreach
        </h1>
        <h1
          className={`tab ${activeTab === "fielddock" ? "active" : ""}`}
          onClick={() => setActiveTab("fielddock")}
        >
          FieldDock
        </h1>
        <h1
          className={`tab ${activeTab === "phenotyping" ? "active" : ""}`}
          onClick={() => setActiveTab("phenotyping")}
        >
          Phenotyping
        </h1>
        <h1
          className={`tab ${activeTab === "greenhouse" ? "active" : ""}`}
          onClick={() => setActiveTab("greenhouse")}
        >
          Greenhouse
        </h1>
      </div>
    </div>
  );
};

function Gallery() {
  const [activeTab, setActiveTab] = useState("fieldwork");
  return (
    <>
      <div className="cards">
        <GalleryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "fieldwork" && (
          <>
            <div className="content">
              We are combining high-quality genomic data with the analysis of
              greenhouse and field-based high-throughput phenotyping data to
              resolve the complexities of adaptive traits in crops such as
              sorghum.
            </div>
            <FieldCards />
          </>
        )}
        {activeTab === "outreach" && (
          <>
            <div className="content">
              Our outreach activities with the community include science,
              innovation, and a chance to learn more about the Shakoor Lab
              through a behind-the-scenes tour of our lab's studies and
              technologies.
            </div>
            <OutreachCards />
          </>
        )}
        {activeTab === "fielddock" && (
          <>
            <div className="content">
              The FieldDock will be a novel all-in-one system that integrates a
              sensor base station with GWAS/G x E x M/crop model edge processor,
              remote wireless sensor network and autonomous UAV drone deployment
              to generate a daily scalable, cohesive and interconnected set of
              field microclimate data. FieldDock will capture measurable plant
              traits, water usage, overall environmental and soil conditions as
              well as daily snapshots of how a crop is performing in real world
              conditions. The FieldDock platform will run entirely on renewable
              energy and is designed to ultimately have a zero-carbon footprint.
            </div>
            <FieldDockCards />
          </>
        )}
        {activeTab === "phenotyping" && (
          <>
            <div className="content">
              An essential part of plant science is understanding how plants
              respond to their environment. One way the Shakoor Lab can measure
              this is by monitoring a plant&#39;s phenotype, such as leaf size
              and shape, root structure, growth rate in particular conditions,
              and more. In the Donald Danforth Plant Science Center's
              Phenotyping Facility, the Shakoor Lab is able to gather an
              unprecedented amount of data about the plants we are studying.
            </div>
            <PhenoCards />
          </>
        )}
        {activeTab === "greenhouse" && (
          <>
            <div className="content">
              An essential part of plant science is understanding how plants
              respond to their environment. One way the Shakoor Lab can measure
              this is by monitoring a plant&#39;s phenotype, such as leaf size
              and shape, root structure, growth rate in particular conditions,
              and more. In the Donald Danforth Plant Science Center's
              Phenotyping Facility, the Shakoor Lab is able to gather an
              unprecedented amount of data about the plants we are studying.
            </div>
            <GreenhouseCards />
          </>
        )}
      </div>
    </>
  );
}

export default Gallery;

import React, { useState } from "react";
import "../styles/Tabs.css";
import TeamHero from "../../hero/team/TeamHero";
import LabAlumni from "./LabAlumni";
import TeamCards from "./TeamCards";

const ResearchTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="research-tabs-container">
      <div className="tabs">
        <h1
          className={`tab ${activeTab === "team" ? "active" : ""}`}
          onClick={() => setActiveTab("team")}
        >
          Research Team
        </h1>
        <h1
          className={`tab ${activeTab === "alumni" ? "active" : ""}`}
          onClick={() => setActiveTab("alumni")}
        >
          Lab Alumni
        </h1>
        <h1
          className={`tab ${activeTab === "summary" ? "active" : ""}`}
          onClick={() => setActiveTab("summary")}
        >
          Research Summary
        </h1>
      </div>
      <div className="tab-content">
        <div className="summary-content">
          {activeTab === "summary" && (
            <div className="grid-container">
              <div className="left-box">
                The Shakoor lab at the Donald Danforth Plant Science Center is
                developing a high-impact research program that integrates and
                applies data streams from diverse technologies and disciplines
                towards addressing specific, real-world challenges in
                sustainable cropping systems. The lab develops and uses
                integrated digital agriculture systems to study the effects of
                phenotype, genotype, and environment on crop productivity. In a
                collaboration with the Salk Institute, leading edge tools,
                methods, and technologies are being utilized to study and
                optimize the ability of Sorghum Bicolor to capture carbon
                dioxide from the atmosphere and store it in its roots, shoots
                and leaves. Key overarching research questions in the Shakoor
                lab.
              </div>
              <div className="right-box">
                <ol>
                  <li>
                    How can we better leverage genomics data in molecular
                    breeding programs with high-throughput phenomics and
                    environmental data to rapidly generate datasets for
                    candidate gene identification?
                  </li>
                  <li>
                    How can we use advances in technology to bridge the
                    controlled environment to field knowledge gap?
                  </li>
                  <li>
                    How can we leverage advances in digital agriculture systems
                    to fully capture the effects of genotype, environment and
                    management (GxExM) to breed better crops and build models of
                    sustainability for farmers?
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
function Team() {
  const [activeTab, setActiveTab] = useState("team");
  return (
    <>
      <TeamHero />
      <div className="cards">
        <ResearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "team" && (
          <>
            <div className="content">
              We are combining high-quality genomic data with the analysis of
              greenhouse and field-based high-throughput phenotyping data to
              resolve the complexities of adaptive traits in crops such as
              sorghum.
            </div>
            <TeamCards />
          </>
        )}
        {activeTab === "alumni" && (
          <>
            <div className="content">
              Scientists who have been a part of the Shakoor Lab over the years
              have gone on to achieve remarkable success in various fields.
              These alumni have contributed significantly to advancing our
              research and innovation, utilizing the skills and knowledge gained
              during their time in the lab. Their continued collaboration and
              support embody the enduring spirit and excellence of the Shakoor
              Lab.
            </div>
            <LabAlumni />
          </>
        )}
      </div>
    </>
  );
}

export default Team;

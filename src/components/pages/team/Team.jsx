import { Suspense, lazy, useState } from "react";
import "../styles/Tabs.css";
import TeamHero from "../../hero/team/TeamHero";

const LabAlumni = lazy(() => import("./LabAlumni"));
const TeamCards = lazy(() => import("./TeamCards"));
const ReuProgram = lazy(() => import("./REU"));
const Internships = lazy(() => import("./Internships"));

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
          className={`tab ${activeTab === "reu" ? "active" : ""}`}
          onClick={() => setActiveTab("reu")}
        >
          REU Program
        </h1>
        <h1
          className={`tab ${activeTab === "internships" ? "active" : ""}`}
          onClick={() => setActiveTab("internships")}
        >
          Internships
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
            <div className="content team-content--wide">
              We are combining high-quality genomic data with the analysis of
              greenhouse and field-based high-throughput phenotyping data to
              resolve the complexities of adaptive traits in crops such as
              sorghum.
            </div>
            <Suspense fallback={null}>
              <TeamCards />
            </Suspense>
          </>
        )}
        {activeTab === "alumni" && (
          <>
            <div className="content team-content--wide">
              Scientists who have been a part of the Shakoor Lab over the years
              have gone on to achieve remarkable success in various fields.
              These alumni have contributed significantly to advancing our
              research and innovation, utilizing the skills and knowledge gained
              during their time in the lab. Their continued collaboration and
              support embody the enduring spirit and excellence of the Shakoor
              Lab.
            </div>
            <Suspense fallback={null}>
              <LabAlumni />
            </Suspense>
          </>
        )}
        {activeTab === "reu" && (
          <>
            <div className="content team-content--wide">
              Fostering the next generation of plant scientists is critical to
              solving some of our planet’s biggest challenges. For ten weeks
              each summer, students in our Research Experience for Undergraduate
              (REU) summer internship program are immersed in a rich research
              environment that lays the foundation for a career in plant
              science. The program is made possible through generous support
              from the National Science Foundation (NSF).
            </div>
            <Suspense fallback={null}>
              <ReuProgram />
            </Suspense>
          </>
        )}
        {activeTab === "internships" && (
          <>
            <div className="content team-content--wide">
              Interns who have passed through our lab have played a crucial role
              in driving forward our research, bringing fresh perspectives and
              enthusiasm to our projects. The hands-on experience and mentorship
              they receive here equip them with the tools to excel in their
              future academic and professional careers. Many have gone on to
              make significant contributions in their fields, maintaining strong
              ties with our lab that reflect the enduring influence of their
              time spent here.
            </div>
            <Suspense fallback={null}>
              <Internships />
            </Suspense>
          </>
        )}
      </div>
    </>
  );
}

export default Team;

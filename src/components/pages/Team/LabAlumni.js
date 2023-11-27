import React from "react";
import TeamItem from "./TeamItem";
import "./Team.css";

function LabAlumni() {
  return (
    <>
      <div className="cards">
        <h1>Lab Alumni</h1>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Zander_Hayes.webp"
              alt="Zander Hayes"
              text="Zander Hayes"
              label="Laboratory Technician"
            />
            <TeamItem
              src="images/team_headshots/Rachel_Lange.webp"
              alt="Rachel Lange"
              text="Rachel Lange"
              label="Laboratory Technician"
            />
            <TeamItem
              src="images/team_headshots/Amy_Pfeifer.webp"
              alt="Amy Pfeifer"
              text="Amy Pfeifer"
              label="Laboratory Technician"
            />
            <TeamItem
              src="images/team_headshots/Brendan_Eddingfield.webp"
              alt="Brendan Eddingfield"
              text="Brendan Eddingfield"
              label="Laboratory Technician"
            />
          </ul>
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Aaron_Fackler.webp"
              alt="Aaron Fackler"
              text="Aaron Fackler"
              label="Laboratory Technician"
            />
            <TeamItem
              src="images/team_headshots/Katherine_Johnson.webp"
              alt="Katherine Johnson"
              text="Katherine Johnson"
              label="REU Intern/Laboratory Technician"
            />
            <TeamItem
              src="images/team_headshots/Danforth_Logo.webp"
              alt="Madison Payne"
              text="Madison Payne"
              label="REU Intern"
            />
            <TeamItem
              src="images/team_headshots/Danforth_Logo.webp"
              alt="Jay Carter"
              text="Jay Carter"
              label="Senior Lab Technician"
            />
          </ul>
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Danforth_Logo.webp"
              alt="Gabriel Bernstein"
              text="Gabriel Bernstein"
              label="Intern"
            />
            <TeamItem
              src="images/team_headshots/Danforth_Logo.webp"
              alt="Jasmine Saliba"
              text="Jasmine Saliba"
              label="Highschool Intern"
            />
            <TeamItem
              src="images/team_headshots/Danforth_Logo.webp"
              alt="Heidi Gaertner"
              text="Heidi Gaertner"
              label="Highschool Intern"
            />
            <TeamItem
              src="images/team_headshots/Danforth_Logo.webp"
              alt="Addison Engelmeyer"
              text="Addison Engelmeyer"
              label="Highschool Intern"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default LabAlumni;

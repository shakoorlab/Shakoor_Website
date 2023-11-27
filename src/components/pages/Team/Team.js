import React from "react";
import TeamItem from "./TeamItem";
import "./Team.css";
import TeamHero from "../TeamHero/TeamHero";
import LabAlumni from "./LabAlumni";

function Team() {
  return (
    <>
      <TeamHero /> {/* Inserting the TeamHero component here */}
      <div className="cards">
        <h1>Our Team</h1>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Nadia_Shakoor.webp"
              alt="Nadia Shakoor"
              text="Nadia Shakoor "
              label="Principal Investigator"
            />
            <TeamItem
              src="images/team_headshots/Jocelyn_Saxton.webp"
              alt="Jocelyn Saxton"
              text="Jocelyn Saxton"
              label="Research Associate"
            />
            <TeamItem
              src="images/team_headshots/Marie_De.webp"
              alt="Marie De Gracia Coquerel"
              text="Marie De Gracia Coquerel"
              label="Research Associate"
            />
            <TeamItem
              src="images/team_headshots/Nate_Eck.webp"
              alt="Nathaniel Eck"
              text="Nathaniel Eck"
              label="Data Scientist 1"
            />
          </ul>
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Jake_Stanton.webp"
              alt="Jaccob Stanton"
              text="Jaccob Stanton"
              label="Data Science Associate"
            />
            <TeamItem
              src="images/team_headshots/Monica_Alsup.webp"
              alt="Monica Alsup "
              text="Monica Alsup"
              label="Administrative Assistant"
            />
            <TeamItem
              src="images/team_headshots/Boubacar_Gano.webp"
              alt="Boubacar Gano"
              text="Boubacar Gano"
              label="Postdoctoral Associate"
            />
            <TeamItem
              src="images/team_headshots/Nurzaman_Ahmed.webp"
              alt="Nurzaman Ahmed"
              text="Nurzaman Ahmed"
              label="Engineering Research Scientist"
            />
          </ul>
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Daniele_Azzaro.webp"
              alt="Daniele Azzaro"
              text="Daniele Azzaro"
              label="Research Associate"
            />
            <TeamItem
              src="images/team_headshots/Audrey_Oldani.webp"
              alt="Audrey Oldani"
              text="Audrey Oldani"
              label="Laboratory Technician"
            />
            <TeamItem
              src="images/team_headshots/Ella_Marks.webp"
              alt="Ella Marks"
              text="Ella Marks"
              label="Laboratory Assistant"
            />
            <TeamItem
              src="images/team_headshots/Colton_Burris.webp"
              alt="Colton Burris"
              text="Colton Burris"
              label="Laboratory Technician"
            />
          </ul>
          <ul className="cards__items">
            <TeamItem
              src="images/team_headshots/Samantha_Aarons.webp"
              alt="Samantha Aarons"
              text="Samantha Aarons"
              label="Laboratory Technician"
            />
            <TeamItem
              src="images/team_headshots/Neil_Docherty.webp"
              alt="Neil Docherty"
              text="Neil Docherty"
              label="Field Technician"
            />
            <TeamItem
              src="images/team_headshots/Danforth_Logo.webp"
              alt="Jacob Sterzik"
              text="Jacob Sterzik"
              label="Laboratory Technician"
            />
            <TeamItem
              src="images/team_headshots/Danforth_Logo.webp"
              alt="Lee Dobson"
              text="Lee Dobson"
              label="Laboratory Technician"
            />
          </ul>
        </div>
        <LabAlumni />
      </div>
    </>
  );
}

export default Team;

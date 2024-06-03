import React, { useState } from "react";
import TeamItem from "./TeamItem";
import Pagination from "@mui/material/Pagination";
import "../../styles/Cards.css";
import images from "../../../assets/images/team/ImageImports";

function LabAlumni() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="cards">
        <h1>Lab Alumni</h1>
        <div className="cards__wrapper">
          {currentPage === 1 && (
            <>
              <ul className="cards__items">
                <TeamItem
                  src={images.Neil}
                  alt="Neil Docherty"
                  text="Neil Docherty"
                  title="Field Technician"
                />
                <TeamItem
                  src={images.Audrey}
                  alt="Audrey Oldani"
                  text="Audrey Oldani"
                  title="Laboratory Technician"
                />
                <TeamItem
                  src={images.Zander}
                  alt="Zander Hayes"
                  text="Zander Hayes"
                  title="Laboratory Technician"
                />
              </ul>

              <ul className="cards__items">
                <TeamItem
                  src={images.Rachel}
                  alt="Rachel Lange"
                  text="Rachel Lange"
                  title="Laboratory Technician"
                />
                <TeamItem
                  src={images.Amy}
                  alt="Amy Pfeifer"
                  text="Amy Pfeifer"
                  title="Laboratory Technician"
                />
                <TeamItem
                  src={images.Brendan}
                  alt="Brendan Eddingfield"
                  text="Brendan Eddingfield"
                  title="Laboratory Technician"
                />
              </ul>
              <ul className="cards__items">
                <TeamItem
                  src={images.Aaron}
                  alt="Aaron Fackler"
                  text="Aaron Fackler"
                  title="Laboratory Technician"
                />
                <TeamItem
                  src={images.Katherine}
                  alt="Katherine Johnson"
                  text="Katherine Johnson"
                  title="REU Intern/Laboratory Technician"
                />
                <TeamItem
                  src={images.NoPhoto}
                  alt="Madison Payne"
                  text="Madison Payne"
                  title="REU Intern"
                />
              </ul>
              <ul className="cards__items">
                <TeamItem
                  src={images.NoPhoto}
                  alt="Jay Carter"
                  text="Jay Carter"
                  title="Senior Lab Technician"
                />
                <TeamItem
                  src={images.NoPhoto}
                  alt="Devin Scharer"
                  text="Devin Scharer"
                  title="High School Intern"
                />
                <TeamItem
                  src={images.NoPhoto}
                  alt="Victoria Frerichs"
                  text="Victoria Frerichs"
                  title="High School Intern"
                />
              </ul>
            </>
          )}
          {currentPage === 2 && (
            <>
              <ul className="cards__items">
                <TeamItem
                  src={images.NoPhoto}
                  alt="Emma Gandolfo"
                  text="Emma Gandolfo"
                  title="Laboratory Technician"
                />
                <TeamItem
                  src={images.NoPhoto}
                  alt="John Bao"
                  text="John Bao"
                  title="Laboratory Technician"
                />
                <TeamItem
                  src={images.NoPhoto}
                  alt="Gabriel Bernstein"
                  text="Gabriel Bernstein"
                  title="High School Intern"
                />
              </ul>
              <ul className="cards__items">
                <TeamItem
                  src={images.NoPhoto}
                  alt="Jasmine Saliba"
                  text="Jasmine Saliba"
                  title="High School Intern"
                />
                <TeamItem
                  src={images.NoPhoto}
                  alt="Heidi Gaertner"
                  text="Heidi Gaertner"
                  title="High School Intern"
                />
                <TeamItem
                  src={images.NoPhoto}
                  alt="Addison Engelmeyer"
                  text="Addison Engelmeyer"
                  title="High School Intern"
                />
              </ul>
            </>
          )}
          <div className="pagination-container">
            <Pagination
              count={2}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LabAlumni;

import React, { useState } from "react";
import TeamItem from "./TeamItem";
import Pagination from "@mui/material/Pagination";
import "../../styles/Cards.css";
import images from "../../../assets/images/team/ImageImports";

function ReuProgram() {
  const [currentPage, setCurrentPage] = useState(1);

  //   const handlePageChange = (event, value) => {
  //     setCurrentPage(value);
  //   };

  return (
    <>
      <h1>Undergraduate Researchers</h1>
      <br></br>
      <div className="cards_wrapper">
        {currentPage === 1 && (
          <>
            <ul className="cards__items">
              <TeamItem
                src={images.Katherine}
                alt="Katherine Johnson"
                text="Katherine Johnson"
                title="NSF-REU Intern/Laboratory Technician"
              />
              <TeamItem
                src={images.NoPhoto}
                alt="Madison Payne"
                text="Madison Payne"
                title="NSF-REU Intern"
              />
              <TeamItem
                src={images.NoPhoto}
                alt="Tate Severs"
                text="Tate Severs"
                title="NSF-REU Intern"
              />
            </ul>
          </>
        )}
        {/* <div className="pagination-container">
          <Pagination
            count={2}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </div> */}
      </div>
    </>
  );
}

export default ReuProgram;

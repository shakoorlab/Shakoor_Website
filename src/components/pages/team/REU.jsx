import { useState } from "react";
import TeamItem from "./TeamItem";
// import Pagination from "@mui/material/Pagination";
import "../../styles/Cards.css";
import images from "../../../assets/images/team/ReuImports";

function ReuProgram() {
  const [currentPage, setCurrentPage] = useState(1);
  const items = [
    {
      src: images.Makayla,
      alt: "Makayla Stewart",
      text: "Makayla Stewart",
      title: "REU Intern",
    },
    {
      src: images.Tate,
      alt: "Tate Severs",
      text: "Tate Severs",
      title: "NSF-REU Intern",
    },
    {
      src: images.NoPhoto,
      alt: "Madison Payne",
      text: "Madison Payne",
      title: "NSF-REU Intern",
    },
    {
      src: images.Katherine,
      alt: "Katherine Johnson",
      text: "Katherine Johnson",
      title: "NSF-REU Intern/Laboratory Technician",
    },
  ];

  //   const handlePageChange = (event, value) => {
  //     setCurrentPage(value);
  //   };

  return (
    <>
      <h1>Undergraduate Researchers</h1>
      <br></br>
      <div className="cards_wrapper cards__wrapper--team">
        {currentPage === 1 && (
          <>
            <ul className="cards__items cards__items--team">
              {items.map((item, itemIndex) => (
                <TeamItem
                  key={`${item.alt}-${itemIndex}`}
                  src={item.src}
                  alt={item.alt}
                  text={item.text}
                  title={item.title}
                />
              ))}
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

import React, { useState, useRef } from "react";
import GalleryCardItem from "./GalleryCardItem";
// import Pagination from "@mui/material/Pagination";
import Pheno1 from "../../../assets/images/gallery/phenotyping/pheno1.webp";
import Pheno2 from "../../../assets/images/gallery/phenotyping/pheno2.webp";
import Pheno3 from "../../../assets/images/gallery/phenotyping/pheno3.webp";
import Pheno4 from "../../../assets/images/gallery/phenotyping/pheno4.webp";
import Pheno5 from "../../../assets/images/gallery/phenotyping/pheno5.webp";
import Pheno6 from "../../../assets/images/gallery/phenotyping/pheno6.webp";

function PhenoCards() {
  // const [currentPage, setCurrentPage] = useState(1);
  const h1Ref = useRef(null);

  // const handlePageChange = (event, value) => {
  //   setCurrentPage(value);
  //   if (h1Ref.current) {
  //     h1Ref.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <div ref={h1Ref} className="gallery-cards">
      <h1>Gallery</h1>
      <div className="cards__wrapper">
        {/* {currentPage === 1 && ( */}
        {/* <> */}
        <ul className="cards__items">
          <GalleryCardItem src={Pheno1} alt="Phenotyping" />
          <GalleryCardItem src={Pheno2} alt="Phenotyping" />
          <GalleryCardItem src={Pheno3} alt="Phenotyping" />
        </ul>
        <ul className="cards__items">
          <GalleryCardItem src={Pheno4} alt="Phenotyping" />
          <GalleryCardItem src={Pheno5} alt="Phenotyping" />
          <GalleryCardItem src={Pheno6} alt="Phenotyping" />
        </ul>
        {/* <ul className="cards__items">
            <GalleryCardItem
                src="assets/images/gallery/phenotyping/pheno1.webp"
                alt="PheNode"
                
              />
              <GalleryCardItem
                src="assets/images/gallery/phenotyping/pheno1.webp"
                alt="PheNode"
                
              />
             <GalleryCardItem
                src="assets/images/gallery/phenotyping/pheno1.webp"
                alt="PheNode"
                
              />
            </ul> */}
        {/* </> */}
        {/* )}
        {currentPage === 2 && (
          <>
            <ul className="cards__items">
              <GalleryCardItem
                src="images/articles/article_5.webp"
                alt="Image of phenotyper"
                text="ETHINKSTL: In This Episode for the Week"
                label=" February 10, 2021"
                path="https://entrepreneuriallythinking.libsyn.com/ethinkstl-ep213-season16-ep10-nadia-shakoor"
              />
              <GalleryCardItem
                src="images/articles/article_2.webp"
                alt="Image of TerraReff project"
                text="Farming and Drones? How do they work together?"
                label="November 16, 2020"
                path="https://www.stlmag.com/news/nadia-shakoor-field-dock-farming/"
              />
              <GalleryCardItem
                src="images/articles/article_3.webp"
                alt="Image of PheNode in a field"
                text="Phenotyping Station Ready for Field Testing"
                label="November 4, 2016"
                path="https://www.agupdate.com/crops/phenotyping-station-ready-for-field-testing/article_dd916df4-5ed8-5da9-a8cb-0b6696e4d9e1.html"
              />
            </ul>
          </>
        )}
      </div>
      <div className="pagination-container">
        <Pagination
          count={2}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        /> */}
      </div>
    </div>
  );
}

export default PhenoCards;

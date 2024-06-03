//!footer component installed from https://mdbootstrap.com/docs/react/navigation/footer/

// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section> */}

      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon className="me-0" />
                Shakoor Lab
              </h6>
              <p>
                We are a team of experts from fields including remote sensing,
                engineering, computer science and plant science all working
                together to take our projects from concept to reality.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
              <p>
                <a
                  href="https://www.danforthcenter.org/our-work/principal-investigators/nadia-shakoor/"
                  className="text-reset"
                >
                  Research
                </a>
              </p>
              <p>
                <a
                  href="https://www.danforthcenter.org/news/building-our-culture/#:~:text=Establishment%20of%20Center%20Core%20Values,how%20we%20do%20our%20work."
                  className="text-reset"
                >
                  Values
                </a>
              </p>
              <p>
                <a
                  href="https://www.danforthcenter.org/our-work/principal-investigators/nadia-shakoor/"
                  className="text-reset"
                >
                  Projects
                </a>
              </p>
              <p>
                <a
                  href="https://www.danforthcenter.org/about-us/mission/#:~:text=We%20seek%20to%20feed%20the,world%20center%20for%20plant%20science.&text=The%20Center%20community%20is%20a%20team%20of%20teams."
                  className="text-reset"
                >
                  Mission
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Publications</h6>
              <p>
                <a
                  href="https://scholar.google.com/citations?user=xhSGNg4AAAAJ&hl=en"
                  className="text-reset"
                >
                  Google Scholar
                </a>
              </p>
              <p>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/"
                  className="text-reset"
                >
                  PubMed
                </a>
              </p>
              <p>
                <a href="https://www.researchgate.net/" className="text-reset">
                  ResearchGate
                </a>
              </p>
              <p>
                <a href="https://www.base-search.net/" className="text-reset">
                  Base
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon className="me-0" />
                975 N Warson Rd, Olivette, MO 63132
              </p>
              <p>
                <MDBIcon className="me-0" />
                shakoorlab@gmail.com
              </p>
              <p>
                <MDBIcon className="me-0" /> (314) 587-1000
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://shakoorlab.com/">
          shakoorlab.com
        </a>
      </div>
    </MDBFooter>
  );
}

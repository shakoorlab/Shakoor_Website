import React, { useEffect, useState } from "react";
import "./NavBar.css";
import "../../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo/logo5.png";

function NavBar() {
  const [logoSrc, setLogoSrc] = useState(logo); //used for template image
  const [showNavbar, setShowNavbar] = useState(false);
  const [hoveringNavbar, setHoveringNavbar] = useState(false);

  const navbarStyle = {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowNavbar(true);
    } else if (!hoveringNavbar) {
      setShowNavbar(false);
    }
  };

  const handleMouseMove = (e) => {
    if (e.clientY <= 50) {
      setShowNavbar(true);
    } else if (!hoveringNavbar && window.scrollY === 0) {
      setShowNavbar(false);
    }
  };

  const handleMouseEnter = () => {
    setHoveringNavbar(true);
    setShowNavbar(true);
  };

  const handleMouseLeave = () => {
    setHoveringNavbar(false);
    if (window.scrollY === 0) {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hoveringNavbar]);

  return (
    <>
      <div
        className={`navbar-container ${showNavbar ? "fade-in" : "fade-out"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Navbar
          expand="lg"
          bg="light"
          data-bs-theme="light"
          style={navbarStyle}
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                alt="logo"
                src={logoSrc}
                width="50"
                height="50"
                className="d-inline-block align-center pb-2"
              />
              <span className="d-inline-block align-center">Shakoor Lab</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/team">Team</Nav.Link>
                <Nav.Link href="/cards">News</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button href="/contact" variant="outline-success">
                  Contact
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;

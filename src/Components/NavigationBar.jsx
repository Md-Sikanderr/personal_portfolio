import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import resume from "../images/MDSIKANDER_CV.pdf";

const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" id="navbars" className="py-2">
      <Container>
        <Navbar.Brand href="#hero-section" className="ms-0 text-white">
          MS Portfolio
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
        <Navbar.Collapse id="basic-navbar-nav" in={isNavOpen}>
          <Nav className="ms-auto align-items-center mt-2">
            <Nav.Link
              href="#hero-section"
              onClick={handleNavLinkClick}
              className="text-white"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about-section"
              onClick={handleNavLinkClick}
              className="text-white"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skill-section"
              onClick={handleNavLinkClick}
              className="text-white"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#exp-section"
              onClick={handleNavLinkClick}
              className="text-white"
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#work-section"
              onClick={handleNavLinkClick}
              className="text-white"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#footer-section"
              onClick={handleNavLinkClick}
              className="text-white"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href={resume}
              download="SikanderResume"
              className="text-white"
            >
              <Button variant="primary">Download CV</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

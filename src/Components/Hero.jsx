import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import img1 from "../images/img1.jpeg";

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 order-2 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-box">
              <h1>Hii, I'm Sikander</h1>
              <p>
                I'm a frontend developer (React.js) with a passion for crafting
                seamless, responsive, and visually appealing digital
                experiences. With hands-on experience in building user-friendly
                web applications, I approach every project with the same
                enthusiasm and dedication as when I first started.
              </p>
              <p className="lead location-para">
                <span className="loc-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                New Delhi,India
              </p>
              <a href="https://www.linkedin.com/in/md-sikander-0411a8231/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Md-Sikanderr">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="col-md-4 order-1 mb-3">
            <div className="hero-img text-center float-md-end">
              <img src={img1} alt="herologo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

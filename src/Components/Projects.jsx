import React from "react";
import workimg1 from "../images/workimg1.png";
import workimg2 from "../images/workimg2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <section id="work-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="work-box1">
              <h1>Work</h1>
              <p className="lead">
                Some of the noteworthy projects I have built:
              </p>
            </div>
            <div className="col-md-12 mb-5">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="workimgLink text-center">
                    <a
                      href="https://rssk.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={workimg1} alt="workimg" />
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-6 work-bg d-flex flex-row justify-content-center align-items-center"
                  data-aos="slide-left"
                >
                  <div className="work-box2">
                    <h1>NGO Website Development</h1>
                    <p>
                      Developed a responsive and user-friendly website for an
                      NGO to enhance their online presence and streamline
                      communication. The project included designing intuitive
                      layouts, implementing interactive features, and ensuring
                      cross-device compatibility to effectively showcase their
                      mission and activities.
                    </p>
                    <div className="tools">
                      <span>HTML5</span>
                      <span>CSS3</span>
                      <span>JavaScript</span>
                      <span>React JS</span>
                    </div>
                    <a href="https://rssk.netlify.app/">
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="workimgLink text-center">
                    <a
                      href="https://dentclinic.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={workimg2} alt="workimg" />
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-6 d-flex flex-row justify-content-center align-items-center"
                  data-aos="slide-left"
                >
                  <div className="work-box2">
                    <h1>Dental Clinic Website</h1>
                    <p>
                      Created a modern and visually appealing frontend for a
                      dental clinic website. The design focuses on providing a
                      seamless user experience with features like service
                      details, appointment booking, and responsive layouts to
                      cater to patients on all devices.
                    </p>
                    <div className="tools">
                      <span>HTML5</span>
                      <span>CSS3</span>
                      <span>Bootstrap5</span>
                    </div>
                    <a href="https://dentclinic.netlify.app/">
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

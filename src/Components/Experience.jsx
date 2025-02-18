import React from "react";
import rssk from "../images/rssk.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <section id="exp-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="exp-box1">
              <h1>Experience</h1>
              <p>Here is a quick summary of my most recent experiences:</p>
            </div>
          </div>
          <div className="col-md-12 mb-5 exp-innersection" data-aos="flip-left">
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className="rssk-img">
                  <img src={rssk} alt="" />
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="exp-box3">
                  <h1>Frontend Developer Intern</h1>
                  <p>
                    <FontAwesomeIcon className="circledots" icon={faCircle} />
                    Solely developed the complete frontend website for the NGO.
                  </p>
                  <p>
                    <FontAwesomeIcon className="circledots" icon={faCircle} />
                    Utilized HTML, CSS, JavaScript, React JS. to design and
                    implement the website.
                  </p>
                  <p>
                    <FontAwesomeIcon className="circledots" icon={faCircle} />
                    Implemented user-friendly interfaces and optimized the
                    website for performance and accessibility.
                  </p>
                  <p>
                    <FontAwesomeIcon className="circledots" icon={faCircle} />
                    Provided ongoing support and maintenance for the website as
                    needed.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <p className="lead date">JULY 2023-DEC 2023</p>
                <div className="exp-box4">
                  <a href="https://drive.google.com/file/d/1qphzwE-kLR7NqjAnoIKjS_pQojXqCBlx/view?usp=sharing">
                    See Credentials
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 exp-innersection">
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className="rssk-img">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D0BAQFOzUIOz1Yb-A/company-logo_200_200/company-logo_200_200/0/1687705347448/cognifyz_techonologies_logo?e=2147483647&v=beta&t=z1VmPnRtVmQGOd44Wyw0THEFdlqWx8kcjg6fQE6eA5g"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="exp-box3">
                  <h1>Web Development Intern</h1>
                  <p>
                    <FontAwesomeIcon className="circledots" icon={faCircle} />
                    Exclusively assigned a set of web development tasks during
                    the internship at Cognifyz Technologies.
                  </p>
                  <p>
                    <FontAwesomeIcon className="circledots" icon={faCircle} />
                    Focused solely on the completion and refinement of these
                    tasks.
                  </p>
                  <p>
                    <FontAwesomeIcon className="circledots" icon={faCircle} />
                    Developed web applications using html, css, javascript.
                  </p>
                  <p>
                    <FontAwesomeIcon className="circledots" icon={faCircle} />
                    Executed tasks efficiently and ensured their successful
                    completion within specified time frames.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <p className="lead date">Mar 2024-Apr 2024</p>
                <div className="exp-box4">
                  <a href="https://drive.google.com/file/d/1qZ3RR3udUCO_AX60u_AhnmO6Kh6eTUXy/view?usp=sharing">
                    See Credentials
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

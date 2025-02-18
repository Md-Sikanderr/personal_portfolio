import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import bootstrap from "../images/bootstrap.png";
import react from "../images/react.png";
import sql from "../images/sql.png";
import github from "../images/github.png";

const Skills = () => {
  return (
    <section id="skill-section">
      <div className="container">
        <div className="row skills-row">
          <div className="col-md-12">
            <div className="skill-box1 text-center">
              <h1>Skills</h1>
              <p className="lead">
                The skills, tools and technologies I am really good at:
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4">
            <div className="skill-box2">
              <img src={html} alt="" />
              <h3>HTML5</h3>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4">
            <div className="skill-box2">
              <img src={css} alt="" />
              <h3>CSS3</h3>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4">
            <div className="skill-box2">
              <img src={js} alt="" />
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4">
            <div className="skill-box2">
              <img src={bootstrap} alt="" />
              <h3>Bootstrap</h3>
            </div>
          </div>
          <div className="col-6 col-md-4 col-sm-6">
            <div className="skill-box2">
              <img src={react} alt="" />
              <h3>React JS</h3>
            </div>
          </div>
          <div className="col-6 col-md-4 col-sm-6">
            <div className="skill-box2">
              <img src={sql} alt="" />
              <h3>MySQL</h3>
            </div>
          </div>
          <div className="col-6 col-md-4 col-sm-6">
            <div className="skill-box2">
              <img src={github} alt="" />
              <h3>Github</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

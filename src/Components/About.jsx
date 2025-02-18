import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h1 className="abt-heading">about me</h1>
          </div>
          <div className="col-md-6 mb-4">
            <div className="abt-img text-center">
              <img
                src="https://st3.depositphotos.com/14431644/19265/i/450/depositphotos_192659508-stock-photo-handwriting-text-about-me-concept.jpg"
                alt="herologo"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="abt-box float-md-end">
              <h1>Curious about me? Here you have it:</h1>
              <p>
                I am a Frontend Developer with expertise in HTML, CSS,
                JavaScript, React, and SQL. Pursuing an MCA from Jamia Hamdard,
                I have experience creating responsive websites and developed a
                functional site during my internship.
                <br />
                <br />
                I began my journey as a web developer during my academic years,
                and since then, I've continued to grow and evolve by taking on
                new challenges and learning emerging technologies. Currently
                pursuing my MCA at Jamia Hamdard, I have built a strong
                foundation in web development and gained hands-on experience in
                crafting responsive and user-friendly websites.
                <br />
                <br />
                With expertise in modern tools like React, SQL databases, and a
                keen interest in exploring technologies like Angular and
                TailwindCSS, I am passionate about building impactful digital
                experiences.
                <br />
                <br />
                Finally, some quick facts about me! <br />
              </p>
              <div className="quickfacts">
                <span>
                  <FontAwesomeIcon className="circledots" icon={faCircle} />
                  MCA student at Jamia Hamdard
                </span>
                <br />
                <span>
                  <FontAwesomeIcon className="circledots" icon={faCircle} />
                  Frontend development enthusiast
                </span>
                <br />
                <span>
                  <FontAwesomeIcon className="circledots" icon={faCircle} />
                  Dedicated learner
                </span>
                <br />
                <span>
                  <FontAwesomeIcon className="circledots" icon={faCircle} />
                  Passionate about building impactful web solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

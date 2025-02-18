import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-box1">
              <h1>Get in touch</h1>
              <p>
                What’s next? Feel free to reach out to me if you are looking for
                a developer, have a query, or simply want to connect.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="contact-icons text-center">
              <h1>
                <FontAwesomeIcon className="emailicon" icon={faEnvelope} />
                mdsikander2000@gmail.com
              </h1>
              <h1>
                <FontAwesomeIcon className="callicon" icon={faPhone} />
                9205317989
              </h1>
            </div>
          </div>
          <div className="col-md-12">
            <div className="social-box text-center">
              <h4>You may also find me on these platforms!</h4>
              <a href="https://www.facebook.com/profile.php?id=100018466323466">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/_sikander___/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

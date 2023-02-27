import React from "react";
import "../stylesheets/ContactMe.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";

function ContactMe() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="data-containers">
        <div className="data-container">
          <MdOutlineMailOutline />
          <h5>Email</h5>
          <a href="mailto:andrea.barrera7@gmail.com">
            <button>Send a message</button>
          </a>
        </div>
        <div className="data-container">
          <RxLinkedinLogo />
          <h5>LinkedIn</h5>
          <a
            href="https://www.linkedin.com/in/andrea-barrera-j18/"
            target="blank"
          >
            <button>Send a message</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

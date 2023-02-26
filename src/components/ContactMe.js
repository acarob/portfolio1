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
          <button>
            <a href="mailto:andrea.barrera7@gmail.com">Send a message</a>
          </button>
        </div>
        <div className="data-container">
          <RxLinkedinLogo />
          <h5>LinkedIn</h5>
          <button>
            <a
              href="https://www.linkedin.com/in/andrea-barrera-j18/"
              target="blank"
            >
              Send a message
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;

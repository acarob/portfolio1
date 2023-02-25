import React from "react";
import "../stylesheets/ContactMe.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";

function ContactMe() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <MdOutlineMailOutline />
      <RxLinkedinLogo />
    </div>
  );
}

export default ContactMe;

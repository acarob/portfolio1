import React from "react";
import "../stylesheets/AboutMe.css";

function AboutMe(props) {
  return (
    <div className="about-container">
      <img
        className="about-image"
        src={require(`../images/${props.image}.jpeg`)}
        alt="not found"
      />
      <div className="text-container">
        <p className="name">
          <strong>{props.name}</strong>
        </p>
        <p className="charge">
          <strong>{props.charge1}</strong> & <strong>{props.charge2}</strong>
        </p>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
}
export default AboutMe;

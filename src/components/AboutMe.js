import React from "react";
import "../stylesheets/AboutMe.css";

function AboutMe(props) {
  <div className="about-container">
    <img
      className="about-image"
      src={require(`../images/${props.image}.png`)}
      alt="not found"
    />
    <div className="text-container">
      <p className="name">
        <strong>{props.name}</strong>
      </p>
    </div>
  </div>;
}

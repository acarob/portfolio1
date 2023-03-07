import React from "react";
import "../stylesheets/Experience.css";

function Experience(props) {
  return (
    <div className="experience-container">
      <div className="experience-containers">
        <h2>{props.position}</h2>
        <h3>{props.enterprise}</h3>
        <h6>{props.dates}</h6>
        <br></br>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Experience;

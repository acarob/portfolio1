import React from "react";
import "../stylesheets/Projects.css";
import { BsGithub } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";

function Projects(props) {
  return (
    <div className="projects-container">
      <div className="project-container">
        <img src={require(`../images/${props.image}.jpg`)} alt="Project" />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className="project-button-container">
          <a href={props.link} target="blank">
            <button>
              <BsGithub /> GitHub
            </button>
          </a>
          <a href={props.link2} target="blank">
            <button>
              <FaRocket /> Website
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;

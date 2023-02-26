import React from "react";
import "../stylesheets/Projects.css";
import { BsGithub } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";

function Projects(props) {
  return (
    <div className="projects-container">
      <img src={require(`../images/${props.image}.jpg`)} alt="Project" />
      <h2>{props.name}</h2>
      <button>
        <BsGithub />
        <a href={props.link} target="blank">
          GitHub
        </a>
      </button>
      <button>
        <GrDeploy />
        <a href={props.link2} target="blank">
          Deploy
        </a>
      </button>
    </div>
  );
}

export default Projects;

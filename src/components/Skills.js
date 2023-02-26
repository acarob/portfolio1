import React from "react";
import "../stylesheets/Skills.css";
import { BiBadgeCheck } from "react-icons/bi";

function Skills(props) {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-content">
        <article className="object">
          <BiBadgeCheck />
          <p>JavaScript</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>TypeScript</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>React</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>Redux</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>CSS</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>HTML</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>Bulma</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>Bootstrap</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>Figma</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>SCRUM</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>Translation</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>Active Listening</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>English (C1)</p>
        </article>
        <article className="object">
          <BiBadgeCheck />
          <p>Teaching</p>
        </article>
      </div>
    </div>
  );
}

export default Skills;

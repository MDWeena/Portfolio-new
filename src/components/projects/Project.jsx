import React from "react";
import "./projects.css";

const Project = props => {
  return (
    <a
      href={props.link}
      className="project"
      style={{
        backgroundImage: `url(${props.background})`
      }}
    >
      <div className="project_text">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>Click to view app</p>
      </div>
    </a>
  );
};

export default Project;

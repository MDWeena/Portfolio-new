import React from "react";
import "./projects.css";
import projects from "../../projects";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects" id="project">
        <h2>My Projects</h2>
        <div className="projects__project">
            {projects.map((project) => <Project 
                name= {project.name}
                description= {project.description}
                link= {project.link}
            />)}
        </div>
    </div>
  );
};

export default Projects;

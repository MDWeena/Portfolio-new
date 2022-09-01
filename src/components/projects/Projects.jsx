import React from "react";
import "./projects.css";
import projects from "../../projects";
import Project from "./Project";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "0px",
    slidesToShow: 2,
    speed: 500
  };
  return (
    <div className="projects" id="project">
      <h2 className="projects_header">My Projects</h2>

      <div className="projects__project">
        <Slider {...settings}>
          {projects.map(project => (
            <Project
              name={project.name}
              description={project.description}
              link={project.link}
              background={project.background}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;

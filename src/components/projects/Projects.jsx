import React from "react";
import "./projects.css";
import project from "../../assets/project_1.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project">
        <img src={project} alt="" />
      </div>
      <div className="project">
        <img src={project} alt="" />
      </div>
      <div className="project">
        <img src={project} alt="" />
      </div>
    </div>
  );
};

export default Projects;

/**
 * IMPORTANT REMEMBER TO ADJUST THE MIN-MAX HEIGHT-WIDTH 
 * FOR IMAGES - MOBILE RESOLUTION
 * 
 * MAKE IT SOMEWHAT RELATIVE TO THE TITLE + GRAPHICS
 */

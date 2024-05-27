import React, { useState, useEffect, createRef } from "react";
import "./Projects.css"; 
import Project1 from "./project1.png"; 
import Project2 from "./project2.png"; 
import Project3 from "./project3.png"; 
import { Link, useParams } from "react-router-dom";
import Project from "../Project/Project";
import projectData from "./ProjectData";

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  

  return (
    <div className="projects-section" onMouseMove={handleMouseMove} id="projects" >
      <h1 className="projects-header">PROJECTS</h1>

      <div className="projects">
        {projectData.map((project, index) => (
          <Link to="/Project" state={project}>
          <div
            className="project image-hover"
            key={index}
            style={{ "--i": index }}
          >
            <span className="project-nr">{index + 1}</span>
            <h2 className="title">
              {project.title}
            </h2>
            
            <img
              src={project.image}
              alt={project.title}
              style={{
                top: `${mousePosition.y}px`,
                left: `${mousePosition.x}px`,
                transform: `translate(-50%, -50%)`,
                borderRadius: "8px"
              }}
            />
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;

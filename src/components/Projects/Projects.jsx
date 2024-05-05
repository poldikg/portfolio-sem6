import React, { useState } from "react";
import "./Projects.css"; 
import Project1 from "./project1.png"; 
import Project2 from "./project2.png"; 
import Project3 from "./project3.png"; 

const projectData = [
  {
    title: "VALDLE",
    image: Project1,
  },
  {
    title: "PROJECT 2",
    image: Project2,
  },
  {
    title: "PROJECT 3",
    image: Project3,
  },
];

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="project-section" onMouseMove={handleMouseMove} id="projects">
      <h1>PROJECTS</h1>

      <div className="projects">
        {projectData.map((project, index) => (
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
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

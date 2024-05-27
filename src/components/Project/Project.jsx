import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Navbar from "../Navbar/Navbar";
import ProjectSlider from "./ProjectSlider";
import Footer from "../Footer/Footer"
import "./Project.css"
import projectDataImported from "../Projects/ProjectData";
import { Link } from "react-router-dom";


const Project = () => {
 
    const propsLocation = useLocation().state;
    const projectData = propsLocation.projectData;
    const projectSliderImages = propsLocation.sliderImages;
    const [nextProjectData, setNextProjectData] = useState([])

    console.log(propsLocation)
    console.log(nextProjectData)

    const renderProjectData = projectData.map((project, index) => {
    return (index + 1) % 2 === 0 ? <div className="information-details"> 
    <p className="project-text"> {project.description}  </p>
    <img className="project-picture" src={project.img} alt="" srcSet="" />
</div> : 
     <div className="information-details"> 
    <img className="project-picture" src={project.img} alt="" srcSet="" />
    <p className="project-text"> {project.description}  </p>
</div>}
)


useEffect(() => {
    window.scrollTo(0, 0);
  }, [propsLocation]);

  useEffect(() => {
    for (let i = 0; i < projectDataImported.length ; i++){

        if(projectDataImported[i]["title"] === propsLocation.title){
            setNextProjectData(projectDataImported[i + 1])
        }
      }
  }, [propsLocation])




    return (
        <div className="project-page">
            <Navbar section1={"Projects"} section2={"Skills"} section3={"Contact Me"} />
            <ProjectSlider images={projectSliderImages}/>
            {/* <img src={projectData[0].img} alt="" /> */}

            <div className="project-name-description"> 
            <h1>{propsLocation.title}</h1>
            <p className="project-description">{propsLocation.projectDescription}</p>
            </div>
            
            <div className="project-infromation-pictures">
                {renderProjectData}
                

                <div className="next-project">
                    <p>{"( NEXT UP )"}</p>
                    <p className="next-project-title">{nextProjectData === undefined ? propsLocation.title : nextProjectData.title}</p>
                    <Link to="/Project" state={nextProjectData === undefined ? propsLocation : nextProjectData}> <button className="next-project-btn"> View the project</button> </Link>
                </div>
            </div>


            <Footer/>
        </div>
    )
}

export default Project
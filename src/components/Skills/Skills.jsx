import React from "react";
import "./Skills.css"
import { useState } from "react";


const Skills = () => { 
    
    
    const [btnText, setBtnText] = useState("So far I find the most passion in coding I always thrive to learn more and learn every day.")
    


    const handleClick = (e) => {
        let btnName = e.target.innerText;
        console.log(e)

        if(btnName == "CODE"){
            setBtnText("So far I find the most passion in coding I always thrive to learn more and learn every day.")
            console.log("Code happened")
        }
        else if(btnName == "DESIGN"){
            setBtnText("Designing is something I love to do, and I'd say I am more inclined toward minimalism. ")
            console.log("Design happened")
        }
        else if(btnName == "UX/UI"){
            setBtnText("To make a good product you must first understand the user needs and throughout my whole university study I have been applying that.")
            console.log("Ux happened")
        }
    }


    return ( 
        <div className="skills-section" id="skills">
            <h1>SKILLS</h1>
            <div className="information-section">
                <div className="left-section"> 
                    <h2 className="skills-header">ABOUT ME </h2>
                    <p>I am Ivan 22 years old student from Bulgaria. <br/> Currently I am studying ICT & Media Design at Fontys University in Eindhoven.</p>
                </div>
                <div className="right-section">
                    <div className="btn-section"> 
                        <button onClick={handleClick} autoFocus> CODE </button> 
                        <button onClick={handleClick}> DESIGN </button> 
                        <button onClick={handleClick}> UX/UI </button> 
                    </div>
                    <p>{btnText}</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;
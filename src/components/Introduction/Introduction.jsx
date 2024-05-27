import React from "react";
import "./Introduction.css"
import Navbar from "../Navbar/Navbar";

const Introduction = (props) => {

    return (
        <div className="intro-section">
            
            <div className="intro-text"> 
                <h1 className="intro-header">{props.name}</h1>
                <p className="intro-description">{props.occupation}</p>
            </div>
        </div>
    )
}

export default Introduction;
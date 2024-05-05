import React from "react";
import "./Introduction.css"
import Navbar from "../Navbar/Navbar";

const Introduction = (props) => {

    return (
        <div className="intro-section">
            
            <div className="intro-text"> 
                <h1>{props.name}</h1>
                <p>{props.occupation}</p>
            </div>
        </div>
    )
}

export default Introduction;
import React from "react";
import "./Preloader.css"
import { useEffect } from "react";
import { preLoaderAnim } from "./animation";

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    }
    ,[])

    return (
    <div className="preloader"> 
        <div className="texts-container">
             <span>Front-end Developer,</span>
             <span>UX/UI Designer</span>
        </div>
    </div>)
}

export default Preloader;
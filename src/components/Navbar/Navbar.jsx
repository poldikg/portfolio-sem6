import React from "react";
import "./Navbar.css"
import { Link, useLocation } from "react-router-dom";


const Navbar = (props) => {

    const currentLocation = useLocation().pathname;


    return (
        <header>
            <nav className="nav-bar">
               <Link to="/" state="/"> <h2> IG </h2></Link>
                <div className="nav-right-side">
                    {currentLocation === "/" ? 
                        <ul>
                            <li><a href="#projects" className="link">{props.section1}</a></li>
                            <li><a href="#skills"  className="link"> {props.section2}</a></li>
                            <li><a href="#contact" className="btn-contact"> {props.section3}</a></li>
                        </ul>
                        : <ul> <li> <Link to="/" state="projects"><a className="link">{props.section1}</a></Link> </li>
                            <li> <Link to="/" state="skills"> <a className="link"> {props.section2}</a></Link> </li>
                            <li> <Link to="/" state="contact"><a className="btn-contact"> {props.section3}</a></Link> </li>
                        </ul> }
               
                </div>
            </nav>
        </header>
    )
}

export default Navbar
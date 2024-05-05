import React from "react";
import "./Navbar.css"

const Navbar = (props) => {


    return (
        <header>
            <nav className="nav-bar">
                <h2> IG </h2>
                <div className="nav-right-side">
                <ul>
                    <li> <a href="#projects" className="link">{props.section1}</a> </li>
                    <li> <a href="#skills" className="link"> {props.section2}</a> </li>
                    <li> <a href="#contact" className="btn-contact"> {props.section3}</a> </li>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
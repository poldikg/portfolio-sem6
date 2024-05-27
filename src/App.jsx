import { useState, useEffect, createRef } from 'react' 
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Project from './components/Project/Project'
import Footer from './components/Footer/Footer'
import { useLocation, useParams } from 'react-router-dom'


function App() {
  const navbarData = {
    section1: "Projects",
    section2: "Skills",
    section3: "Contact me"
  }

  const introductionData = {
    name: "IVAN GEORGIEV",
    occupation: "Front-end/ UX/UI Designer"
  }

  const locationProps = useLocation().state;

  const currentPath = useLocation().pathname;
  

  useEffect(() => {
    console.log(locationProps)
    const getToProjects = document.getElementById("projects");
    const getToSkills = document.getElementById("skills");
    const getToContact = document.getElementById("contact")

    window.scrollTo(0, 0)

    if(locationProps === "/"){  
        window.scrollTo(0,0)
    } else if (locationProps === "projects"){
      getToProjects.scrollIntoView()
    } else if (locationProps === "skills"){
      getToSkills.scrollIntoView()
    } else if(locationProps === "contact"){
      getToContact.scrollIntoView()
    } else {
      window.scrollTo(0,0)
    }
  }, [currentPath])


  return (
    <div>
    {currentPath === "/" && <section>
      <div className='nav-intro' id='nav-intro'>
      <Navbar section1={navbarData.section1} section2={navbarData.section2} section3={navbarData.section3}/>
        <Introduction name={introductionData.name} occupation={introductionData.occupation}/>
      </div>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </section>}
    

    <Routes>
      <Route path="/Project" element={<Project/>}></Route>
    </Routes>
    </div>
  )
}

export default App

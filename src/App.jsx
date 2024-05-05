import { useState } from 'react' 
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

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

  
  

  return (
    


    <div>
    <Routes>
    </Routes>
      <div className='nav-intro'>
        <Navbar section1={navbarData.section1} section2={navbarData.section2} section3={navbarData.section3}/>
        <Introduction name={introductionData.name} occupation={introductionData.occupation}/>
      </div>
    <Projects/>
    <Skills/>
    <Contact/>
    </div>
  )
}

export default App

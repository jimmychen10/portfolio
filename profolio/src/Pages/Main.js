import React from "react"
import Jimmy from "../Images/Jimmy.png"
import Home from "./Home.js"
import AboutMe from './AboutMe.js'
import Conact from "./Contact.js"
import Project from "./Project.js"
import Animation from "../Components/Animation"
import "../Styles/Main.css"
// import Graph from "../Components/Graph.js"


function Main(){
    return(
        <div className="main">
            <Home/>
      
            <AboutMe/>
            <Project/>
            <Conact/>            
        </div>

    )

}

export default Main;
import React from "react"
import Home from "./Home.js"
import AboutMe from './AboutMe.js'
import Conact from "./Contact.js"
import Project from "./Project.js"
import "../Styles/Main.css"


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
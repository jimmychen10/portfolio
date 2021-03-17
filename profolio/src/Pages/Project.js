import React from 'react'
import style from "../Styles/projects.css"
import ProjectDB from "../Psudo_Database/projectDB.js"
import IndividualProject from "../Components/IndividualProjects.js"


export default function Project (){
    const projects = ProjectDB.map( i =>{
        return(
                <IndividualProject   id = {i.id} project = {i}/>
        )
    })
        return (
            <div className= "project" id ="Projects">

                <div className="projectPageTitle">
                        <h1>Projects</h1>                
                </div>
                <div className="projectDisplayContainer">
                        {projects }   
                </div>
            </div>
        )



}

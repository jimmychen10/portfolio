import React from "react"
import "../Styles/individualProjects.css"

export default function IndividualProject(props){
    let liveDisable = props.project.liveVersion
    let githubDisable = props.project.githubLink
    if(liveDisable === ""){
        liveDisable = true
    }
    else{
        liveDisable = false
    }
    console.log(liveDisable)

    if(githubDisable === ""){
        githubDisable = true
    }
    else{
        githubDisable = false
    }
    
    

    return(
        <div className = "indiviualProjects">
            <img src ={props.project.img} />
            <h2>{props.project.name}</h2>
            
            <div>
                <div className="links">
                    <div className="liveVer">
                        <a  className = {liveDisable ? "isDisabled" : ""} href={props.project.liveVersion }  target="_blank" ><p >Live</p> </a>
                    </div>
                    <div className="githubVer">
                        <a className = {githubDisable ? "isDisabled" : ""} href={props.project.githubLink } target="_blank"><p>Github</p> </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
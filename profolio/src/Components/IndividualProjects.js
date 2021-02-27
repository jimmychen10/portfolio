import React from "react"
import "../Styles/individualProjects.css"

export default function IndividualProject(props){
    return(
        <div className = "indiviualProjects">
            <img src ={props.project.img} />
            <h2>{props.project.name}</h2>
            
            <div>
                <div className="links">
                    <div className="liveVer">
                        <a href ="#Live" ><p>Live</p> </a>
                    </div>
                    <div className="githubVer">
                        <a href={props.project.githubLink }><p>Github</p> </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
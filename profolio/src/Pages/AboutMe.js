import React from 'react'
// import Styles from '../Styles/AboutMe.css' 

import Picture from "../Images/Jimmy.png"

import '../Styles/AboutMe.css' 
import CodeingExperience from "../Psudo_Database/CodeingExperience"

// import "../Images/Projects/proprofolio_website.png"
export default function AboutMe (){

    const listLanguages = CodeingExperience.map(item =>{
        return(
        
            <div className = "z">
                <img src={item.image}/>
                <h3> {item.name}</h3>
                
            </div>
        
        )
    })

        return (

            
            
            <div className= "aboutMe" id = "AboutMe">
                <div className="aboutMeTitle">
                    <h1>About Me</h1>
                </div>
                

                <div className="me">
                    <div className="cardheader"> </div>
                    <div className="p">
                        <div className="avatar">
                            <img src={Picture}/>
                        </div>
                        <div className="info">
                             <div className="title">
                                <h1>Jimmy Chen</h1>
                             </div>
                             <div className="description">
                                <p>Self driven coder trying to make a change for a better tommorrow.</p>
                             </div>
                        </div>
                        </div>
                </div>


                <div className = "languageTitle">
                    <h2>Languages</h2>
                </div>
                
                <div className= "introC">
                   {listLanguages}
                    
                </div>

            </div>
        )



}

import React from 'react'
import styles from "../Styles/Home.css"
import arrow from "../Images/arrow.png"
import ScrollspyNav from "react-scrollspy-nav";

export default function Home (){

        return (

            
            <div className="home" id = "Home">
                <div className = "mainTitle">                
                    <h1>Jimmy Chen</h1>
                    <h2>Code for the Future</h2>
                </div>

                <div className="moreInfo">
                    <a href="#AboutMe">
                        <h3>Discover more</h3>
                        <div>
                            <img src = {arrow} className="arrow"/>
                        </div>
                    </a>
                </div>
            </div>


        )



}

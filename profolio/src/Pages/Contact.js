import React from 'react'
import PhoneImage from "../Images/phone-icon.png"
import EmailImage from "../Images/email-icon.png"
import style from "../Styles/Contact.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import GithubIcon from "../Images/Language Icons/github-icon.png"
import ResumeIcon from "../Images/resume-icon.png"
import LinkInIcon from "../Images/linkedin-icon.png"

// import Resume from ""

export default function Contact (){

        return (

            
            <div className = "contact" id = "Contact">

                
                <div className="contactTitle">
                    <h1>Contact</h1>
                </div>

                <div className = "contactInfo">

                    
                    <div className="basicContactInfo">
                    
                        
                            <div><img className = "phonimage" src={EmailImage}/><h2> jimmchen39@gmail.com</h2></div>
                            <div><img className = "phonimage" src={PhoneImage}/><a href="tel:+1-877-538-5888"><h2>(415) 971-3322</h2></a></div>  
                        
                    </div>


                    <div className="mediaLinks">
                        <div className="icons">
                            <a href="https://github.com/jimmychen10" target="_blank"> <img src={GithubIcon}/></a>
                        </div>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/jimmy-chen-4b3105b8/" target="_blank"> <img src={LinkInIcon}/></a>
                        </div>
                        <div className="icons">
                            <a href="../JChen resume.lnk" download> <img src={ResumeIcon}/></a>
                        </div>       
                    </div>


                </div>



            </div>
        )



}

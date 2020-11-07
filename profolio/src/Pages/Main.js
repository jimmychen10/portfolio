import React from "react"
import Jimmy from "../Images/Jimmy.png"
import "../Styles/Main.css"
// import Graph from "../Components/Graph.js"


function Main(){
    return(
        <div>
            <div className=" profile w-75 ml-auto mr-auto">
                <div className="col-sm-8">git 
                    <h1 className = "">Jimmy Chen</h1>
                    <h3>Code for the future</h3>
                </div>
                <div className="col-sm-4">
                    <img  src = {Jimmy} />
                </div>
                
            </div>

            {/* <Graph/> */}
        </div>

    )

}

export default Main;
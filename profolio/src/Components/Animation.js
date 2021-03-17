import Canvas from "./Canvas"
import React,{useState, useEffect} from "react"

function Animation (props) {
  const [angle,setAngle] = useState(0)
  const [ballz,setBallz] = useState(props.balls)

    useEffect(() => {
      Animation.rAF = requestAnimationFrame(updateAnimationState);
      return () => {
        cancelAnimationFrame(Animation.rAF);
    }
    },[angle]);
  
    function updateAnimationState() {
      setAngle(angle +1);
      ballz.map(ball =>{
        ball.update()
      })
      Animation.rAF = requestAnimationFrame(updateAnimationState); 
    }

      return <Canvas ballz= {ballz}angle={angle} />;
  }
export default Animation

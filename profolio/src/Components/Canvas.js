import PureCanvas from "./PureCanvas"
import React from "react"


class Canvas extends React.Component {
    constructor(props) {
      super(props);
      this.saveContext = this.saveContext.bind(this);
    }
  
    saveContext(ctx) {
      this.ctx = ctx;
      this.width = 50;
      this.height = 50;
      console.log(this.width)
    }
  
    componentDidUpdate() {
      const { ballz } = this.props;
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.fillStyle = " #333333"
      this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ballz.map(ball =>{
        this.ctx.beginPath();
        this.ctx.arc(ball.x,ball.y,5,0,2*Math.PI);
        this.ctx.fillStyle = "rgba(" + ball.pick_color +","+ball.opacity+")";
        this.ctx.fill();
      })
      
      this.ctx.restore();
    }
  
    render() {
      return <PureCanvas contextRef={this.saveContext} />;
    }
  }
 
 
  export default Canvas

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
 
















// import PureCanvas from "./PureCanvas"
// import React,{useEffect} from "react"

// export default function Canvas(props){

//   function saveContext(ctx) {
//     const ctx = ctx;
//     const width = 50;
//     const height = 50;
//   }

//   useEffect(() => {
//     const { angle } = this.props;
//     // console.log(angle)
//     this.ctx.save();
//     this.ctx.beginPath();
    

//     // Create a loop to go through all OBJ passed through
//     this.ctx.clearRect(0, 0, this.width, this.height);
//     this.ctx.translate(this.width / 2, this.height / 2);
//     this.ctx.rotate((angle * Math.PI) / 180);
//     this.ctx.fillStyle = '#4397AC';
//     this.ctx.fillRect(
//       -this.width / 4,
//       -this.height / 4,
//       this.width / 2,
//       this.height / 2
//     );
//     this.ctx.restore();
//   },)

//   // componentDidUpdate() {
//   //   const { angle } = this.props;
//   //   // console.log(angle)
//   //   this.ctx.save();
//   //   this.ctx.beginPath();
    

//   //   // Create a loop to go through all OBJ passed through
//   //   this.ctx.clearRect(0, 0, this.width, this.height);
//   //   this.ctx.translate(this.width / 2, this.height / 2);
//   //   this.ctx.rotate((angle * Math.PI) / 180);
//   //   this.ctx.fillStyle = '#4397AC';
//   //   this.ctx.fillRect(
//   //     -this.width / 4,
//   //     -this.height / 4,
//   //     this.width / 2,
//   //     this.height / 2
//   //   );
//   //   this.ctx.restore();
 


//     return (<PureCanvas contextRef={saveContext} />);
//  }






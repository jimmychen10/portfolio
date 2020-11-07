
import React,{Component} from "react"
import CanvasJSReact from '../Assets/canvasjs.react.js';
import "../Styles/Graph.css"

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component{

render(){
	const options = {
		title: {
		  text: "Experiences in "
		},
		data: [{				
				  type: "column",
				  color: "#0077B6",
				  dataPoints: [
					{ label: "ReactJs", y: 1 },
					{ label: "c++", y: 1 },
					  { label: "HTML",  y: 2  },
					  { label: "CSS", y: 2  },
					  { label: "Javascript", y: 2  },
					  { label: "Python",  y: 3  },
					  { label: "Java",  y: 4 }
				  ]
		 }]
		}

	return(
		<div >
		<CanvasJSChart options = {options}/>
	  </div>
	)


}
}




		  
export default Graph
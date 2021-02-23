import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from "react"
import CodingExperience from "../Psudo Database/CodeingExperience"


export default function Graph(){


	const languages= []


	CodingExperience.map(i =>{
		languages.push(i.name)
		
	}
)
	const options = {
		chart: {
			
		  type: 'column'
		},
		xAxis: {
			// type: 'category',
			categories:languages,

			title: {
				text: 'Languages'
			  }
		  },
		  legend: {
			enabled: false
		  },
		yAxis: {
			title: {
				text: 'years'
			  }
		  },
		title: {
		  text: 'Languages'
		},
		plotOptions: {
			series: {
			  borderWidth: 0,
			  dataLabels: {
				enabled: true,
				format: '{point.y:.1f}%'
			  }
			}
		  },
		series: [
		  {
			  name:"Languages",
			  data: CodingExperience
			
		  }
		]
	  };
	  console.log(languages)

	return(
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	)
}
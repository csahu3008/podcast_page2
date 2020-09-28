import React from 'react'
import './Donut.css'
import {Doughnut} from 'react-chartjs-2';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
function Donut() {
     const data={
        labels: ["Red", "Orange", "Green"],
        datasets: [
           {
                    label: '# of Votes',
                    data: [76,24],
                    backgroundColor: [
                        'rgb(60,179,113)',
                        'whitesmoke',
                    ],
                    borderColor: [
                        'rgba(255, 255, 255 ,1)',
                        'rgba(255, 255, 255 ,1)',
                        'rgba(255, 255, 255 ,1)'
                    ],
                    borderWidth: 2
                }
            ]
      }

    const options ={
        rotation: 1 * Math.PI,
                 circumference: 1 * Math.PI,
                 legend: {
                     display: false
                 },
                 tooltip: {
                     enabled: false
                 },
                 cutoutPercentage: 85
       }
      
    return (
        <div className="outer">
            <div className="upper_title">
                <p>Audience Satisfaction</p>
                <MoreHorizIcon className="dots" />
            </div>
            <div className="graph">
            <Doughnut data={data} className="donut" options={options} />
            </div>
            <div className="percent">
            <SentimentSatisfiedIcon className="icon"/>
            <div className="text"> 79.7% </div>
        </div>
        <div className="lower_title">
                <span>0%</span>
                <span>Based on Likes/dislikes</span>
                <span>100%</span>
            </div>
    </div>
    )
}

export default Donut

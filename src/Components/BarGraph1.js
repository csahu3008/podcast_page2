import React from 'react'
import './bar.css'

import { Bar } from 'react-chartjs-2'
function BarGraph1() {
    const data={
        labels: ["Dec 21","Dec 22","Dec 23","Dec 24","Dec 25","Dec 26","Dec 27"],
        datasets:[{
            label: '',
            data: [220,250,250,270,280,290,300],
            backgroundColor: [
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)',
                'rgb(60,179,113)'
            ]
        }]
    }
    const options={
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: 'Bar Chart'
        },
        legend: { display:false },
        scales: {
          yAxes: [
            {  
              ticks: {
                min: 0,
                max: 350,
                stepSize:50
              },
             
              gridLines: {
                  display: true,
                  drawBorder: false,
                  type:"dotted"
                
              }
            }
        ],
          xAxes: [{
            // Change here
            barPercentage: 0.5,
            gridLines: {
                display: false,
                drawBorder: false
            }
        
        }]

        }, 
        

      }
    return (
        <div className="bar">
            <Bar 
            data={data}
            width={80}
            height={220}
            options={options}
            />
        </div>
    )
}

export default BarGraph1

import React from 'react'
import './BarGraph.css'
import BarGraph1 from './BarGraph1.js'
function BarGraph({title,data,per}) {
    return (
        <div className="bargraph">
            <div className="bargraph__title"> {title} </div>
            <div className="bargraph__data"> {data} </div>
            <div className="bargraph__per"> <span > {per}</span> in last 7 days</div>
            <BarGraph1 />
        </div>
    )
}

export default BarGraph

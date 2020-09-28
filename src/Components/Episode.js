import React from 'react'
import './Episode.css'
function Episode({index,main_title,sub_title,time,status}) {
    return (
        <div className="episode">
            <span className="episode__index">{index}</span>
            
            <span className="episode__des">
                <span className="episode__des__main">{main_title}</span>
                <span className="episode__des__sub">{sub_title}</span>
            </span>
            
    <span className="episode__time">{time}</span>
    {status?<span className="status__live">Live</span>:<span className="status__off">.offline</span>}
        </div>
    )
}

export default Episode

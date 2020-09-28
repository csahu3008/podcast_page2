import './DataBlock.css'
import React from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
function DataBlock({title,data,per,icon_status,margin_status}) {
    return (
        <div className="datablock">
           <div>
            <div className="datablock__title">{title}</div>
            <div className="datablock__data">{data}</div>
            <div >{icon_status?<><CallMadeIcon  className="inc"/><span className="datablock__per_i">{per}</span></>:<><CallReceivedIcon className="dec"/><span className="datablock__per_d">{per}</span></>}</div>
           </div>

           <div>
               {margin_status&&<div class="datablock_verti"></div>}
            </div>
        
        </div>
    )
}

export default DataBlock

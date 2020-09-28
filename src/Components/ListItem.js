import React from 'react'
import './ListItem.css'
function ListItem({title,Icon,selected}) {
    
    return (
        <div className={`list ${selected && "selected"}`}  >
            <Icon className="list__icon"  /> <span className="list__title">{title}</span>
        </div>
    )
}

export default ListItem

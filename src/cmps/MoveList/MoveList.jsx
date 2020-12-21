


import './MoveList.scss'
import React from 'react'
import MovePreview from '../MovePreview/MovePreview';
export default function MoveList({title,movesList}) {
    if(movesList.length <=0) return <div><h1>You Dont have a moves yet</h1></div>
    return (
        <ul className="move-list clean-list ">
            <h2>{title}</h2>
            {movesList.map(move=>{
              return (<MovePreview move={move} key={move._id} />)  
            })}
        </ul>
    )
}

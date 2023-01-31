import React from 'react'
import Taskcard from '../Taskcard/Taskcard'

const Tasklist = ({tab,del,comp}) => {
  return (
    <div >{
        tab.map(el=>(<Taskcard key={el.id} el={el} del={del} comp ={comp}/>)

        )
     } 
     </div>
  )
}

export default Tasklist
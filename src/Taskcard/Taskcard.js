import React from 'react'


const Taskcard = ({el,del,comp}) => {
  return (
    <div className="task">
        <h1 id={el.isDone? "comp":"unc"}>{el.action}</h1>
        <div className ="butt">
        <button onClick={()=>del(el.id)}>Delete </button>
        <button onClick={()=>comp(el.id)}>{el.isDone ? "Undo" :"Complete"}</button>
        </div>
    </div>
  )
}

Taskcard.propTypes = {}

export default Taskcard
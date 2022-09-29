import React from 'react'
import "./Connect.css"

const Card = (props) => {
  return (
    <div className="card-container">
        <div className="photo-container">
            <div className="photo"><img src={props.photo} alt="" /></div>
        </div>
        <div className="content">
            <span className="heading">Thomas added a new course on </span><span className="bold">Cardiology</span>
            <p>3mins ago</p>
        </div>
    </div>
  )
}

export default Card
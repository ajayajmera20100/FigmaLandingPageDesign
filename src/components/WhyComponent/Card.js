import React from 'react'
import "./Why.css"

const Card = (props) => {
  return (
    <div className="why-card-container">
        <div className="icon-container">
            <div className="icon">
                <img src={props.icon} alt="" />
            </div>
        </div>
        <div className="content">
            <p>The only source of learning pre-sales activities</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. aut harum quisquam dolores, blanditiis alias.</p>
        </div>
    </div>
  )
}

export default Card
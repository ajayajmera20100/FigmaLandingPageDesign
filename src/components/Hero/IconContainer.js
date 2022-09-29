import React from 'react'
import "./Hero.css"

const IconContainer = (props) => {
  return (
    <div className="icon-container-outer">
        <div className="icon-container-inner">
            <img src={props.img} alt="" />
        </div>
        <div className="triangle"></div>
    </div>
  )
}

export default IconContainer
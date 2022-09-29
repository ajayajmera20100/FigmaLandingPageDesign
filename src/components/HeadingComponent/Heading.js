import React from 'react'
import "./Heading.css"

const Heading = (props) => {
  return (
    <div className="main-heading">
        <h2>{props.heading}</h2>
        <p>{props.subheading}</p>
    </div>
  )
}

export default Heading
import React from 'react'
import "./Why.css"
import Card from "./Card.js"
import w1 from "../../images/w1.PNG"
import w2 from "../../images/w2.PNG"
import w3 from "../../images/w3.PNG"
import Heading from "../HeadingComponent/Heading"

const Why = () => {
  return (
    <div className="why-container">
        <Heading heading="Why Tutor Master" subheading="Tutor Master will cover the following topics.." />
        <div className="cards">
            <Card icon={w1} />
            <Card icon={w2} />
            <Card icon={w3} />
        </div>
    </div>
  )
}

export default Why
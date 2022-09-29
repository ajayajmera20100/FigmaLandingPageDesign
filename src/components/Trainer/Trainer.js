import React from 'react'
import "./Trainer.css"
import TrainerCard from "./TrainerCard"
import Heading from "../HeadingComponent/Heading"

const Trainer = () => {
  return (
    <section className="trainer-container">
        <Heading heading="Who will train you?" subheading="Tutor Master will cover the following topics.." />
        <div className="trainers">
            <div><TrainerCard /><TrainerCard /></div>
            <div><TrainerCard /><TrainerCard /></div>
        </div>
    </section>
  )
}

export default Trainer
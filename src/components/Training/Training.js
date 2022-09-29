import React from 'react';
import "./Training.css";
import Heading from "../HeadingComponent/Heading"
import video from "../../videos/v1.mp4"

const Training = () => {
  return (
    <>
        <section className="training-container">
            <Heading heading="Training Overview" />
            <div className="video">
                <video src={video} controls="true" muted="true"></video>
            </div>
        </section>
    </>
  )
}

export default Training
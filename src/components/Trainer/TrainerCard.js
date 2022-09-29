import React from 'react'
import "./Trainer.css"
import photo from "../../images/photo.jpg"

const TrainerCard = () => {
  return (
    <>
        <div className="trainers-card">
            <div className="photo">
                <img src={photo} alt="" />
            </div>
            <div className="content">
                <p className="name">James Williams</p>
                <p>Bsc Msc</p>
                <p>Cardiology</p>
                <button type="button">Know More</button>
            </div>
        </div>
    </>
  )
}

export default TrainerCard
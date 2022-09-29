import React from 'react'
import "./Connect.css"

const MessageCard = (props) => {
  return (
    <>
        <div className="message-card-container">
            <div className="photo-container">
                <div className="photo"><img src={props.photo} alt="" /></div>
            </div>
            <div className="content">
                <div className="name-time">
                    <p>{props.name}</p>
                    <p>{props.time}</p>
                </div>
                <div className="description">
                    <span>{props.desc}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default MessageCard
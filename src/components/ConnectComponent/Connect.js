import React from 'react';
import "./Connect.css";
import Card from "./Card";
import photo from "../../images/photo.jpg";
import MessageCard from './MessageCard';
import Heading from "../HeadingComponent/Heading"

const Connect = () => {
  return (
    <div className="connect-container">
        <Heading heading="Stay Connected with us" subheading="Tutor Master will cover the following topics.." />
        <div className="main-content">
            <div className="part-1">
                <div className="heading">
                    <p>Notifications</p>
                    <button type="button">Mark as read</button>
                </div>
                <div className="cards">
                    <Card photo={photo} />
                    <Card photo={photo} />
                </div>
                <div className="part-3">
                    <button type="button">view-all</button>
                </div>
            </div>
            <div className="part-2">
                <MessageCard photo={photo} name="James" time="3mins ago" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, molestiae."/>
                <MessageCard photo={photo} name="James" time="3mins ago" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit temporibus modi maxime fugit exercitationem?"/>
            </div>
        </div>
    </div>
  )
}

export default Connect
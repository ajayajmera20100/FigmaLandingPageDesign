import React from 'react'
import "./StoryComponent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import storyImg from "../../images/story-image1.jpg"
import check from "../../images/check.PNG"

const StoryComponent = () => {
  return (
    <div className="story-container">
        <div className="text-container">
            <h2>The story of Tutor Master?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Earum quas minima suscipit ad repellat consequatur ab, accusamus nemo optio. 
            Vitae eaque, incidunt soluta minima hic quis facilis.</p>
            <div className="options-container">
                <div className="options"><span><img src={check} alt="" /></span><span>USP #1 showcased here with brief as needed</span></div>
                <div className="options"><span><img src={check} alt="" /></span><span>USP #1 showcased here with brief as needed</span></div>
                <div className="options"><span><img src={check} alt="" /></span><span>USP #1 showcased here with brief as needed</span></div>
            </div>
            <button className="know-more-btn">Know More</button>
        </div>
        <div className="image-container">
            <div className="outer-border">
                <div className="main-image">
                    <img src={storyImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoryComponent
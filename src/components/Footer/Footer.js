import React from 'react'
import "./Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="part-1">
            <p className="title">Knowledge Transfer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eaque nihil ut officiis provident inventore assumenda dolores molestias. Minus, temporibus!</p>
            <div className="social-icons">
                <span><FontAwesomeIcon icon={faFacebookF} /></span>
                <span><FontAwesomeIcon icon={faTwitter} /></span>
                <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
            </div>
        </div>
        <div className="part-2">
            <p className="title">Quick Links</p>
            <p>Home</p>
            <p>About</p>
            <p>Trainings</p>
            <p>Contact</p>
        </div>
        <div className="part-3">
            <p className="title">Topics</p>
            <p>Blanket Topics</p>
            <p>Country Topics</p>
            <p>Product Topics</p>
        </div>
        <div className="part-4">
            <p className="title">Important Links</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Disclaimer</p>
            <p>Sitemap</p>
        </div>
    </footer>
  )
}

export default Footer
import React,{useState} from 'react';
import "./Hero.css";
import curve_arrow from "../../images/curve-shape.svg";
import IconContainer from "./IconContainer";
import flask from "../../images/flask.PNG";
import atom from "../../images/atom.PNG";
import bulb from "../../images/bulb.PNG";
import dna from "../../images/dna.PNG";

const Hero = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <>
        <section className="hero-container">
            {visible && <div onClick={()=>{scrollToTop()}} className="scroll-top"><div className="inner-arrow"></div></div>}
            <div className="back-shape-container">
                <div className="vertical-strip"></div>
                <div className="horizontal-strip"></div>
                <div className="curve-arrow">
                  <img src={curve_arrow} alt="" />
                </div>
            </div>
            <div className="back-shape-container1">
                <div className="vertical-strip"></div>
                <div className="horizontal-strip"></div>
                <div className="curve-arrow">
                  <img src={curve_arrow} alt="" />
                </div>
            </div>
            <div className="back-shape-container2">
                <div className="vertical-strip"></div>
                <div className="horizontal-strip"></div>
                <div className="curve-arrow">
                  <img src={curve_arrow} alt="" />
                </div>
            </div>
            <div className="white-spots-container-lower">
                <div></div>
                <div></div>
            </div>
            <div className="white-spots-container-upper">
                <div></div>
            </div>

            <div className="main-section">
              <h1>Grow your mind and better opportunities you will find</h1>
              <p>Be a good achiever, shape your career</p>
            </div>
            <div className="flask-icon">
              <IconContainer img={flask} />
            </div>
            <div className="atom-icon">
              <IconContainer img={atom} />
            </div>
            <div className="bulb-icon">
              <IconContainer img={bulb} />
            </div>
            <div className="dna-icon">
              <IconContainer img={dna} />
            </div>
        </section>
    </>
  )
}

export default Hero
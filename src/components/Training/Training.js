import React,{useState,useEffect} from 'react';
import "./Training.css";
import Heading from "../HeadingComponent/Heading"
import video from "../../videos/v1.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faVolumeHigh } from '@fortawesome/free-solid-svg-icons'


const Training = () => {
  const [volume,setVolume] = useState(100);
  const [progress,setProgress] = useState(0);
  const [replay,setReplay] = useState(false);
  const [play,setPlay] = useState(false);
  const [currentT,setCurrentT] = useState(0);
  const [volumeVisible,setVolumeVisible] = useState(false);
  const [intervalId,setIntervalId] = useState(0);

  const volumeVisibility = ()=>{
    setVolumeVisible(!volumeVisible);
  }

  let v = document.getElementById("video");
  const changeVolume = (e)=>{
    setVolume(e.target.value);
    setTimeout(()=>{
      setVolumeVisible(!volumeVisible);
    },4000);
    v.volume = volume;
  }

  const changeProgress = (e)=>{
    clearInterval(intervalId);
    setPlay(false);
    v.pause();
    const val = e.target.value;
    if(val!==100){
      setReplay(false);
    }
    v.currentTime = (val/100)*v.duration;
  }

  const [duration,setDuration] = useState(0);
  const changeplay = ()=>{
    setReplay(false);
    if(v.paused){
      v.play();
      const myinterval = setInterval(render,100)
      setIntervalId(myinterval);
      setDuration(v.duration)
      setPlay(true);
    }else{
      clearInterval(intervalId);
      setPlay(false);
      v.pause();
    }
  }

  const replayClick = ()=>{
    setReplay(!replay);
    changeplay();
  }




  const clearFun = ()=>{
    clearInterval(intervalId);
  }

  function render(){
      if(v.ended){
        setReplay(true);
        clearFun();
      }
      setCurrentT(v.currentTime);
      document.getElementById("bar").value = (v.currentTime/v.duration)*100;
      console.log("interval")
  }

  const fullScreen = ()=>{
    v.requestFullscreen();
  }

  window.addEventListener('load',()=>{
    setDuration(document.getElementById('video').duration);
  })


  useEffect(()=>{
    let v3 = document.getElementById("video")
    setDuration(v3.duration);
    setProgress((v3.currentTime/v3.duration)*100)
    document.getElementById("bar").value = (v3.currentTime/v3.duration)*100;
  },[currentT,progress]);

  return (
    <>
        <section className="training-container">
            <Heading heading="Training Overview" />
            <div className="video">
                <video onClick={()=>{changeplay()}} id='video' src={video}></video>
                <div className="video-controls">
                    <div className="control-bar">
                      {!play  && <button onClick={()=>{changeplay()}} type="button" className="play-button"><FontAwesomeIcon icon={faPlay} /></button>}
                      {(play && !replay) &&  <button onClick={()=>{changeplay()}} type="button" className="pause-button"><span className="material-symbols-outlined">pause</span></button>}
                      {replay  &&  <button onClick={()=>{replayClick()}} type="button" className="replay-button"><span className="material-symbols-outlined">replay</span></button>}
                      <div id='time' className="time">
                        {currentT.toString().substring(0,4) +"/"+duration.toString().substring(0,4)}
                      </div>
                      <div className="volume">
                        <button onClick={()=>{volumeVisibility()}} type="button" className="volume-btn"><FontAwesomeIcon icon={faVolumeHigh} /></button>
                        {volumeVisible && <input id="volume" onChange={(e)=>{changeVolume(e)}} type="range" min="0" max="100" step="1" />}
                      </div>
                      <div onClick={()=>{fullScreen()}} className="full-screen"><span className="material-symbols-outlined">open_with</span></div>
                    </div>
                   <div className="progress-bar">
                      <input id="bar" onClick={(e)=>{changeProgress(e)}} type="range" min="0" max="100" step="1" />
                      
                   </div>
                </div>
                {(!play || replay) && <div className="middle-btns">
                        {(!play && !replay) && <button onClick={()=>{changeplay()}} type="button" className="play-button"><span className="material-symbols-outlined">play_circle</span></button>}
                        {replay && <button onClick={()=>{replayClick()}} type="button" className="replay-button"><span className="material-symbols-outlined">replay</span></button>}
                </div>}
               
            </div>
        </section>
    </>

  )
}

export default Training
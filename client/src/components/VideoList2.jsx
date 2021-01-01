import React, {useContext} from 'react';
import {VideoContext} from '../VideoContext';
import './css/videolist2.css';
import Navbar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import Video2 from './Video2';

const VideoList2 = () => {
  
  const [videos] = useContext(VideoContext);

  let l = 0;
  const handleRightArrow = () => {
    console.log('hello right')
    l++;
    for(let i of document.querySelectorAll('.data-item')) {
      if(l === 0) {i.style.left = "0px";}
      if(l === 1) {i.style.left = "-60%";}
      if(l === 2) {i.style.left = "-120%";}
      if(l === 3) {i.style.left = "-180%";}
      if(l === 4) {i.style.left = "-240%";}
    }
    if(l > 4) {
      l--;
    }
  }

  const handleLeftArrow = () => {
    console.log('hello left')
    l--;
    for(let i of document.querySelectorAll('.data-item')) {
      if(l === 0) {i.style.left = "0px";}
      if(l === 1) {i.style.left = "-60%";}
      if(l === 2) {i.style.left = "-120%";}
      if(l === 3) {i.style.left = "-180%";}
      if(l < 0) {l = 0;}
    }
  }

  return (
    <div className="main">
      <Navbar/>
      <div className="contain">
        <h2 style={{paddingLeft:"2rem"}}>Popular Courses</h2>
        <div className="section">
          <FontAwesomeIcon className="fa-3x left-arrow arrows" icon={faArrowCircleLeft} onClick={handleLeftArrow}/>
          <FontAwesomeIcon className="fa-3x right-arrow arrows" icon={faArrowCircleRight} onClick={handleRightArrow}/>
          {videos.map(video => (
            <Video2 video={video} key={video.id}/>
            // <div className="thumbnail-box data-item"  onClick={toggle}>
            //   <img className="video-thumbnail" src={thumbnails} alt="the video cover"/>
            //   <div className="thumbnail-overlay">
            //     <div className="overlay-contents-left">
            //       <Link to="/video-play"><FontAwesomeIcon className="play-btn-icon fa-3x" icon={faPlayCircle}/></Link>
            //       <h3>{video.title}</h3>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoList2;
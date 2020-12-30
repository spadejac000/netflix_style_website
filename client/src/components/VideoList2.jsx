import React, {useContext} from 'react';
import {Row} from 'reactstrap';
import {VideoContext} from '../VideoContext';
import './css/videolist2.css';
import Navbar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight, faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import thumbnails from '../thumbnails/windmills.png';
import {Link} from 'react-router-dom';

const VideoList2 = () => {
  
  const [videos] = useContext(VideoContext);

  let l = 0;
  const handleLeftArrow = () => {
    console.log('hello left')
    l++;
    for(let i of document.querySelectorAll('.data-item')) {
      if(l == 0) {i.style.left = "0px";}
      if(l == 1) {i.style.left = "-740px";}
      if(l == 2) {i.style.left = "-1480px";}
      if(l == 3) {i.style.left = "-2220px";}
      if(l == 4) {i.style.left = "-2960px";}
      if(l > 4) {i.style.left = "0px";}
      console.log('poo1')
    }
  }

  const handleRightArrow = () => {
    console.log('hello right')
    l--;
    for(let i of document.querySelectorAll('.data-item')) {
      if(l == 0) {i.style.left = "0px";}
      if(l == 1) {i.style.left = "-740px";}
      if(l == 2) {i.style.left = "-1480px";}
      if(l == 3) {i.style.left = "-2220px";}
      if(l < 0) {l = 0;}
      console.log('poo2')
    }
  }

  return (
    <div className="main">
      <Navbar/>
      <div className="contain">
        <div className="section">
          <FontAwesomeIcon className="fa-3x left-arrow arrows" icon={faArrowCircleLeft} onClick={handleLeftArrow}/>
          <FontAwesomeIcon className="fa-3x right-arrow arrows" icon={faArrowCircleRight} onClick={handleRightArrow}/>
          {videos.map(video => (
            <div className="thumbnail-box data-item">
              <img className="video-thumbnail" src={thumbnails} alt="the video cover"/>
              <div className="thumbnail-overlay">
                <div className="overlay-contents-left">
                  <Link to="/video-play"><FontAwesomeIcon className="play-btn-icon fa-3x" icon={faPlayCircle}/></Link>
                  <h3>{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoList2;
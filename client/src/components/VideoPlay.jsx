import React, {useState} from 'react';
import video from '../videos/windmills.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import './css/videoplay.css';
import {Link} from 'react-router-dom'

const VideoPlay = () => {

  const [mouseMoving, setMouseMoving] = useState(false)

  const setMouseMove = (e) => {
    e.preventDefault();
    setMouseMoving(true);

    let timeout;
    (() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setMouseMoving(false), 2000);
    })();
  }

  const goBackIconStyle = {
    visibility: mouseMoving ? 'visible': 'hidden',
    transition: mouseMoving ? 'visibility 0s linear 0s, opacity 300ms' : 'visibility 0s linear 300ms, opacity 300ms',
    opacity: mouseMoving ? '1' : '0'
   };

  return (
    <div>
      <video onMouseMove={e => setMouseMove(e)} className="video" width="100%" controls>
        <source src={video} type="video/mp4"/>
      </video>
      <Link to="/video-list"><FontAwesomeIcon style={goBackIconStyle} className="go-back-icon fa-4x" size="lg" icon={faArrowAltCircleLeft}/></Link>
    </div>
  )
}

export default VideoPlay;
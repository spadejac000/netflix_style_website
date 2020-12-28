import React, {useState} from 'react';
import video from '../videos/windmills.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import './css/videoplay.css'

const VideoPlay = () => {

  const [mouseMoving, setMouseMoving] = useState(false)

  const handleMove = (e) => {
    document.getElementsByClassName('go-back-icon')[0].style.opacity = "1";
  }

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
    ease: '1s',
    transition: '1s'
   };

  return (
    <div>
      <video onMouseMove={e => setMouseMove(e)} className="video" width="100%" controls>
        <source src={video} type="video/mp4"/>
      </video>
      <FontAwesomeIcon style={goBackIconStyle} className="go-back-icon fa-4x" size="lg" icon={faArrowAltCircleLeft}/>
    </div>
  )
}

export default VideoPlay;
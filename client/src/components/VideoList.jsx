import React, {useContext} from 'react';
import {Row, Col} from 'reactstrap';
import {VideoContext} from '../VideoContext';
import './css/videolist.css'
import thumbnails from '../thumbnails/windmills.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Video from './Video';

const VideoList = () => {
  
  const [videos] = useContext(VideoContext);

  return (
    <div className="contain">
      <Row>
        {videos.map(video => (
          <Video video={video}/>
        ))}
      </Row>
    </div>
  )
}

export default VideoList;
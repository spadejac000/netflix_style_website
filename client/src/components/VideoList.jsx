import React, {useContext} from 'react';
import {Row} from 'reactstrap';
import {VideoContext} from '../VideoContext';
import './css/videolist.css';
import Video from './Video';
import Navbar from './NavBar';

const VideoList = () => {
  
  const [videos] = useContext(VideoContext);

  return (
    <div>
      <Navbar/>
      <div className="contain">
        <Row>
          {videos.map(video => (
            <Video video={video} key={video.id}/>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default VideoList;
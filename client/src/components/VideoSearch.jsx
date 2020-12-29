import React, {useContext, useEffect} from 'react';
import {Row} from 'reactstrap';
import {VideoContext} from '../VideoContext';
import {SearchContext} from '../SearchContext';
import './css/videolist.css';
import Video from './Video';
import NavBar from './NavBar';

const VideoSearch = () => {
  
  const [videos] = useContext(VideoContext);
  const [search] = useContext(SearchContext);

  console.log('search content: ', search)
  

  return (
    <div>
      <NavBar/>
      <div className="contain">
        <Row>
          {search.map(video => (
            <h1>{video.title}</h1>
          ))}
        </Row>
      </div>
    </div>
    
  )
}

export default VideoSearch;
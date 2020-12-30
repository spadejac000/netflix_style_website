import React, {useContext} from 'react';
import {Row} from 'reactstrap';
import {SearchContext} from '../SearchContext';
import './css/videolist.css';
import NavBar from './NavBar';
import Video from './Video';

const VideoSearch = () => {
  const [search] = useContext(SearchContext);

  return (
    <div>
      <NavBar/>
      <div className="contain">
        <Row>
          {search.map(video => (
            <Video video={video} key={video.id}/>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default VideoSearch;
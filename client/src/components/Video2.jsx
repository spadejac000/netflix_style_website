import React, {useState} from 'react';
import {Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import thumbnails from '../thumbnails/windmills.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import './css/video.css';
import {Link} from 'react-router-dom';

const Video = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div key={props.video.id} className="grid-column data-item">
      <div className="thumbnail-box" onClick={toggle}>
        <img className="video-thumbnail" src={thumbnails} alt="the video cover"/>
        <div className="thumbnail-overlay">
          <div className="overlay-contents-left">
            <Link to="/video-play"><FontAwesomeIcon className="play-btn-icon fa-3x" icon={faPlayCircle}/></Link>
            <h3>{props.video.title}</h3>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.video.title}</ModalHeader>
        <ModalBody>
          {props.video.synopsis}
        </ModalBody>
        <ModalFooter>
          <Link color="primary" to="/video-play" className="btn btn-primary">Watch</Link>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Video;
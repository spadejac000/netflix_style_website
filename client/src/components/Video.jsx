import React from 'react';
import video from '../videos/windmills.mp4'

const Video = () => {
  return (
    <div>
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
}

export default Video;
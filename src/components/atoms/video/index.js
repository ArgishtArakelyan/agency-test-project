import React from 'react'
import videoImage from '../../../assets/images/Bitmap3.png'

const Video = ({}) => {
  return (
    <div className="video">
      <video controls poster={videoImage} muted>
        <source
          src="https://treehouse-code-samples.s3.amazonaws.com/html-video-and-audio/bridge.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Video

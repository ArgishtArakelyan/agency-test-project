import React from 'react'
import { VideoBlock, VideoreelBlock } from '../../molecules/videoreel'
import './style.scss'

const VideoReel = () => (
  <section className="videoReel">
    <div className="innerWrap">
      <VideoBlock />
      <VideoreelBlock />
    </div>
  </section>
)

export default VideoReel

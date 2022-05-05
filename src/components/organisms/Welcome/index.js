import React from 'react'
import { ContentBlock, ActionBlock, InfoBlock, ImageBlock } from '../../molecules/welcome'
import './style.scss'

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="innerWrap">
        <div className="welcome-main-text">
          <ContentBlock />
          <ActionBlock />
          <InfoBlock />
        </div>
        <ImageBlock />
      </div>
    </section>
  )
}

export default Welcome

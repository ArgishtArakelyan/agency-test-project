import React from 'react'
import { ContentBlock, ImageBlock, CheckedBlock } from '../../molecules/Features'
import './style.scss'

const Features = () => {
  return (
    <section className="features">
      <div className="innerWrap">
        <div className="features-text">
          <ContentBlock />
          <CheckedBlock />
        </div>
        <ImageBlock />
      </div>
    </section>
  )
}

export default Features

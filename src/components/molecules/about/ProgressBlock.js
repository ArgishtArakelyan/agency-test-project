import React from 'react'
import { Paragraph } from '../../atoms'

const ProgressBlock = () => (
  <div className="about-progress">
    <div className="item-wrap">
      <div className="item">
        <Paragraph size="5">42%</Paragraph>
        <Paragraph className="mt22" size="6">
          Years of experience
        </Paragraph>
      </div>
      <div className="item">
        <Paragraph size="5">73+</Paragraph>
        <Paragraph className="mt22" size="6">
          Agency members
        </Paragraph>
      </div>
      <div className="item">
        <Paragraph size="5">5.000</Paragraph>
        <Paragraph size="6" className="mt22">
          Agency members
        </Paragraph>
      </div>
    </div>
  </div>
)

export default ProgressBlock

import React from 'react'
import { Span, Paragraph } from '../../atoms'

const ContentBlock = () => (
  <div className="welcome-main-textWrap">
    <Span size="1" className="uppercase">
      MODERN STUDIO
    </Span>
    <Paragraph size="2">
      <Span>We’re Help</Span>
      <Span>To Build Your</Span>
      <Span>Dream Project</Span>
    </Paragraph>
    <Paragraph size="3" className="mt34">
      Agency provides a full service range including technical skills, design, business
      understanding.
    </Paragraph>
  </div>
)

export default ContentBlock

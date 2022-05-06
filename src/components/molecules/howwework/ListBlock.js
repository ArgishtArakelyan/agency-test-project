import React from 'react'
import { Paragraph, Span } from '../../atoms'

const ListBlock = () => (
  <div className="howWeWork-ordered-lists">
    <div className="item">
      <Span size="5">1</Span>
      <Paragraph size="5">Full service range including</Paragraph>
    </div>
    <div className="item">
      <Span size="5">2</Span>
      <Paragraph size="5">Technical skills, design, business</Paragraph>
    </div>
    <div className="item">
      <Span size="5">3</Span>
      <Paragraph size="5">Themselves in the merchant's</Paragraph>
    </div>
  </div>
)

export default ListBlock

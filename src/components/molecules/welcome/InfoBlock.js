import React from 'react'
import Bitmap from '../../../assets/images/Bitmap.png'
import { Span, Paragraph, Image } from '../../atoms'

const InfoBlock = () => (
  <div className="welcome-user">
    <Image src={Bitmap} alt="" />

    <div className="welcome-user-info">
      <Paragraph size="3">"Put themselves in the merchant's shoes"</Paragraph>
      <Span size="4">Meta Inc.</Span>
    </div>
  </div>
)

export default InfoBlock

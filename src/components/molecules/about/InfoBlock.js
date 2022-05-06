import React from 'react'
import { Image, Paragraph, Span, Button } from '../../atoms'
import pic2 from '../../../assets/images/pic2.png'

const InfoBlock = () => (
  <div className="img-text">
    <div className="about-img">
      <div className="img-group animation">
        <Image src={pic2} />
      </div>
    </div>
    <div className="about-text">
      <Span size="1">about</Span>
      <Paragraph className="mt34" size="5">
        An Experience Design Agency
      </Paragraph>
      <Paragraph className="mt34" size="6">
        Provides a full service range
      </Paragraph>
      <Paragraph className="mt34" size="7">
        Ability to put themselves in the merchant's shoes. It is meant to partner on the long run,
        and work as an extension of the merchant's team.
      </Paragraph>
      <div className="about-action">
        <Button className="light-shadow">ABOUT US</Button>
      </div>
    </div>
  </div>
)

export default InfoBlock

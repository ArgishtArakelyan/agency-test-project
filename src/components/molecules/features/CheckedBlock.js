import React from 'react'
import { Paragraph, Image } from '../../atoms'
import check from '../../../assets/images/check.png'

const CheckedBlock = () => (
  <div className="Checked-wrap">
    <div className="item">
      <Image src={check} />
      <Paragraph size="7">Range including technical skills</Paragraph>
    </div>
    <div className="item">
      <Image src={check} />
      <Paragraph size="7">Business understanding</Paragraph>
    </div>
    <div className="item">
      <Image src={check} />
      <Paragraph size="7">Partner on the long run</Paragraph>
    </div>
  </div>
)

export default CheckedBlock

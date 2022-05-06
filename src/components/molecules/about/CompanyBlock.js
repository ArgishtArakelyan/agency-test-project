import React from 'react'
import { Image } from '../../atoms'
import img3 from '../../../assets/images/3.png'
import img4 from '../../../assets/images/4.png'
import img5 from '../../../assets/images/5.png'
import img6 from '../../../assets/images/6.png'
import img7 from '../../../assets/images/7.png'

const CompanyBlock = () => (
  <div className="partners">
    <div className="img-wrap">
      <div className="img">
        <Image src={img3} />
      </div>
      <div className="img">
        <Image src={img4} />
      </div>
      <div className="img">
        <Image src={img5} />
      </div>
      <div className="img">
        <Image src={img6} />
      </div>
      <div className="img">
        <Image src={img7} />
      </div>
    </div>
  </div>
)

export default CompanyBlock

import React from 'react'
import Logo from '../../../assets/images/logo.png'
import { Image, Anchor } from '../../atoms'

const ImageBlock = () => (
  <div className="logo">
    <Anchor>
      <Image src={Logo} />
    </Anchor>
  </div>
)

export default ImageBlock

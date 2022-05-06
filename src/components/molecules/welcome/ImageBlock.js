import React from 'react'
import pic from '../../../assets/images/pic.png'
import { Image } from '../../atoms'

const ImageBlock = () => (
  <div className="welcome-img">
    <div className="img-group img-group-1 animation">
      <Image src={pic} alt="" />
      {/* <div class="shape shape-1 shape-1-border">
            <img src="assets/images/Bitmap2.png" alt="">
        </div>

            <div class="shape shape-2">
            <img src="assets/images/Shape.png" alt="">
        </div>

        <div class="shape shape-3">
            <img src="assets/images/Path1.png" alt="">
        </div>

        <div class="shape shape-4">
            <img src="assets/images/Combined-Shape.png" alt="">
        </div>

        <div class="shape shape-1 shape-2-border">
            <img src="assets/images/Bitmap1.png" alt="">
        </div>
        
        <div class="shape shape-5">
            <img src="assets/images/1.png" alt="">
        </div>

        <div class="shape shape-6">
            <img src="assets/images/2.png" alt="">
        </div>

        <div class="shape shape-7"></div> */}
    </div>
  </div>
)

export default ImageBlock

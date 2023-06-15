import React from 'react'
import Image from '../assets/images/image-product-mobile.jpg'
import DeskImage from '../assets/images/image-product-desktop.jpg'

function MainImage() {
  return (
    <div id='imageWrapper' className='md:max-w-[300px]'>
        <img src={Image} alt="perfume" className='rounded-[8px_8px_0px_0px] md:hidden' />
        <img src={DeskImage} alt="perfume desktop" className='hidden md:block rounded-[8px_0px_0px_8px]' />
    </div>
  )
}

export default MainImage
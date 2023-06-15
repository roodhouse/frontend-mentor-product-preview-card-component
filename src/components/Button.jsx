import React from 'react'
import Cart from '../assets/images/icon-cart.svg'

function Button() {
  return (
    <div id='buttonWrapper' className='w-full'>
        <button className='w-full flex justify-center bg-deepAqua rounded-lg items-center py-[15px] font-["Montserrat"] text-sm leading-[17px] font-bold text-white'><span className='mr-3'><img src={Cart} alt='add to cart' /></span> Add to Cart</button>
    </div>
  )
}

export default Button
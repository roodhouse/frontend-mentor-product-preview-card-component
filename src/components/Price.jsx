import React from 'react'

function Price() {
  return (
    <div id='priceWrapper' className='mb-5 flex items-center'>
        <div id='salePrice' className='font-["Fraunces"] text-[32px] leading-[32px] text-deepAqua mr-[19px]'>
            <p>$149.99</p>
        </div>
        <div id='originalPrice' className='font-["Montserrat"] font-medium text-[13px] leading-[23px] text-aurometal line-through'>
            <p>$169.99</p>
        </div>
    </div>
  )
}

export default Price
import React from 'react'

function Body() {
  return (
    <div id='bodyWrapper' className='mb-6 md:mb-[30px]'>
        <div id='headingWrapper' className='mb-3 font-["Montserrat"] text-xs leading-[15px] tracking-[5px] font-medium text-aurometal md:mb-5'>
            <h1>PERFUME</h1>
        </div>
        <div id='subHeadingWrapper' className='mb-4 font-["Fraunces"] text-[32px] leading-[32px] text-gunmetal md:mb-6'>
            <p>Gabrielle Essence Eau De Parfum</p>
        </div>
        <div id='textWapper' className='font-["Montserrat"] text-sm leading-[23px] text-aurometal'>
            <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        </div>
    </div>
  )
}

export default Body
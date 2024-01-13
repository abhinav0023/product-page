import React from 'react'
import './styling/Rightbanner.css'
import shoes from '../assets/shoe_image.png'
function Rightbanner() {
  return (
    <>
    <div className='rightBanner__'>
        <img src={shoes} alt='shoe_img' />

    </div>
    </>
  )
}

export default Rightbanner
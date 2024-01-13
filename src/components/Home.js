import React from 'react'
import './styling/Home.css'
import shoe_img from '../assets/shoe_image.png'
import LeftBanner from './LeftBanner'
import Rightbanner from './Rightbanner'


function Home() {
  return (
    <>
    <div className='Home__'>
      <LeftBanner/>
      <Rightbanner/>
    </div>
    </>

  )
}

export default Home
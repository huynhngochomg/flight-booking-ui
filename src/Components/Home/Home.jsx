import React from 'react'
import './Home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import video from '../../Assets/Videos/cloud.mp4'
import airplane from '../../Assets/Images/airplane.png'



const Home = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])


  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1 data-aos='fade-up'>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className='homeImages flex'>
        <div className='videoDiv'>
          <video src={video} autoPlay muted loop className='video' />
        </div>

        <img src={airplane} className='plane'/>
      </div>
    </div>
  )
}

export default Home
 
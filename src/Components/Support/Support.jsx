import React from 'react'
import './Support.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import image1 from '../../Assets/Images/image1.jpg';
import image2 from '../../Assets/Images/image2.jpg';
import image3 from '../../Assets/Images/image3.jpg';

const Support = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
    <div className='support section container'>
      <div className='sectionContainer'>
        <div className='titleDiv'>
          <small>Travel support</small>
          <h2 >Plan your travel with confidence</h2>
          <p> Find help with booking and travel plans, see what to expect along the journey!</p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo" data-aos='fade-down' data-aos-duration='2500'>
              <span className='number'>01</span>
              <h3> Travel requirement for Dubai</h3>
              <p> Find help with booking and travel plans, 
                see what to expect along the journey to favorite destination!</p>
            </div>

            <div className="singleInfo" data-aos='fade-down' data-aos-duration='3500'>
              <span className='number colorOne'>02</span>
              <h3>Chauffer services at your arrival</h3>
              <p> Find help with booking and travel plans, 
                see what to expect along the journey to favorite destination!</p>
            </div>

            <div className="singleInfo" data-aos='fade-down' data-aos-duration='4500'>
              <span className='number colorTwo'>03</span>
              <h3>Multi-risk travel insurance</h3>
              <p> Find help with booking and travel plans, 
                see what to expect along the journey to favorite destination!</p>
            </div>

            
          </div>

          <div className="imgDiv" data-aos='fade-left'>
            <div className='image1'><img src={image1} /></div>
            <div className='image2'><img src={image2} /></div>
            <div className='image3'><img src={image3} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support

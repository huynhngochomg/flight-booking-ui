import React from 'react'
import './Subscribers.css'


import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Subscribers = () => {


  useEffect(() => {
    Aos.init({duration:2500})
  },[])

  return (
    <div className="subscribe section" >
      <div className="sectionContainer container"  data-aos='fade-up'>
        <h2 >Subscribe Newsletters & get Latest News</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder="Enter your email address" />
          <button className='btn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers

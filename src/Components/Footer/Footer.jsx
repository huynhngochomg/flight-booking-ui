import React from 'react'
import './Footer.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'
import {TiSocialYoutube} from 'react-icons/ti'
import {TiSocialPinterest} from 'react-icons/ti'
import logo from '../../Assets/Images/logo.png'

const Footer = () => {

  useEffect(() => {
    Aos.init({duration:2500})
  },[])

  return (
    <div className='footer'>
      <div className="sectionContainer container grid"  data-aos='fade-up'>
          <div className="gridOne">
            <div className="logoDiv">
              <img src={logo} alt="logo" className='logo' />
            </div>
            <p >Your mind should be stronger than your feelings, fly!</p>
            <div className="socialIcon flex">
              <TiSocialFacebook className='icon'/>
              <TiSocialTwitter className='icon'/>
              <TiSocialYoutube className='icon'/>
              <TiSocialPinterest className='icon'/>
            </div>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">Information</span>
            <li> 
              <a href='#'>Home</a>
            </li>
            <li> 
              <a href='#'>Explore</a>
            </li>
            <li> 
              <a href='#'>Flight Status</a>
            </li>
            <li> 
              <a href='#'>Travel</a>
            </li>
            <li> 
              <a href='#'>Check-In</a>
            </li>
            <li> 
              <a href='#'>Manager your booking</a>
            </li>

          </div>

          <div className="footerLinks">
            <span className="linkTitle">Quick Guide</span>
            <li> 
              <a href='#'>FAQ</a>
            </li>
            <li> 
              <a href='#'>How to</a>
            </li>
            <li> 
              <a href='#'>Features</a>
            </li>
            <li> 
              <a href='#'>Baggage</a>
            </li>
            <li> 
              <a href='#'>Route Map</a>
            </li>
            <li> 
              <a href='#'>Our Communities</a>
            </li>


          </div>

          <div className="footerLinks">
            <span className="linkTitle">Information</span>
            <li> 
              <a href='#'>Home</a>
            </li>
            <li> 
              <a href='#'>Explore</a>
            </li>
            <li> 
              <a href='#'>Flight Status</a>
            </li>
            <li> 
              <a href='#'>Travel</a>
            </li>
            <li> 
              <a href='#'>Check-In</a>
            </li>
            <li> 
              <a href='#'>Manager your booking</a>
            </li>
          </div>
      </div>

      <div className="copyRightDiv flex">
        <p>Pink Design Develope by <a href="" target="_blank" > Hong Huynh</a></p>   
      </div>
    </div>
  )
}

export default Footer

import React, { useState } from 'react'
import './Navbar.css'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import logo from '../../Assets/Images/logo.png'

const Navbar = () => {

  const [active, setActive] = useState('navbarMenu');
  const [background, setBackground] = useState('navbarTwo');

  const handleShowNavbar = () => {
    setActive('navbarMenu showNavbar');
  }

  const handleRemoveNavbar = () => {
    setActive('navbarMenu');
  }

  const handleAddBg = () => {
    if(window.scrollY >= 10) {
      setBackground('navbarTwo navbarWithBg');
    }
    else {
      setBackground('navbarTwo');
    }
  }

  window.addEventListener('scroll', handleAddBg)

  return (
    <div className='navbar flex'>
      <div className='navbarOne flex'>
        <div>
          <SiConsul className='icon'/>
        </div>

        <div className='none flex'>
          <li className='flex'> <BsPhoneVibrate className='icon'/>Support</li>
          <li className='flex'> <AiOutlineGlobal className='icon'/>Languages</li>
        </div>

        <div className='atb flex'>
          <span>Sign In </span>
          <span>Sign Out </span>
        </div>
      </div> 

      <div className={background}>
        <div className='logoDiv'>
          <img src={logo} alt='logo' className='logo' />
        </div>

        <div className={active}>
          <ul className='menu flex'>
            <li onClick={handleRemoveNavbar} className='listItem'>Home</li>
            <li onClick={handleRemoveNavbar} className='listItem'>About</li>
            <li onClick={handleRemoveNavbar} className='listItem'>Offers</li>
            <li onClick={handleRemoveNavbar} className='listItem'>Seats</li>
            <li onClick={handleRemoveNavbar} className='listItem'>Destinations</li>
          </ul>

          <button onClick={handleRemoveNavbar} className='btn flex btnOne'>
            Contact
          </button>
        </div>

        <button className='btn flex btnTwo'>
            Contact
        </button>

        <div className='toggleIcon' onClick={handleShowNavbar}>
          <CgMenuGridO className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar

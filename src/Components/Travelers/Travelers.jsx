import React from 'react'
import './Travelers.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import paris from '../../Assets/Images/paris.jpg'
import newyork from '../../Assets/Images/newyork.jpg'
import vietnam from '../../Assets/Images/vietnam.jpg'
import london from '../../Assets/Images/london.jpg'
import traveler1 from '../../Assets/Images/traveler1.jpg'
import traveler2 from '../../Assets/Images/traveler2.jpg'
import traveler3 from '../../Assets/Images/traveler3.jpg'
import traveler4 from '../../Assets/Images/traveler4.jpg'

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "Pink Huynh",
    travelerLink: '@giacobehong1996'
  },
  {
    id: 2,
    destinationImage: newyork,
    travelerImage: traveler2,
    travelerName: "Quynh Nguyen",
    travelerLink: '@ngocquynh'
  },
  {
    id: 3,
    destinationImage: vietnam,
    travelerImage: traveler3,
    travelerName: "Hong Huynh",
    travelerLink: '@giacobehong1999'
  },
  {
    id: 4,
    destinationImage: london,
    travelerImage: traveler4,
    travelerName: "Anh Huynh",
    travelerLink: '@giacobehong1996'
  },

]


const Travelers = () => {

  
  useEffect(() => {
    Aos.init({
      duration:2500
    })
  },[])

  return (
    <div className='travelers section container'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down'>Top travel of this month!</h2>

        <div className="travelersContainer grid">
          {/* Single Passenger Card */}
          {
            travelers.map((traveler) => {
              return (
                <div className="singleTraveler" key={traveler.id}  data-aos="flip-left">
                  <img src={traveler.destinationImage} className='destinationImage' />
                  <div className="travelDetail">
                    <div className="travelPicture">
                      <img src={traveler.travelerImage} className='travelerImage'/>
                    </div>
                    <div className="travelerName">
                      <span >{traveler.travelerName}</span>
                      <p>{traveler.travelerLink}</p>    
                    </div>
                  </div>
                </div>
              )})
            }
        </div>
      </div>

    </div>
  )
}

export default Travelers

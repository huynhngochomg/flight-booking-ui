import React from "react";
import "./Lounge.css";


import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import imgLounge1 from "../../Assets/Images/lounge1.jpg";
import imgLounge2 from "../../Assets/Images/lounge2.jpg";

const Lounge = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])


  return (
    <div className="lounge section container">
      <div className="sectionContainer grid">
        <div className="imgDiv" data-aos='fade-left' data-aos-duration='2500'>
          <img src={imgLounge1} alt="Image lounge1" className="imageLeft" />
          <img src={imgLounge2} alt="Image lounge2" className="imageRight" />
        </div>

        <div className="textDiv" data-aos='fade-down' data-aos-duration='2500'>
          <h2>Unaccompanied Minor Lounge</h2>
          <div className="grids grid">
            <div className="singleGrid">
              <span className="gridTitle"> Help through the airport</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle"> Priority Boarding</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;

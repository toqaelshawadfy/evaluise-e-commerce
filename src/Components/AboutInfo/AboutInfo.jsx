import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {faTruck, faVolumeUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
 import './AboutInfo.css'
export default function AboutInfo() {
  return <>
     <div className="sec4">
        <div className="aboutinfo">
          <div className="row px-5 g-0 mx-3">
            <div className="col text-center">
              <div className="infoicon">
              <FontAwesomeIcon icon={faTruck} className='infoiconi' color='white'/>
              </div>
              <h4 className='text-black mt-3'>FREE AND FAST DELIVERY</h4>
              <h5>Free delivery for all orders over $140</h5>
            </div>
            <div className="col text-center">
              <div className="infoicon">
                 <FontAwesomeIcon icon={faVolumeUp}  className='infoiconi'color='white'/>
              </div>
              <h4 className='text-black mt-3'>24/7 CUSTOMER SERVICES</h4>
              <h5>Friendly 24/7 customer support</h5>
            </div>
            <div className="col text-center">
              <div className="infoicon">
                <FontAwesomeIcon icon={faCheckCircle} className='infoiconi'color='white'/>
              </div>
              <h4 className='text-black mt-3'>MONEY BACK GUARANTEE</h4>
              <h5>We reurn money within 30 days</h5>
            </div>
          </div>
        </div>
      </div>
  </>
}

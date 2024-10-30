import React from 'react'
import QRCode from "react-qr-code";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import googleplayimg from "../../Images/google-play-store-new.png"
import './Footer.css';
export default function Footer() {
  return <>
  <div className="footer pb-4 mt-5  bottom-0">
 <div className="container">
 <div className="top-footer py-3 px-3">
    <div className="row g-0 px-5">
      <div className="col mt-5">
        <h3>Exclusive</h3>
        <p className='mt-3'>Subscribe</p>
        <p>Get 10% Off your life </p>
        <div className="box d-flex  justify-content-between align-items-center">
          <span>Enter your email</span>
          <FontAwesomeIcon icon={faPaperPlane} size="1x" color='white'/>
        </div>
      </div>
      <div className="col mt-5">
        <h3>Support</h3>
        <p className='mt-3'>111 Bijoy sarani,Dhaka
          DH 1515,Bangladesh.
        </p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className="col mt-5">
        <h3>Account</h3>
        <p className='mt-3'>My Account</p>
        <p>Login/Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div className="col mt-5">
        <h3>Quick Link</h3>
        <p className='mt-3'>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className="col mt-5">
        <h3>Download App</h3>
        <span className='mt-3'>Save $3 with App New User Only</span>
        <div className="row">
          <div className="col">
          <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
         <QRCode
           size={256}
           style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value="https://example.com"
            viewBox={`0 0 256 256`}
          />
          </div>
          </div>
          <div className="col">
            <div className="googlePlay d-flex">
              <div className="playimg">
              <img src={googleplayimg} className='googleplay'></img>
              </div>
              <div className="playpra">
                <span>Get it on</span>
                <h6>Googl Play</h6>
              </div>
            </div>
            <div className="googlePlay d-flex">
              <div className="playimg">
              <img src={googleplayimg} className='googleplay'></img>
              </div>
              <div className="playpra d-flex flex-column">
                <span>Get it on</span>
                <h6>Googl Play</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="social-list mt-3">
           <ul>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
           </ul>
       </div>
      </div>
    </div>
  </div>
 </div>
 <div className="end-footer text-center">
    <span>© Copyright Rimele. All Rights Reserved</span>
  </div>
  </div>
  </>
}

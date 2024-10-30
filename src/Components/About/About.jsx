import React from 'react'
import sideimg from "../../Images/Side Image.png";
import sliderimg1 from "../../Images/Frame 890man.png";
import sliderimg2 from "../../Images/Frame 890women.png";
import sliderimg3 from "../../Images/Frame 890.png";
import sliderimg4 from "../../Images/work-7.jpg";
import sliderimg5 from "../../Images/hero.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore,faDollarSign, faShoppingBag,faMoneyBillWave} from '@fortawesome/free-solid-svg-icons';
import {faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './About.css'
import AboutInfo from '../AboutInfo/AboutInfo';
export default function About() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return<>
    <div className="pageabout">
    <p><span className='Home'>Home / </span><span>About</span></p>
    </div>
    <div className="container">
    <div className="about">
      <div className="container">
      <div className="sec1">
        <div className="row d-flex align-items-center gx-5">
          <div className="col-6">
            <div className="sec1-tit ">
              <h3>Our Story</h3>
              <p className='mt-5'style={{width:'97%'}}>Launced in 2015,Exclusive is South Asia,s Premier online shopping 
                makterplace with an active presense in Bangladesh.Supported
                by wide range to tailored marketing,data and service solutions,
                Exclusive has 10,500 sallers and 300 brands and serves 3
                millions customers across the region
              </p>
              <p className='secondpra'style={{width:'75%'}}>Exclusive has more than 1 Million products to offer,growing at a
                very fast.Exclusive offers a diverss assotment in categories
                ranging from consumer
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="sec1-img ms-4">
              <img src={sideimg} alt='sideimg'className=' sideimg'/>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="sec2">
        <div className="sec2boxs">
          <div className="row px-5 mx-4 gx-5">
            <div className="col">
              <div className="sec2box text-center">
                <div className="boxicon mt-4">
                 <FontAwesomeIcon icon={faStore} size="2x" color='white' className='sec2icon'/>
                </div>
                <div className="numbox mt-3">
                  <h3>10.5k</h3>
                </div>
                <div className="boxspan">
                  Sallers active our site
                </div>
              </div>
            </div>
            <div className="col">
              <div className="sec2boxdiff text-center pb-3"style={{backgroundColor: '#db4444',borderRadius:"3px"}}>
                <div className="boxicondiff ">
                <FontAwesomeIcon icon={faDollarSign} size='2x' color='black' className='sec2icondiff mt-4'/>
                </div>
                <div className="numboxdiff mt-3">
                  <h3 className=' text-white'>33k</h3>
                </div>
                <div className="boxspandiff text-white">
                 <span>Mopnthy Product Sale</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="sec2box text-center">
                <div className="boxicon mt-4">
                 <FontAwesomeIcon icon={faShoppingBag} size="2x" color='white' className='sec2icon'/>
                </div>
                <div className="numbox mt-3">
                  <h3>45.5k</h3>
                </div>
                <div className="boxspan">
                  Customer active in our site
                </div>
              </div>
            </div>
            <div className="col">
              <div className="sec2box text-center">
                <div className="boxicon mt-4">
                 <FontAwesomeIcon icon={faMoneyBillWave}  size="2x" color='white' className='sec2icon' />
                </div>
                <div className="numbox mt-3">
                  <h3>25k</h3>
                </div>
                <div className="boxspan">
                 Anual gross sale in our site
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec3">
        <div className="container ms-3">
        <div className="slider-container ms-5 px-1">
      <Slider {...settings}>
        <div>
          <img src={sliderimg1} alt='sliderimg1'></img>
          <div className="sliderpra">
            <h5>Tom Cruis</h5>
            <p>Founder & Chairman</p>
            
           <FontAwesomeIcon icon={faTwitter} className='sliderpraicon' />
           <FontAwesomeIcon icon={faInstagram} className='sliderpraicon ms-3' />
            <FontAwesomeIcon icon={faLinkedin}  className='sliderpraicon ms-3'/>
           
          </div>
        </div>
        <div>
          <img src={sliderimg2} alt='sliderimg2'></img>
          <div className="sliderpra">
            <h5>Emma Watson</h5>
            <p>Managing Director</p>
         
           <FontAwesomeIcon icon={faTwitter}  className='sliderpraicon'/>
          <FontAwesomeIcon icon={faInstagram} className='sliderpraicon ms-3'/>
           <FontAwesomeIcon icon={faLinkedin} className='sliderpraicon ms-3'/>
         
          </div>
        </div>
        <div>
        <img src={sliderimg3} alt='sliderimg3'></img>
        <div className="sliderpra">
            <h5>Will Smith</h5>
            <p>Product Designer</p>
          
           <FontAwesomeIcon icon={faTwitter} className='sliderpraicon'/>
            <FontAwesomeIcon icon={faInstagram} className='sliderpraicon ms-3'/>
           <FontAwesomeIcon icon={faLinkedin} className='sliderpraicon ms-3'/>
            
          </div>
        </div>
        <div>
        <img src={sliderimg4} alt='sliderimg4'></img>
        <div className="sliderpra">
            <h5>Tomas Eray</h5>
            <p>Managing Director</p>
          
           <FontAwesomeIcon icon={faTwitter} className='sliderpraicon' />
           <FontAwesomeIcon icon={faInstagram} className='sliderpraicon ms-3'/>
            <FontAwesomeIcon icon={faLinkedin} className='sliderpraicon ms-3'/>
          
          </div>
        </div>
        <div>
        <img src={sliderimg5} alt='sliderimg5'></img>
        <div className="sliderpra">
            <h5>Akgon Selim</h5>
            <p>Product Designer</p>
           
           <FontAwesomeIcon icon={faTwitter} className='sliderpraicon'/>
          <FontAwesomeIcon icon={faInstagram} className='sliderpraicon ms-3'/>
            <FontAwesomeIcon icon={faLinkedin} className='sliderpraicon ms-3'/>
           
          </div>
        </div>
      </Slider>
      </div>
        </div>
      </div> 
       <AboutInfo/>
    </div>
    </div>
  </>
}

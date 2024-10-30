import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {goToPrevious,goToNext}from '../Context/SliderUtils'
import './Categories.css';
import axios from 'axios';

export default function Categories() {
  const sliderRef = useRef(null); // This stores the slider reference
  const [categories, setCategories] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  async function getCategories() {
    try {
      let { data } = await axios.get("https://fakestoreapi.in/api/products/category");
      setCategories(data.categories);
      console.log(data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="categories">
      <hr></hr>
      <div className="homesec3title mt-5">
        <h6>Categories</h6>
      </div>
      <div className="homesec3sectit d-flex justify-content-between mt-4 align-items-center">
        <h3 className='mt-2'>Browse By Category</h3>
        <div className="slickbtns">
          <button className="control-btn prev-btn" onClick={() => goToPrevious(sliderRef)} style={{ marginRight: "11px" }}>
            <FontAwesomeIcon icon={faArrowLeft} color='black' style={{ fontSize: '20px' }} />
          </button>
          <button className="control-btn next-btn" onClick={() =>goToNext(sliderRef)}>
            <FontAwesomeIcon icon={faArrowRight} color='black' style={{ fontSize: '20px' }} />
          </button>
        </div>
      </div>
      <div className="carousel-container">
        <Slider ref={sliderRef} {...settings}>
          {categories.map((category, index) => (
            <div key={index} className='w-75 category text-center'>
              <FontAwesomeIcon icon={faDesktop} size='2x' />
              <h3 className='mt-3'>{category}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

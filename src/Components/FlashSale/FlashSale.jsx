import React, { useEffect, useState, useRef } from 'react';
import { goToPrevious, goToNext } from '../Context/SliderUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faHeart, faEye, faStar,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToWishlist, removeFromWishlist } from '../../Reducers/ReducerWishlist';
import {addToCart} from '../../Reducers/ReducerCart';
import axios from 'axios';
import './FlashSale.css';
import Slider from 'react-slick/lib/slider';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function FlashSale() {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);
  const [saleProducts, setSaleProducts] = useState([]);
  const wishlist = useSelector((state) => state.wishList);

  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  // Fetch products for the flash sale
  async function getSaleProducts() {
    try {
      const { data } = await axios.get("https://fakestoreapi.in/api/products");
      setSaleProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    getSaleProducts();
  }, []);

  // Countdown for the flash sale end time
  const saleDowntime = new Date("Nov 6, 2024 00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = saleDowntime - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [saleDowntime]);

  // Toggle product in the wishlist
  const handleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
      console.log(product)
    }
  };

  return (
    <div className="flassale">
      <div className="container">
        <div className="homesec3title">
          <h6>Today's</h6>
        </div>
        <div className="homesec3sectit d-flex justify-content-between mt-4 align-items-center">
          <div className="saletit d-flex align-items-center">
            <h3 className='mt-2'>Flash Sales</h3>
            <div className="date d-flex justify-content-center">
              <div className='ms-4'>
                <h6>Days</h6>
                <h4>{timeRemaining.days}</h4>
              </div>
              <div className='ms-4'><h6>Hours</h6>
                <h4 className=' d-flex justify-content-around'><div className='dotstime me-1'>:</div>{timeRemaining.hours}</h4>
              </div>
              <div className='ms-4'><h6>Minutes</h6>
                <h4 className=' d-flex justify-content-around'><div className='dotstime me-1'>:</div>{timeRemaining.minutes}</h4>
              </div>
              <div className='ms-4'><h6>Seconds</h6>
                <h4 className=' d-flex justify-content-around'><div className='dotstime me-1'>:</div>{timeRemaining.seconds}</h4>
              </div>
            </div>
          </div>
          <div className="slickbtns">
            <button className="control-btn prev-btn" onClick={() => goToPrevious(sliderRef)} style={{ marginRight: "11px" }}>
              <FontAwesomeIcon icon={faArrowLeft} color='black' style={{ fontSize: '20px' }} />
            </button>
            <button className="control-btn next-btn" onClick={() => goToNext(sliderRef)}>
              <FontAwesomeIcon icon={faArrowRight} color='black' style={{ fontSize: '20px' }} />
            </button>
          </div>
        </div>
        <div className="carousel-container">
          <Slider {...settings} ref={sliderRef}>
            {saleProducts.slice(35, 45).map((saleProduct, index) => (
              <div className="cardsale position-relative" key={index} style={{ width: "18rem" }}>
                <img height={200} src={saleProduct.image} className="card-img-top w-100 productimage" alt="productimage" />
                <div className="card-body">
                  <h5 className="card-text mt-4">{saleProduct.title.slice(0, 13)}</h5>
                  <p className="card-text productprice">${saleProduct.price} <span className='priceoffer' style={{ textDecoration: "line-through" }}>$1273</span></p>
                  <div className="producticon position-absolute">
                    <div className="loveicon" onClick={() => handleWishlist(saleProduct)} style={{ cursor: 'pointer' }}>
                      <FontAwesomeIcon icon={faHeart} color={wishlist.includes(saleProduct) ? 'red' : 'black'} />
                    </div>
                    <div className="eyeicon mt-2"><Link to={`/productdetails/${saleProduct.id}`}><FontAwesomeIcon icon={faEye} color='black' /></Link></div>
                  </div>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} style={{ color: "#ffad33" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "#ffad33", marginLeft: "3px" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "#ffad33", marginLeft: "3px" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "#ffad33", marginLeft: "3px" }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: "#bfbfbf", marginLeft: "3px" }} />
                    <span style={{ color: "#949494", fontSize: "14px", marginLeft: "4px", fontWeight: "500" }}>(88)</span>
                  </div>
                  <div className="salemark position-absolute">
                    <span>-30%</span>
                  </div>
                  <button className='addbtnhome position-absolute ' onClick={() => dispatch(addToCart({ ...saleProduct, quantity: 1 }))}><FontAwesomeIcon icon={faShoppingCart} size="1x" color='white'/><span>Add to cart</span></button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flashviewsbtn mt-5 d-flex justify-content-center">
          <button className='sec3viebtn mt-4' style={{ fontSize: "1rem" }}>View All Products</button>
        </div>
      </div>
    </div>
  );
}

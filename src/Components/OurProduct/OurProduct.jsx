import React, { useEffect, useState, useRef } from 'react';
import {goToPrevious,goToNext}from '../Context/SliderUtils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight ,faHeart, faEye,faStar,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Slider from "react-slick";
import { addToWishlist, removeFromWishlist } from '../../Reducers/ReducerWishlist';
import {addToCart} from '../../Reducers/ReducerCart';
import { useDispatch, useSelector } from 'react-redux';
import './OurProduct.css';
import { Link } from 'react-router-dom';
export default function OurProduct() {
    const sliderRef = useRef(null); 
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishList);
    const[ourProducts , setOurProduct] = useState([]);
    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 2,
        speed: 400,
        rows: 2,
        slidesPerRow: 2
      };

      const handleWishlist = (product) => {
        if (wishlist.some((item) => item.id === product.id)) {
          dispatch(removeFromWishlist(product));
        } else {
          dispatch(addToWishlist(product));
          console.log(product)
        }
      };
  async function getOurProducts(){
    try{
        const { data } = await axios.get("https://fakestoreapi.in/api/products");
        setOurProduct(data.products); 
    } catch (error){
        console.error('Error fetching products:', error);
    }

  }


  useEffect(()=>{
    getOurProducts()
  },[])




  return <>
   <div className="ourproduct">
       <div className="homesec3title mt-5">
           <h6 className='mt-3'>Our Products</h6>
       </div>
       <div className="homesec3sectit d-flex justify-content-between mt-4 align-items-center">
        <div className="saletit ">
        <h3 className='mt-2'>Explore Our Products</h3>
        </div>
        <div className="slickbtns">
             <button className="control-btn prev-btn" onClick={() => goToPrevious(sliderRef)} style={{ marginRight: "11px" }}>
             <FontAwesomeIcon icon={faArrowLeft} color='black' style={{ fontSize: '20px' }} />
            </button>
           <button className="control-btn next-btn" onClick={() =>goToNext(sliderRef)}>
              <FontAwesomeIcon icon={faArrowRight} color='black' style={{ fontSize: '20px' }} />
            </button>
        </div>
        </div>
        <div className="slider-container mt-5">
            <Slider {...settings} ref={sliderRef}>
               {ourProducts.slice(12,34).map((ourproduct,index)=>(
                 <div className="cardsale position-relative" key={index} style={{ width: "18rem" }}>
                 <img src={ourproduct.image} className="card-img-top w-100 productimage position-relative" alt="productimage" style={{height:"12rem"}} />
                 <div className="card-body">
                   <h5 className="card-text mt-1">{ourproduct.title.slice(0, 13)}</h5>
                   <div className='d-flex align-items-center'>
                   <div>
                   <p className="card-text productprice">${ourproduct.price} </p>
                   </div>
                   <div className="rating ">
                     <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"15px"}}/>
                     <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                     <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                     <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                     <FontAwesomeIcon icon={faStar} style={{color:"#bfbfbf",marginLeft:"3px"}}/>
                     <span style={{color:"#949494", fontSize:"14px", marginLeft:"12px",fontWeight:"500"}}>(58)</span>
                   </div>
                   </div>
                   <div className="producticon position-absolute">
                     <div className="loveicon"onClick={() => handleWishlist(ourproduct)}><FontAwesomeIcon icon={faHeart} color={wishlist.includes(ourproduct) ? 'red' : 'black'}/></div>
                     <div className="eyeicon mt-2"><Link to={`/productdetails/${ourproduct.id}`}><FontAwesomeIcon icon={faEye} color='black'/></Link></div>
                   </div>
                   <button className='addbtnhome position-absolute ' onClick={() => dispatch(addToCart({ ...ourproduct, quantity: 1 }))}><FontAwesomeIcon icon={faShoppingCart} size="1x" color='white'/><span>Add to cart</span></button>
                 </div>
               </div>
               ))}
            </Slider>
        </div>
        <div className="flashviewsbtn mt-5 d-flex justify-content-center">
        <button className='sec3viebtn mt-4' style={{fontSize:"1rem"}}>View All Products</button>
        </div>
   </div>
  
  
  </>
}

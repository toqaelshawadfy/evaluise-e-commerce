import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye,faStar,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import featuredimg1 from '../../Images/Frame 740.png';
import featuredimg2 from '../../Images/Frame 741(1).png';
import featuredimg3 from '../../Images/Frame 742 (1).png';
import featuredimg4 from '../../Images/Frame 743(1).png';
import fram600 from '../../Images/Frame 600.png';
import './Home.css';
import AboutInfo from '../AboutInfo/AboutInfo';
import Categories from '../Categories/Categories';
import FlashSale from '../FlashSale/FlashSale';
import OurProduct from '../OurProduct/OurProduct';
import {addToCart} from '../../Reducers/ReducerCart';
import { addToWishlist, removeFromWishlist } from '../../Reducers/ReducerWishlist';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeHeader from '../HomeHeader/HomeHeader';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishList);
  // Fetch products from the new API
  async function getProducts() {
    try {
      const { data } = await axios.get("https://fakestoreapi.in/api/products");
      setProducts(data.products); 
      console.log(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const handleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
      console.log(product)
    }
  };

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <>
      <div className="home mt-1">
        <div className="container mt-5">
          <HomeHeader/>
        <FlashSale/>
        <Categories/>
          <div className="productmonth mt-5">
          <hr></hr>
            <div className="homesec3title mt-5">
              <h6>This Month</h6>
            </div>
            <div className="homesec3sectit d-flex justify-content-between mt-4 align-items-center">
              <h3 className='mt-2'>Best Selling Products</h3>
              <button className='sec3viebtn mt-2'>View All</button>
            </div>
            <div className="row g-1 mt-5">
              {products.slice(4,8).map(product => (
                <div className="col-md-3" key={product.id}>
                  <div className="card position-relative" style={{ width: "18rem" }}>
                    <img height={200} src={product.image} className="card-img-top w-100 productimage position-relative" alt="productimage" />
                    <div className="card-body mt-4">
                      <h5 className="card-text mt-1">{product.title.slice(0, 13)}</h5>
                      <p className="card-text productprice">${product.price} <span className='priceoffer' style={{textDecoration:"line-through"}}>$573</span></p>
                      <div className="producticon position-absolute">
                        <div className="loveicon"onClick={() => handleWishlist(product)}>
                          <FontAwesomeIcon icon={faHeart} color={wishlist.includes(product) ? 'red' : 'black'} />
                        </div>
                        <div className="eyeicon mt-2">
                          <Link to={`/productdetails/${product.id}`}><FontAwesomeIcon icon={faEye}  color='black'/></Link>
                        </div>
                      </div>
                      <div className="rating">
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                     <span style={{color:"#949494", fontSize:"14px", marginLeft:"4px",fontWeight:"500"}}>(65)</span>
                      </div>
                      <button className='addbtnhome position-absolute ' onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}><FontAwesomeIcon icon={faShoppingCart} size="1x" color='white'/><span>Add to cart</span></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="frame d-flex justify-content-center">
            <hr></hr>
            <div className="container d-flex justify-content-center mt-4">
              <img src={fram600} alt='fram600 w-100' ></img>
            </div>
          </div>
          <OurProduct/>
          <div className="container mt-5">
          <div className="featured mt-5">
          <div className="homesec3title">
              <h6>Featured</h6>
          </div>
          <div className="homesec3sectit mt-4">
              <h3 className="mt-2">New Arrival</h3>
            </div>
            <div className="row mt-5 p-3">
              <div className="col-md-6">
                <img src={featuredimg1} alt='featuredimg1' className='w-100' style={{borderRadius:"3px"}}></img>
              </div>
              <div className="col-md-6">
                <img src={featuredimg2} className='w-100' style={{borderRadius:"3px"}}></img>
                <div className="row mt-4">
                  <div className="col-md-6 mt-2">
                    <img src={featuredimg3} className='w-100'></img>
                  </div>
                  <div className="col-md-6 mt-2">
                    <img src={featuredimg4} className='w-100'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <AboutInfo/>
        </div>
      </div>
    </>
  );
}

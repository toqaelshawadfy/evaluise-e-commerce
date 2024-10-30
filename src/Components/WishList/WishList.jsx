import React, { useEffect,useState } from 'react';
import { removeFromWishlist } from '../../Reducers/ReducerWishlist';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../../Reducers/ReducerCart';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faShoppingCart,faStar,faEye } from '@fortawesome/free-solid-svg-icons';
import './WishList.css';

export default function WishList() {
  const[allitems, setallitem]=useState([])
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishList || []); 

  async function getallProduct(){
    try {
        const { data } = await axios.get("https://fakestoreapi.in/api/products");
        setallitem(data.products); 
        console.log(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
  }
  useEffect(()=>{
    getallProduct()
   },[])


 
  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist({ id: productId }));
    console.log("delete")
  };

  return (
    <div className="wishlist">
      <div className="container mt-5">
        <div className="wishcounter d-flex justify-content-between">
          <h6>Wishlist ({wishlist.length})</h6>
          <button className='moovetobag'>Move All To Bag</button>
        </div>
        <div className="row ">
          {wishlist.length > 0 ? (
            wishlist.map((product, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card wishlist-item ">
                  <img height={200} src={product.image} alt={product.name} className="card-img-top product-img w-100" />
                  <div className="card-body">
                    <h5 className="card-title text-black mt-4">{product.title.slice(0, 13)}</h5>
                    <p className="card-text">${product.price}</p>
                  </div>
                  <div onClick={() => handleRemoveFromWishlist(product.id)} className='deletbtn position-absolute d-flex justify-content-center'>
                  <FontAwesomeIcon 
                      icon={faTrash} 
                       title="Delete" 
                        style={{ cursor: 'pointer', fontSize: '19px' }} 
                    />
                  </div>
                  <button className='addbtn position-absolute '><FontAwesomeIcon icon={faShoppingCart} size="1x" color='white'/><span>Add to cart</span></button>
                </div>
              </div>
            ))
          ) : (
            <p>Your wishlist is empty.</p>
          )}
        </div>
        <div className="relateditem">
          <div className=' d-flex justify-content-between'>
          <div className="homesec3title">
               <h6>Just For You</h6>
            </div>
            <button className='seeall'>See All</button>
          </div>
            <div className="row mt-5">
            {allitems.slice(25,29).map(item =>(
               <div className="col-md-3" key={item.id}>
                   <div className="card position-relative" style={{ width: "18rem" }}>
                    <img height={200} src={item.image} className="card-img-top w-100 productimage position-relative" alt="productimage" />
                    <div className="card-body mt-3">
                      <h5 className="card-text mt-1 text-black">{item.title.slice(0, 20)}</h5>
                      <p className="card-text productprice">${item.price} <span className='priceoffer' style={{textDecoration:"line-through"}}>$573</span></p>
                      <div className="producticon position-absolute">
                        <div className="eyeicon mt-2">
                          <Link to={`/productdetails/${item.id}`}><FontAwesomeIcon icon={faEye} color='black'/></Link>
                        </div>
                      </div>
                      <div className="rating mt-1">
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                     <span style={{color:"#949494", fontSize:"14px", marginLeft:"4px",fontWeight:"500"}}>(65)</span>
                      </div>
                      <button className='addbtnhome position-absolute ' onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}><FontAwesomeIcon icon={faShoppingCart} size="1x" color='white'/><span>Add to cart</span></button>
                    
                    </div>
                  </div>
               </div>
            ))}
            </div>
            </div>
      </div>
    </div>
  );
}

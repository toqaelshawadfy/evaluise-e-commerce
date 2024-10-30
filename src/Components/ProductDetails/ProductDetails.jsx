import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useParams,Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {addToCart} from '../../Reducers/ReducerCart';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../Reducers/ReducerWishlist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faStar,faTruck,faArrowLeft,faEye,faMinus,faPlus} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function ProductDetails() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishList);
   const[relateditems, setRelateditem]=useState([])
  // Correct the API URL
  async function getSingleProduct() {
    const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
    return  response.data
  }

  // Use the correct 'isLoading' state from React Query
  let { data, isLoading } = useQuery({
    queryKey: ['getSingleProduct', id],  // Pass the query key and the id
    queryFn: getSingleProduct,
  });
  async function getRelatedProduct(){
    try {
        const { data } = await axios.get("https://fakestoreapi.in/api/products");
        setRelateditem(data.products); 
        console.log(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
  }

  useEffect(()=>{
   getRelatedProduct()
  },[])

  if (isLoading) {
    return <div>Loading...</div>;
  }


  const handleWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
      console.log(product)
    }
  };

  return (
    <>
      <div className="ProductDetails">
        <div className="url mt-5">
          <p>
            <span className='Account'>Account <span className='ms-2'>/</span> </span>
            <span className='ms-1'>{data?.product.category} <span className='ms-2'>/</span></span>
            <span className='ms-1'>{data?.product.title}</span>
          </p>
        </div>
        <div className="container px-5 py-2 mt-5">
            <div className="row g-0 d-flex align-items-center">
                <div className="col-md-2">
                     <img src={data?.product.image} className='w-75' height={122}></img>
                     <img src={data?.product.image} className='w-75'height={120}></img>
                     <img src={data?.product.image} className='w-75'height={120}></img>
                     <img src={data?.product.image} className='w-75'height={120}></img>
                </div>
                <div className="col-md-6">
                <img src={data?.product.image} className='w-100'></img>
                </div>
                <div className="col-md-4">
                    <div className="name">
                        <h4>{data?.product.title.slice(0,20)}</h4>
                    </div>
                    <div className="rating d-flex align-items-center mt-3">
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                      <FontAwesomeIcon icon={faStar} style={{color:"#ffad33",marginLeft:"3px"}}/>
                     <span style={{color:"#949494", fontSize:"14px", marginLeft:"4px",fontWeight:"500"}}>(150 Reviews)
                         <span className='ms-4 text-black'>|</span> <span style={{color:"green"}}>in stock</span></span>
                    </div>
                    <div className="proproce mt-3">
                        <h5>${data?.product.price}</h5>
                    </div>
                    <div className="despro mt-4 mb-2">
                        <p>{data?.product.description.split(" ").splice(0,20).join(" ")}</p>
                    </div>
                    <hr></hr>
                    <div className="color">
                        <h4>Colors: </h4>
                    </div>
                    <div className="calcu d-flex justify-content-between align-items-center mt-4">
                        <div className="countbox">
                           <table style={{border:"1px solid gray"}}>
                            <tr>
                                <td style={{border:"1px solid gray",padding:"3px 3px"}}> 
                                    <button style={{backgroundColor:"transparent"}}>
                                       <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                </td>
                                <td style={{padding:"3px 32px"}}>
                                  <span>0</span>
                                </td>
                                <td style={{border:"1px solid gray",backgroundColor:"#db4444",padding:"3px 3px"}}>
                                <button style={{backgroundColor:"transparent"}}>
                                   <FontAwesomeIcon icon={faPlus} color='white'/>
                                </button>
                                </td>
                            </tr>
                           </table>
                        </div>
                        <div className="buybtn">
                            <button>Buy Now</button>
                        </div>
                        <div className="wishlisticon">
                            <FontAwesomeIcon icon={faHeart} style={{fontSize:"20px"}}/>
                        </div>
                    </div>
                    <div className="delivrybox d-flex flex-column justify-content-center">
                        <div className="firstarr d-flex align-items-center ms-1">
                         <FontAwesomeIcon icon={faTruck}  style={{fontSize:'20px'}} />
                         <div className="delpra">
                            <h6>Free Delivery</h6>
                            <span style={{textDecoration:"underline"}}>Enter Your postal code for Delivery Availibality </span>
                         </div>
                        </div>
                        <hr></hr>
                        <div className="secarr d-flex align-items-center ms-1">
                        <FontAwesomeIcon icon={faArrowLeft} style={{fontSize:'20px'}} />
                          <div className="delpra">
                            <h6>Return Delivery</h6>
                            <span>Free 30 Days Delivery Returns. <span style={{textDecoration:"underline"}}>Detailes</span></span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relateditem">
            <div className="homesec3title">
               <h6>Related Item</h6>
            </div>
            <div className="row mt-5">
            {relateditems.slice(45,49).map(item =>(
               <div className="col-md-3" key={item.id}>
                   <div className="card position-relative" style={{ width: "18rem" }}>
                    <img height={200} src={item.image} className="card-img-top w-100 productimage position-relative" alt="productimage" />
                    <div className="card-body">
                      <h5 className="card-text mt-1">{item.title.slice(0, 20)}</h5>
                      <p className="card-text productprice">${item.price} <span className='priceoffer' style={{textDecoration:"line-through"}}>$573</span></p>
                      <div className="producticon position-absolute">
                        <div className="loveicon"onClick={() => handleWishlist(item)} style={{ cursor: 'pointer' }}>
                          <FontAwesomeIcon icon={faHeart} color={wishlist.includes(item) ? 'red' : 'black'} />
                        </div>
                        <div className="eyeicon mt-2">
                          <Link to={`/productdetails/${item.id}`}><FontAwesomeIcon icon={faEye} /></Link>
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
                      <div className="addcartbtn position-absolute">
                        <button className='addbtn'onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}>Add To Cart</button>
                      </div>
                    </div>
                  </div>
               </div>
            ))}
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

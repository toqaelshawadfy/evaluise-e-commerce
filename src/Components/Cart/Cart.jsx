import React from 'react';
import {useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown,faTimes } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, selectCartSubtotal } from '../../Reducers/ReducerCart'; 

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const subtotal = useSelector(selectCartSubtotal);
   const navigate = useNavigate()
  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(addToCart({ ...item, quantity: -1 }));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };
   
   function gotoHome(){
      navigate("/")
   }
   function prosstocheck(){
    navigate("/checkout")
   }
  return (
    <>
      <div className="cart">
        <div className="contacturl mt-5">
          <p>
            <span className='Home'>Home / </span>
            <span>Cart</span>
          </p>
        </div>
        <div className="cartcontainer mt-5">
             <div className="table">
              <div className="row firston">
                <div className="col-md-3 ">
                  Product
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                  price
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                  Quantity
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                  Subtotal
                </div>
              </div>
              {cartItems.map(item => (
                <div className="row d-flex align-items-center secondton mt-3 " key={item.id}>
                  <div className="col-md-3">
                    <div className="div d-flex align-items-center position-relative">
                      <img src={item.image} className='imgcart '/>
                        <span>{item.title.slice(0, 13)}</span>
                        <button className="exit-button position-absolute"onClick={() => dispatch(removeFromCart(item.id))} >
                          <FontAwesomeIcon icon={faTimes} color='white' /> 
                       </button>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center">
                    ${item.price}
                  </div>
                  <div className="col-md-3 d-flex justify-content-center">
                    <div className="boxquantity d-flex align-items-center">
                      0{item.quantity}
                      <div className="arrows d-flex flex-column">
                        <button onClick={() => handleIncreaseQuantity(item)}>
                          <FontAwesomeIcon icon={faArrowUp}  style={{fontSize:"13px"}}/>
                        </button>
                        <button onClick={() => handleDecreaseQuantity(item)}>
                          <FontAwesomeIcon icon={faArrowDown} style={{fontSize:"13px"}} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
             </div>

          <div className="cartbtns d-flex justify-content-between">
            <button onClick={()=>gotoHome()}>Return To Shop</button>
            <button>Update Cart</button>
          </div>
          <div className='mt-5 d-flex align-items-baseline justify-content-between'>
            <div className="coupon d-flex align-items-center justify-content-between">
              <input type="text" className="form-control" id="name" placeholder=" Coupon Code" style={{ padding: "11px 60px 11px 10px" }} />
              <button className='couponbtn ms-3'>ApplyCoupon</button>
            </div>
            <div className="cartTotal ">
              <h4>Cart Total</h4>
              <div className='d-flex align-items-center justify-content-between mt-3'>
                <h5>Subtotal:</h5>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <hr />
              <div className='d-flex align-items-center justify-content-between'>
                <h5>Shipping</h5>
                <span>Free</span>
              </div>
              <hr />
              <div className='d-flex align-items-center justify-content-between'>
                <h5>Total:</h5>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className='d-block m-auto'onClick={()=>prosstocheck()}>Process to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

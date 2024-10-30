import React ,{useState}from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal, selectCartSubtotal } from '../../Reducers/ReducerCart'
import './Checkout.css';
export default function Checkout() {
  const items = useSelector(state => state.cart.items);
  const subtotal = useSelector(selectCartSubtotal);
  const total = useSelector(selectCartTotal);
  const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

  return <>
    <div className="checkout pb-">
    <div className="contacturl mt-5" >
         <p ><span className='Home'>Account / &nbsp;&nbsp;My Account&nbsp;&nbsp;/&nbsp;&nbsp;Product&nbsp;&nbsp;/&nbsp;&nbsp;View Cart &nbsp;&nbsp;/</span><span >&nbsp;&nbsp;CheckOut</span></p>
    </div>
     <div className="container mt-5 pb-5">
      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <div className="checktit">
           <h3>Billing Details</h3>
          </div>
          <form className=' d-flex flex-column mt-3 w-75'>
            <div className=' d-flex flex-column mt-3'>
            <label>First Name</label>
            <input className='mt-2'/>
            </div>
           <div className=' d-flex flex-column mt-3'>
           <label>Company Name</label>
           <input className='mt-2'/>
           </div>
            <div className=' d-flex flex-column mt-3'>
            <label>Street Address</label>
            <input className='mt-2'/>
            </div>
            <div className=' d-flex flex-column mt-3'>
            <label>Apartment,floor,etc(optional)</label>
            <input className='mt-2'/>
            </div>
           <div className=' d-flex flex-column mt-3'>
           <label>Town/City</label>
           <input className='mt-2'/>
           </div>
           <div className=' d-flex flex-column mt-3'>
           <label>Phone NUmber</label>
           <input className='mt-2'/>
           </div>
            <div className=' d-flex flex-column mt-3'>
            <label>Email Address</label>
            <input className='mt-2' />
            </div>
          </form>
        </div>
        <div className="col-md-6">
               <div className=' w-75'>
               {items.map(item => (
            <div className="checkproduct d-flex align-items-center justify-content-between mt-3" key={item.id}>
              <div className=' d-flex align-items-center'>
                <img src={item.image} className='imgcheck'/>
                <span>{item.title.slice(0, 13)}</span>
              </div>
              <div> ${item.price}</div>
            </div>
        ))}
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
                <span>${total.toFixed(2)}</span>
              </div>
              </div>
              <div className="checksbox d-flex flex-column mt-3">
              <label className="circular-checkbox" >
            <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
                className="checkbox-input"
            />
            <span className="checkbox-indicator"></span>
            &nbsp;&nbsp;&nbsp; Bank
        </label>
        <label className="circular-checkbox mb-2">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
                className="checkbox-input"
            />
            <span className="checkbox-indicator"></span>
            &nbsp;&nbsp;&nbsp;Cash on delivery
        </label>
              </div>
        <div className="coupon d-flex align-items-center mt-3">
              <input type="text" className="inputcopuncheck w-50" id="name" placeholder=" Coupon Code" />
              <button className='couponbtn ms-3'>ApplyCoupon</button>
          </div>
          <button className='place'>Place Order</button>
        </div>
      </div>
     </div>
    </div>
  </>
}

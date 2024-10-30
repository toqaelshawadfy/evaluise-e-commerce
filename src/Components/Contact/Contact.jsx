import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { submitinquiries,setError,setloading,clearContactState } from '../../Reducers/ReduxContact';
import {useDispatch,useSelector} from 'react-redux';
import succesanimation from '../../animation/mtCB945B2w.json';
import '@lottiefiles/react-lottie-player';
import Lotti from 'lottie-react';
import './Contact.css'
import { useFormik } from 'formik';
export default function Contact() {
  const dispatch =useDispatch();
  const status = useSelector((state) => state.contact.status);
  function submitContact(values,{ resetForm }){
    console.log(values)
    dispatch(setloading('loading'))
    dispatch(submitinquiries(values))
    setTimeout(() => {
      dispatch(setloading('succeeded'));
    }, 500);
    resetForm();
  }
  useEffect(() => {
    if (status === 'succeeded') {
      setTimeout(() => dispatch(clearContactState()), 6000); // Reset state after success animation
    }
  }, [status, dispatch]);
  
  let formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      phone:'',
      message:''
    },
    onSubmit:submitContact
  })



  return <>
    <div className="contact">
       <div className="contacturl mt-5" >
         <p ><span className='Home'>Home / </span><span >Contact</span></p>
        </div>
        
         <div className="row px-2 contactcontainer">
          <div className="col-md-3 infocontact ms-4">
              <div className="top mb-4">
                <div className=' d-flex align-items-center'>
                <FontAwesomeIcon icon={faMobileAlt} className='icon' color='white' />
                <h5 className='ms-3'>Call To Us</h5>
                </div>
                <div className='mt-4'>
                  <p>We are available 24/7, 7 days a week</p>
                  <p>phone: +8801611112222</p>
                </div>
              </div>
              <hr></hr>
              <div className="bottom mt-4">
                <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='icon' color='white'/>
                <h5  className='ms-3'>Write To Us</h5>
                </div>
                <div className='mt-4'>
                  <p>Find Out our form and we will contact <br/>you within 24 hours.</p>
                  <p>Email: customer@eclusive.com</p>
                  <p>Email:support@exclusive.com</p>
                </div>
              </div>
          </div>
          <div className="col-md-8 inputcontact ms-5 px-4" >
               <form className='mt-3' onSubmit={formik.handleSubmit}>
                <div className="row d-flex align-items-center">
                 <div className="col">
                 <input type="text" class="form-control" id="name" placeholder=" Your Name" style={{padding:"11px 0px 11px 10px"}}
                 name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                 </div>
                 <div className="col">
                 <input type="email" class="form-control" id="email" placeholder="Your Email" style={{padding:"11px 0px 11px 10px"}}name='email'
                 value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                 </div>
                 <div className="col">
                 <input type="number" class="form-control" id="phone" placeholder="Your Phone" style={{padding:"11px 0px 11px 10px"}}
                 name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                 </div>
                </div>
                <div style={{marginTop:"1.8rem"}}>
                  <textarea  className="form-control mt-3" id="exampleFormControlTextarea1" rows="8" placeholder='Your Message'
                 name="message" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
                </div>
                <button className='contbtn d-block ms-auto' disabled={status === 'loading'}>
                {status === 'loading' ? 'Submitting...' : 'Send Message'}
                </button>
                {status === 'succeeded' ?(
                <div className=' d-flex'>
                    <Lotti loop={false}   animationData={succesanimation} style={{height:55}}/>
                    <h4 className='submtext mt-3'> Thanks for Joining!</h4>
                </div>):("")}
               </form>
          </div>
        
        </div>
    </div>
  </>
}

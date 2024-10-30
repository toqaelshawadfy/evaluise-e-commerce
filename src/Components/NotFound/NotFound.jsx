import React from 'react'
import './NotFound.css';
export default function NotFound() {
  return <>
  <div className="notfoundpage">
    <p><span className='Home'>Home / </span><span>404 Error</span></p>
  </div>
 <div className="container text-center not-found ">
  <h1>404 Not Found</h1>
  <p className='mt-3'>Your visted page not found.You may go home page </p>
  <button className='backbtn'>Back to home page</button>
 </div>
  </>
}

import React from 'react'
import TopBlackTape from "../TopBlackTape/TopBlackTape";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return <>
     <TopBlackTape/>
     <Navbar/>
     <div className="container">
      <Outlet/>
     </div>
     <Footer/>
  
  </>
}

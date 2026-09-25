import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from './../Components/Footer/Footer';


export default function Layout() {
  return (
    <div>

     <Navbar/>

     <div className=" pt-15">
         <Outlet/>
     </div>

     

      <Footer/>
    </div>
  )
}

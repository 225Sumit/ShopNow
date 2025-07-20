import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navbar1 from './components/Navbar1'
import ContactusPage from './pages/ContactusPage'

import TestimonialPage from './pages/TestimonialPage'
import FeaturesPage from './pages/FeaturesPage'
import ShopPage from './pages/ShopPage'
import ErrorPage from './pages/ErrorPage'
import AdminHome from './pages/admin/AdminHome'
import MaincatagryAdminPage from './pages/admin/maincategory/MaincatagryAdminPage'
import AdminCreateMaincatagry from './pages/admin/maincategory/AdminCreateMaincatagry'



export default function App() {
  return (
    <>
     <BrowserRouter>
  
        <Navbar1/>
        <Routes >
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/features" element={<FeaturesPage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/contact" element={<ContactusPage/>}/>
        <Route path="/testimoial" element={<TestimonialPage/>}/>
        <Route path="/admin" element={<AdminHome/>}/>
        <Route path="/admin/maincategory" element={<MaincatagryAdminPage/>}/>
        <Route path="/admin/maincategory/create" element={<AdminCreateMaincatagry/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
      
        <Footer/>
    </BrowserRouter>
    </>
  )
}

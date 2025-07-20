import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import HeroSection from '../../components/HeroSection'
import Profile from '../../components/admin/Profile'

export default function AdminHome() {
  return (
    <>
    <HeroSection title="Admin Page"/>
   <div className="container-fluid py-5 my-5">
     <div className="row ">
        <div className="col-md-3">
            <AdminSidebar/>
        </div>
        <div className="col-md-9">
            <Profile title="Admin"/>
        </div>
    </div>
   </div>
    
    </>
  )
}

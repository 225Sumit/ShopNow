import React from 'react'
import AdminSidebar from '../../../components/admin/AdminSidebar'
import HeroSection from '../../../components/HeroSection'
import Profile from '../../../components/admin/Profile'
import { Link } from 'react-router-dom'

export default function MaincatagryAdminPage() {
  return (
    <>
    <HeroSection title="Maincategory"/>
   <div className="container-fluid py-5 my-5">
     <div className="row ">
        <div className="col-md-3">
            <AdminSidebar/>
        </div>
        <div className="col-md-9">
            <h5 className='bg-primary text-light text-center p-2 fs-3'>Maincategory<Link to="/admin/maincategory/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
        </div>
    </div>
   </div>
    
    </>
  )
}

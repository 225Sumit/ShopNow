import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
     <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
            <div className="container pt-5 pb-4">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <a href="index.html">
                            <h1 className="text-white fw-bold d-block">Shop<span className="text-secondary">Now</span> </h1>
                        </a>
                        <p className="mt-4 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
                        <div className="d-flex hightech-link">
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary"></i></a>
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary"></i></a>
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary"></i></a>
                            <a href="" className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="h3 text-secondary">Quick link</h3>
                        <div className="mt-4 d-flex flex-column short-link">
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>About us</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact us</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Our Services</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Our Projects</a>
                            <a href="" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Latest Blog</a>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                      <h3 className="h3 text-secondary">Contact Us</h3>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                            <Link to="mailto:225sumitgupta@gmail.com" target='_blank' rel='noreferror'  className="pb-3 text-light border-bottom border-primary"><i className=" fas fa-envelope  text-secondary me-2"></i> 225sumitgupta@gmail.com</Link>
                            <Link to="tel:+917084876472" target='_blank' rel='noreferror' className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-secondary me-2"></i> +91 7084876472</Link>
                            <Link href="#" className="py-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-secondary me-2"></i> Kanpur,UP</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h3 className="h3 text-secondary mb-4">Newsletter</h3>
                      <h5 className='text-light'> Suscribe Our Newsletter To Get Letest Update </h5>
                        <div className="text-white mt-4 d-flex flex-column ">
                           <form action="">
                            <input type="email"  className='form-control mb-3' placeholder='Enter your Mail id'/>
                            <button type="button" className='btn btn-primary w-100'>Submit</button>
                           </form>
                                       </div>
                    </div>
                </div>
                <hr className="text-light mt-5 mb-4"/>
                <div className="row">
                    <div className="col-md-12 text-center ">
                        <span className="text-light"><Link to="" className="text-secondary"><i className="fas fa-copyright text-secondary me-2 text-center"></i>ShopNow</Link>, All right reserved.</span>
                    </div>
                   
                </div>
            </div>
        </div>
      
    </>
  )
}

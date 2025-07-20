import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <>
      <div className="container-fluid bg-dark py-2 d-none d-md-flex">
            <div className="container">
                <div className="d-flex justify-content-between topbar">
                    <div className="top-info">
                        
                        <small className="me-3 text-white-50"><Link to="mailto:225sumitgupta@gmail.com" target='_blank' rel='noreferror' className='text-light'><i className="fas fa-envelope me-2 text-secondary"></i>225sumitgupta@gmail.com</Link></small>
                        <small className="me-3 text-white-50"><Link to="tel:+917084876472" target='_blank' rel='noreferror' className='text-light'><i className="fas fa-phone me-2 text-secondary"></i>708487647</Link></small>
                        <small className="me-3 text-white-50"><Link to="https://wa.me/7084876472" target='_blank' rel='noreferror' className='text-light'><i className="fa fa-whatsapp fs-5 me-2 text-secondary"></i>708487647</Link></small>
                    </div>
                    <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your Business</small></div>
                    <div className="top-link">
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'

export default function Navbar1() {
  return (
   <>
   <Topbar/>
    <div className="container-fluid bg-primary sticky-top ">
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-0">
                    <Link to="/" className="navbar-brand">
                        <h1 className="text-white fw-bold d-block">Shop<span className="text-secondary">Now</span> </h1>
                    </Link>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                        <div className="navbar-nav ms-auto mx-xl-auto p-0">
                            <Link to="/" className="nav-item nav-link active text-secondary">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/shop" className="nav-item nav-link">Shop</Link>
                            <Link to="/features" className="nav-item nav-link">Features</Link>
                            <Link to="/testimoial" className="nav-item nav-link">Testimoial</Link>
                            <Link to="/admin" className="nav-item nav-link">Admin</Link>
                            <div className="nav-item dropdown">
                                <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu rounded">
                                    <Link to="/blog" className="dropdown-item">Our Blog</Link>
                                    <Link to="/team" className="dropdown-item">Our Team</Link>
                                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                    <Link to="*" className="dropdown-item">404 Page</Link>
                                </div>
                            </div>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shirink-0">
                        <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                            <Link to="/" className="position-relative animated tada infinite">
                                <i className="fas fa-phone-alt text-white fa-2x"></i>
                                <div className="position-absolute" style={{top: "-7px", left: "20px"}}>
                                    <span><i className="fas fa-comment-dots text-secondary"></i></span>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex flex-column pe-4 border-end">
                            <span className="text-white-50">Have any questions?</span>
                            <span className="text-light">Call: <Link to="tel:+917084876472" target='_blank' rel='noreferror' className='text-light'>7084876472</Link> </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center ms-4 ">
                            <Link to="/"><i className="bi bi-search text-white fa-2x"></i> </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
   </>
  )
}

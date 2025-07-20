import React from 'react'

export default function About() {
  return (
    <>
     <div className="container-fluid py-5 my-5">
            <div className="container pt-5">
                <div className="row g-5">
                    <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                        <div className="h-100 position-relative">
                            <img src="img/about-1.jpg" className="img-fluid w-75 rounded" alt="" style={{marginBottom: "25%"}}/>
                            <div className="position-absolute w-75" style={{top: "25%", left: "25%"}}>
                                <img src="img/about-2.jpg" className="img-fluid w-100 rounded" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                        <h5 className="text-primary">About Us</h5>
                        <h1 className="mb-4">About HighTech Agency And It's Innovative IT Solutions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
                        <p className="mb-4">Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
                        <a href="" className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

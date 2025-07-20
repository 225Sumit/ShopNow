import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { EffectCoverflow,EffectCards  } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';


export default function Testimonial() {
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 1000 ? 1 : 3);
    const [slidesType, setSlidesType] = useState(window.innerWidth < 1000 ? "cards" : "coverflow");

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth < 1000 ? 1 : 3);
            setSlidesType(window.innerWidth < 1000 ? "cards" : "coverflow");
        };

        // Set initial value and attach listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className="container-fluid testimonial py-5 my-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "600px" }}>
                        <h5 className="text-primary">Our Testimonial</h5>
                        <h1>Our Client Saying!</h1>
                    </div>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={slidesPerView}
                        effect={slidesType}
                        loop={true}
                        navigation={true}
                        
                        grabCursor={true}
                        centeredSlides={true}
                       
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination,EffectCoverflow,EffectCards]}
                    >
                        <div className=" testimonial-carousel wow fadeIn" data-wow-delay=".5s">
                            <SwiperSlide> <div className="testimonial-item border p-4">
                                <div className="d-flex align-items-center">
                                    <div className="">
                                        <img src="img/testimonial-1.jpg" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <h4 className="text-secondary">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-3">
                                    <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item border p-4">
                                    <div className=" d-flex align-items-center">
                                        <div className="">
                                            <img src="img/testimonial-2.jpg" alt="" />
                                        </div>
                                        <div className="ms-4">
                                            <h4 className="text-secondary">Client Name</h4>
                                            <p className="m-0 pb-3">Profession</p>
                                            <div className="d-flex pe-5">
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top mt-4 pt-3">
                                        <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                    </div>
                                </div>
                            </SwiperSlide> <SwiperSlide>
                                <div className="testimonial-item border p-4">
                                    <div className=" d-flex align-items-center">
                                        <div className="">
                                            <img src="img/testimonial-3.jpg" alt="" />
                                        </div>
                                        <div className="ms-4">
                                            <h4 className="text-secondary">Client Name</h4>
                                            <p className="m-0 pb-3">Profession</p>
                                            <div className="d-flex pe-5">
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top mt-4 pt-3">
                                        <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                    </div>
                                </div>
                            </SwiperSlide> <SwiperSlide>
                                <div className="testimonial-item border p-4">
                                    <div className=" d-flex align-items-center">
                                        <div className="">
                                            <img src="img/testimonial-4.jpg" alt="" />
                                        </div>
                                        <div className="ms-4">
                                            <h4 className="text-secondary">Client Name</h4>
                                            <p className="m-0 pb-3">Profession</p>
                                            <div className="d-flex pe-5">
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                                <i className="fas fa-star me-1 text-primary"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top mt-4 pt-3">
                                        <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div >
            </div >

        </>
    )
}

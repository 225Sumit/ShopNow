import React from 'react'
import Carousel from '../components/Carousel'
import Fact from '../components/Fact'
import About from '../components/About'
import Features from '../components/Features'
import Product from '../components/Product'
import ProductSlider from '../components/ProductSlider'

import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
    <Carousel/>
    <Fact/>
    <About/>
    <Features/>
    <Product/>
    <ProductSlider/>
    <Testimonial/>
    <Contact/>
    </>
  )
}

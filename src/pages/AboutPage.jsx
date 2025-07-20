import React from 'react'
import About from '../components/About'

import HeroSection from '../components/HeroSection'
import Fact from '../components/Fact'
import Testimonial from '../components/Testimonial'

export default function AboutPage() {
  return (
    <>
   <HeroSection  title="About Us"/>
   <Fact/>
   <About/>
   <Testimonial/>
    </>
  )
}

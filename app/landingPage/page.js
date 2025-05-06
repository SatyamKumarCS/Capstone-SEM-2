"use client"
import React from 'react'
import HeroSection from "./heroSection"
import Mentor from "./mentor"
import MarketPlace from './marketPlace'
import MasterHub from './masterHub'
import FAQ from "./faq"
import Footer from '@/components/footer'

const page = () => {
  return (
    <div>
        <HeroSection/>
        <Mentor/>
        <MarketPlace/>
        <MasterHub/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default page
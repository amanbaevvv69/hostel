import React from 'react'
import DestinationHome from '../HomeSection/Destina/DestinationHome'
import Dowland from '../HomeSection/Dowland/Dowland'
import Gallery from '../HomeSection/Gallery/Gallery'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import MostPopular from '../HomeSection/Popular/MostPopular'
import Works from '../HomeSection/Work/Works'

const Home = () => {
  return (
    <div>
        <Hero/>
        <HomeAbout/>
        <MostPopular/>
        <DestinationHome/>
        <Dowland/>
        <Works/>
        <Gallery/>
    </div>
  )
}

export default Home
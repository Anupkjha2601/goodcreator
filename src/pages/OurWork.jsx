import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

import WorkHero from '../components/WorkHero'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import GoToTopButton from '../components/Gototop'
import WorkAreas from '../components/WorkAreas'
import VideoScroll from '../components/VideoScroll'

const OurWork = () => {
  
  return (
    <>
      <Navbar mode='dark'/>
      <GoToTopButton/>
      <WorkHero/>
      <VideoScroll/>
<WorkAreas/>
      {/* <Gallery/> */}
      <Footer mode='dark' next='Solutions'/>
      {/* <Camera3d/> */}
    </>
  )
}

export default OurWork

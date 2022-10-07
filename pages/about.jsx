import React from 'react'
import Banner from '../component/Banner';
import End from '../component/End';
// import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import Process from '../component/Process';

function About() {
  return (
    <>
    <Navbar active={'About'}/>
    <Banner/>
    <Process/>
    <End/>
    {/* <Footer/> */}
    </>
  )
}

export default About;
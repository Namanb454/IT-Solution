import React from 'react'
import Navbar from '../components/Navbar'
// import Typewriter from 'typewriter-effect';
import Main from '../components/Main';
import About from './About';
import Services from './Services';
import Features from './Features';
// import GetInTouch from './GetInTouch';
import Footer from '../components/Footer';
import ScrollButton from '../components/ScrollButton';
import { Header2 } from '../components/Header2';
import { Header } from '../components/Header';


function Home() {

  return (
    <div>

      <div className=''>
        <Main />
        {/* <Header2 /> */}
      </div>

      <div id='about'>
        <About />
      </div>
      <div className="overflow-y-scroll">
        {/* Your content here */}
        <ScrollButton />
      </div>
      <div id='services'>
        <Services />
      </div>

      <div id='features'>
        <Features />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home

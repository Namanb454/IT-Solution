import React from 'react'
import Navbar from '../components/Navbar'
// import Typewriter from 'typewriter-effect';
import Main from '../components/Main';
import About from './About';
import Services from './Services';
import Features from './Features';
import Footer from '../components/Footer';


function Home() {

  return (
    <div>
      <div className='w-full fixed top-0 z-10 bg-tranparent text-white text-center'>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>

      <div id='about'>
        <About />
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

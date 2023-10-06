import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import Navbar from '../components/Navbar'

import { about } from '../content'
import { Header } from './Header';

function Main() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='bg-black'>
      <div className='lg:pb-0 pb-10'>
        
        <div className=" w-full lg:h-screen h-[70vh] overflow-hidden bg-cover"
          style={{
            backgroundImage: 'url(bg-video3.gif'
          }}>
          <div className='lg:w-full w-full fixed text-white text-center'>
            <Navbar />
          </div>

          <section class="text-white body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              {/* Mobile view image  */}
              <div class="lg:max-w-0 lg:w-0 md:w-0 w-full">
                <img src="home2.png" alt="Image" className='w-full h-auto transition-transform' />
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h2 className='lg:text-4xl text-lg font-bold lg:text-left text-center lg:mx-20 mx-5  md:mb-10 tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-violet-500 via-cyan-200 to-white' id='signupHeading' >
                  Hey! I'm a
                  <div className='lg:w-[50vw] lg:text-5xl text-lg font-extrabold lg:mx-0 mx-auto my-2 text-white' id='signupsubHeading'>
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: [
                          'Freelancer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Data Analyst', 'Badminton Player', 'Chess Player'
                        ],
                      }} />
                  </div>
                </h2>
                <div class="flex w-full md:justify-start justify-center items-end">
                  <h3 className='text-gray-300 lg:text-base text-sm lg:mx-20 lg:text-justify text-center tracking-wider'>Web development: Where creativity meets code, and innovation becomes interactive. </h3>
                </div>
              </div>

              {/* Desktop */}
              <div class="lg:max-w-xl lg:w-full md:w-1/2 w-0">
                <img src="home2.png" alt="Image" className='w-full h-full transition-transform' />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Main

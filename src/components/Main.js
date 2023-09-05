import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import Navbar from '../components/Navbar'
import { about } from '../content'

function Main() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='bg-black'>
      {/* <div className='lg:w-full w-full fixed top-0 z-10 text-white text-center'>
        <Navbar />
      </div> */}
      <div className='lg:pb-0 pb-10'>
        <div className="relative w-full lg:h-screen h-[70vh] overflow-hidden">
          <img className='lg:relative lg:w-full w-0' src='bg-video3.gif' alt='img' />
          <div className='lg:w-full w-full lg:absolute fixed lg:top-0 z-10 text-white text-center'>
            <Navbar />
          </div>
          <div className='lg:w-auto w-full lg:my-0 my-[30%] lg:absolute lg:top-[53%] lg:left-[32%] transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 text-white text-center'>
            <h2 className='lg:text-4xl text-lg font-bold text-center lg:mx-0 mx-5  md:mb-10 ' id='signupHeading' >
              Your Gateway to Seamless Solutions
              <div className='w-fit font-extrabold lg:mx-0 mx-auto text-[#ec634b]' id='signupsubHeading'>

                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      'Website Development', 'App Development', 'Software Tools', 'Graphic Design', 'Content Writing', 'SEO Services', 'Data Analysis', 'IT Consultancy'
                    ],
                  }} />
              </div>
            </h2>
            <div className='lg:hidden w-[100%] my-2 text-white text-center  '>
              <img src="home2.png" alt="Image" className='w-full hover:animate-pulse h-auto transition-transform' />
            </div>
            {/* Mobile  */}
            <h3 className='lg:hidden w-full text-white text-base px-5 lg:text-justify text-center'>We breathe life into ideas, crafting and creating with excellence. Our mission: design, develop, deliver.</h3>
          </div>



          {/* Dekstop  */}
          <div className=''>
            {/* <h3 className='lg:w-[40%] w-full lg:absolute lg:top-[65%] top-[90%] lg:left-[28%] left-[50%] transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 text-white text-base px-3 lg:text-justify text-center'>We Design. We Develop. We Deliver. </h3> */}

            <h3 className='lg:w-[40%] w-full lg:absolute lg:top-[71%] top-[90%] lg:left-[28%] left-[50%] transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 text-white text-base px-3 lg:text-justify text-center'>We breathe life into ideas, crafting and creating with excellence. Our mission: design, develop, deliver. </h3>
          </div>

          <div className='lg:w-[50%] w-0 lg:absolute lg:top-[53%] lg:left-[75%] transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 text-white text-center  '>
            <img src="home2.png" alt="Image" className='w-full hover:animate-pulse h-auto transition-transform' />
          </div>
        </div>
      </div>















    </div>
  )
}

export default Main

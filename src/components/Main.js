import React from 'react'
import Typewriter from 'typewriter-effect';


function Main() {

  return (
    <div>

      <div className="relative w-full h-screen overflow-hidden">
        <img className='w-full' src='bg-video3.gif' alt='img' />
        <div className='lg:w-auto w-full absolute lg:top-[53%] top-[14%] lg:left-[32%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center'>
          <h2 className='lg:text-4xl text-lg font-bold text-center lg:mx-0 mx-5  md:mb-10 ' id='signupHeading' >
            Providing The Best IT Solution For
            <div className='w-fit font-extrabold lg:mx-5 mx-auto text-[#ec634b]' id='signupsubHeading'>

              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    'Website Development', 'App Development', 'Software Tools', 'Graphic Design', 'Content Writing', 'SEO Services', 'Data Analysis', 'IT Cosultancy'
                  ],
                }} />
            </div>
          </h2>
        </div>

        <h3 className='lg:w-[40%] w-full absolute lg:top-[75%] top-[70%] lg:left-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-base px-5 lg:text-justify text-center'>Empowering Your Business with Reliable IT Solutions for Uninterrupted Growth and Success. </h3>
        <div className='lg:w-[50%] w-[100%] absolute lg:top-[53%] lg:left-[75%] left-[50%] top-[45%] transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center  '>
          <img src="home2.png" alt="Image" className={'w-full hover:animate-pulse h-auto transition-transform'} />
        </div>
      </div>



    </div>
  )
}

export default Main

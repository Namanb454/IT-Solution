import React from 'react'
import Typewriter from 'typewriter-effect';
import Navbar from '../components/Navbar'
import { Header } from './Header';

function Main() {


  return (
    <div className='bg-black'>
      <div className='lg:pb-0 pb-10 overflow-hidden relative'>
        <Header />
        <div className=" w-full lg:h-screen h-[70vh] overflow-hidden bg-cover"
          style={{
            backgroundImage: 'url(bg-video3.gif'
          }}>
          <div className='lg:w-full w-full fixed text-white text-center z-10'>
            <Navbar />
          </div>

          <section class="text-white body-font">
            <div class=" w-full mx-auto px-10 my-32 md:flex-row flex flex-col items-center">

              {/* <div className="mockup-code w-full bg-opacity-50 items-start mr-auto">
                <pre data-prefix="$"><code>Hello World</code></pre>
              </div> */}
              <div class="lg:flex-grow flex md:w-1/3 mb-16 md:mb-0 items-center text-center">

                <div className='w-1/2 flex-grow'>
                  <h2 className='w-full lg:text-2xl text-lg font-bold text-left lg:mx-0 mx-5 py-2 md:mb-10 tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-violet-500 via-cyan-200 to-white' id='signupHeading' >
                    Hey<span className='text-5xl text-white'> Naman </span>this side
                    {/* <div className='flex text-5xl items-center'> */}
                    <br />
                    I'm a &nbsp;

                    <div className='lg:w-full lg:text-5xl text-lg font-extrabold lg:mx-0 mx-auto py-2 text-white' id='signupsubHeading'>
                      <Typewriter

                        options={{
                          autoStart: true,
                          loop: true,
                          delay: 40,
                          strings: [
                            'Freelancer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Data Analyst', 'Badminton Player', 'Chess Player'
                          ],
                        }} />
                      {/* </div> */}
                    </div>
                  </h2>
                  <div class="flex w-full md:justify-start items-end">
                    <h3 className='text-gray-300 lg:text-base text-sm lg:mx-0 lg:text-justify text-left tracking-normal'>
                      Web development: Where creativity meets code, and innovation becomes interactive. </h3>
                  </div>
                </div>
              </div>

              {/* Desktop */}
              <div class="lg:max-w-xl lg:w-1/3 md:w-1/2 w-0 z-0 ">
                <img src="profile2.png" alt="Image" className='w-[50%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full h-full transition-transform' />
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Main

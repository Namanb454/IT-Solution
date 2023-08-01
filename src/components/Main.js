import React from 'react'
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect';


function Main() {

  // const vidRef = useRef();

  // useEffect(() => { vidRef.current.play(); }, []);

  // <video
  //   src="/videos.mp4"
  //   ref={vidRef}
  //   muted
  //   autoPlay
  //   loop
  // />

  return (
    <div>
      
      <div className="relative w-full h-screen overflow-hidden">
        {/* <video
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto z-0"
          autoPlay
          loop
          muted
        >
          <source src="/bg-video2.mp4" type="video/mp4" />

          Your browser does not support the video tag.
        </video> */}
        <img className='w-full' src='bg-video3.gif' alt='img' />
        
        {/* <div className='w-full absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center overflow-y-auto'>
          <Navbar />
        </div> */}

        <div className=' absolute lg:top-[53%] lg:left-[32%] left-auto top-auto transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center'>
          <h2 className='lg:text-4xl text-4xl font-bold text-center lg:mx-0 mx-5  md:mb-10 ' id='signupHeading' >
            Providing The Best IT Solution For
            <div className='w-fit font-extrabold text-[#ec634b]' id='signupsubHeading'>

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
        <h3 className='w-[40%] absolute lg:top-[75%] lg:left-[30%] left-auto top-auto transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-lg text-justify'>Empowering Your Business with Reliable IT Solutions for Uninterrupted Growth and Success. </h3>
        <div className='w-[50%] absolute lg:top-[53%] lg:left-[75%] left-auto top-auto transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center  '>
          <img src="home2.png" alt="Image" className={'w-full animate-pulse h-auto transition-transform'} />
        </div>
      </div>

      

    </div>
  )
}

export default Main

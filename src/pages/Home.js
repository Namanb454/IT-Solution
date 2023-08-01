import React from 'react'
import Navbar from '../components/Navbar'
// import Typewriter from 'typewriter-effect';
import Main from '../components/Main';
import Services from './Services';


function Home() {

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
      <div className='w-full fixed top-0 z-10 bg-tranparent text-white text-center'>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>

      <div id='services'>
        <Services/>
      </div>


    </div>
  )
}

export default Home

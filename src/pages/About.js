import React from 'react'
import { about } from '../content'
import { values } from '../content'
function About() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">

                    <div class=" lg:w-[50%] md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="w-full object-cover object-center rounded" alt="hero" src="about.png" />
                    </div>

                    <div class="lg:flex-grow md:w-[10%] lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left text-white">
                        <h2 className='lg:text-5xl text-3xl font-bold'>About Us</h2>
                        <p class="mb-8 text-gray-300 text-justify leading-relaxed">Welcome to B&K - Your Trusted IT Solutions Partner

                            At B&K, we are driven by a passion for technology and a commitment to delivering innovative IT solutions that empower businesses to thrive in the digital age. With a team of dedicated experts and a proven track record, we are your go-to partner for all your IT needs.</p>
                        <section class="text-gray-600 body-font py-5">
                            <div class="container px-5 py-5 mx-auto">
                                <div class="flex flex-wrap -m-4">
                                    {values.map(data => {
                                        return (
                                            <div key={data.id} class="lg:w-1/2">
                                                <div class="flex sm:flex-row flex-col items- sm:justify-start text-center sm:text-left">
                                                    <img alt="team" class="flex-shrink-0 mx-auto rounded-lg w-[25%] h-[30%]" src={data.img} />
                                                    <div class="flex-grow pl-5">
                                                        <h2 class="title-font font-bold text-xl text-[#ec634b]">{data.heading}</h2>
                                                        {/* <h3 class="text-gray-500 mb-3">UI Developer</h3> */}
                                                        <p class="mb-4 text-base text-gray-300 lg:text-left text-justify">{data.values}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='w-[90%] mx-auto px-10'>
                    <h2 className='lg:text-3xl text-3xl text-white font-semibold text-left'>Why Choose B&K ?</h2>
                    {about.map(data => {
                        return (
                            <div className='my-10' key={data.id}>
                                <h2 className='lg:text-2xl text-3xl text-[#ec634b] font-semibold text-left'>{data.q}</h2>
                                <p className="text-gray-300 text-justify leading-relaxed">{data.ans}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default About

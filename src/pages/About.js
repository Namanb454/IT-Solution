import React from 'react'
import { about } from '../content'
import { values } from '../content'
function About() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className='lg:py-20 py-20'>
                    <div className="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
                        <h2 className='lg:w-1/2 w-full lg:ml-auto text-center lg:pl-10 lg:text-5xl text-3xl font-bold text-white'>About Us</h2>
                    </div>

                    <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                        <div className=" lg:w-[50%] md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="w-full object-cover object-center rounded" alt="hero" src="about.png" />
                        </div>

                        <div className="lg:flex-grow md:w-[10%] lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left text-white">
                            <p className="mb-8 text-gray-300 text-sm text-justify leading-relaxed">Welcome to B&K - Your Trusted IT Solutions Partner

                                At B&K, we are driven by a passion for technology and a commitment to delivering innovative IT solutions that empower businesses to thrive in the digital age. With a team of dedicated experts and a proven track record, we are your go-to partner for all your IT needs.</p>
                            <section className="text-gray-600 body-font py-5">
                                <div className="container px-5 py-5 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        {values.map(data => {
                                            return (
                                                <div key={data.id} className="lg:w-1/2">
                                                    <div className="flex sm:flex-row flex-col items- sm:justify-start text-center sm:text-left">
                                                        <img alt="team" className="flex-shrink-0 mx-auto rounded-lg w-[25%] h-[30%]" src={data.img} />
                                                        <div className="flex-grow pl-5">
                                                            <h2 className="title-font font-bold text-xl text-[#ec634b]">{data.heading}</h2>
                                                            {/* <h3 className="text-gray-500 mb-3">UI Developer</h3> */}
                                                            <p className="mb-4 text-sm text-gray-300 lg:text-left text-justify">{data.values}</p>
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
                </div>

                <div className='lg:py-10 pt-0 pb-10'>
                    <div className="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
                        <h2 className='lg:text-5xl text-center text-3xl font-bold text-white'>Why Choose B&K?</h2>
                    </div>

                    <div className=" w-[100%] lg:hidden md:hidden md:w-1/2 mb-10 md:mb-0">
                        <img className="w-full object-cover object-center rounded" alt="hero" src="about1.png" />
                    </div>
                    <div className="container mx-auto flex px-5 py-0 md:flex-row flex- items-center">

                        <div className="lg:flex-grow md:w-[10%] lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left text-white">
                            <section className="text-gray-600 body-font py-5">
                                <div className="container px-5 py-5 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        {about.map(data => {
                                            return (
                                                <div key={data.id} className="">
                                                    <div className="flex sm:flex-row flex-col items- sm:justify-start text-center sm:text-left">
                                                        <span className="flex-shrink-0 lg:text-6xl text-3xl text-[#9288F8] font-serif font-bold mx-auto rounded-lg w-[25%] h-[30%]">{data.sn}</span>
                                                        <div className="flex-grow pl-5">
                                                            <h2 className="title-font font-bold text-xl text-[#ec634b]">{data.q}</h2>
                                                            <p className="mb-4 text-sm text-gray-300 lg:text-start text-justify">{data.ans}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className=" lg:w-[50%] md:w-1/2 w-0 mb-10 md:mb-0">
                            <img className="w-full h-[50vh] object-cover object-center rounded" alt="hero" src="about1.png" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About

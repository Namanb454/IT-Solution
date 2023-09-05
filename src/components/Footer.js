import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';

function Footer() {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="ml-3 text-xl font-bold text-white">siteScript</span>
                        </a>
                        <div className="pb-[5%]">
                            <div className="container py-4 px- flex flex-wrap flex-col sm:flex-row">

                                <span className="inline-flex sm:mt-0 mt-2 justify-center sm:justify-start">
                                    <a className="w-8 mx-2 h-8 ml-3 hover:w-10 hover:h-10 transition-all text-gray-500">
                                        <img src='socialmedia/linkedin.png' />
                                    </a>
                                    <a className="w-8 mx-2 h-8 ml-3 hover:w-10 hover:h-10 transition-all text-gray-500">
                                        <img src='socialmedia/facebook.png' />
                                    </a>
                                    <a className="w-8 mx-2 h-8 ml-3 hover:w-10 hover:h-10 transition-all text-gray-500">
                                        <img src='socialmedia/instagram.png' />
                                    </a>
                                    <a className="w-8 mx-2 h-8 ml-3 hover:w-10 hover:h-10 transition-all text-gray-500">
                                        <img src='socialmedia/twitter.png' />
                                    </a>

                                </span>
                            </div>
                        </div>
                        {/* <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p> */}
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-semibold text-[#ec634b] tracking-widest text-xl mb-3">USEFUL LINKS</h2>
                            <nav className="list-none mb-10">

                                <li className='my-2'>
                                    <a href='#' className="text-white text-base hover:font-bold hover:text-[#9681EB]">Home</a>
                                </li>
                                <li className='my-2'>
                                    <a href='#about' className="text-white text-base hover:font-bold hover:text-[#9681EB]">About Us</a>
                                </li>
                                <li className='my-2'>
                                    <a href='#demo' className="text-white text-base hover:font-bold hover:text-[#9681EB]">Demo</a>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-semibold text-[#ec634b] tracking-widest text-xl mb-3">Support</h2>
                            <nav className="list-none mb-10">
                                <li className='my-2'>
                                    <a href='#services' className="text-white text-base hover:font-bold hover:text-[#9681EB]">Services</a>
                                </li>
                                <li className='my-2'>
                                    <a href='#features' className="text-white text-base hover:font-bold hover:text-[#9681EB]">Features</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-semibold text-xl text-[#ec634b] tracking-widest mb-3">Contact Us</h2>
                            <nav className="list-none mb-10 text-center">

                                <li className='my-2 w-fit mx-auto '>

                                    <a href='tel: 9599791185' className="text-white text-base hover:font-bold hover:text-[#9681EB]">
                                        <div className='flex items-center'>
                                            <BiSolidPhoneCall />
                                            +91 9599791185
                                        </div></a>
                                </li>
                                <li className='my-2 w-fit mx-auto'>

                                    <a href='tel: 9599765990' className="text-white text-base hover:font-bold hover:text-[#9681EB]">
                                        <div className='flex items-center'>
                                            <BiSolidPhoneCall />
                                            +91 8448908359
                                        </div>
                                    </a>

                                </li>
                                <li className='my-2 w-fit mx-auto'>
                                    <a href='mailto: namanb454@gmail.com' className="text-white text-base hover:font-bold hover:text-[#9681EB]">
                                        <div className='flex items-center'>
                                            <GrMail /> namanb454@gmail.com
                                        </div>
                                    </a>
                                </li>
                                <li className='my-2 w-fit mx-auto'>

                                    <a href='mailto: kartikkedia011@gmail.com' className="text-white text-base hover:font-bold hover:text-[#9681EB]">
                                        <div className='flex items-center'>
                                            <GrMail />
                                            jainkshitij1530@gmail.com
                                        </div>
                                    </a>
                                </li>
                            </nav>
                        </div>

                    </div>
                </div>
                <div className="pb-[1%]">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-300 text-sm font-semibold text-center mx-auto sm:text-left">copyright © 2023 siteScript IT Solution
                        </p>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer

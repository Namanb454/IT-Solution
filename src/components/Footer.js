import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiTwotoneMail, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="text-white py-20 px-9">
            <div className="container p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 sm:gap-4 md:gap-6">
                {/* Intro */}
                <div className="text-center sm:text-left">
                    <h2 className="text-3xl font-normal mb-2 pb-3" style={{ fontFamily: 'Comic Sans MS' }}>Intro</h2>
                    <p style={{ fontFamily: 'Bahnschrift' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {/* Useful Links */}
                <div >
                    <h2 className="text-3xl font-normal mb-2" style={{ fontFamily: 'Comic Sans MS' }}>Useful Links</h2>
                    <ul className="list-disc list-inside">
                        <li><a href="#" style={{ fontFamily: 'Bahnschrift', fontSize: '1.1rem' }}>Udemy</a></li>
                        <li><a href="#" style={{ fontFamily: 'Bahnschrift', fontSize: '1.1rem' }}>WikiPedia</a></li>
                        <li><a href="#" style={{ fontFamily: 'Bahnschrift', fontSize: '1.1rem' }}>Google</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h2 className="text-3xl font-]normal mb-2" style={{ fontFamily: 'Comic Sans MS' }}>Resources</h2>
                    <ul className="list-disc list-inside">
                        <li><a href="#" style={{ fontFamily: 'Bahnschrift', fontSize: '1.1rem' }}>Intro</a></li>
                        <li><a href="#services" style={{ fontFamily: 'Bahnschrift', fontSize: '1.1rem' }}>Services</a></li>
                        <li><a href="#features" style={{ fontFamily: 'Bahnschrift', fontSize: '1.1rem' }}>Features</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h2 className="text-3xl font-normal mb-2" style={{ fontFamily: 'Comic Sans MS' }}>Contact Information</h2>
                    <div>
                        <div className='flex py-3'>
                            <AiOutlineMail style={{ fontSize: '25px' }} />
                            <p className='px-3' style={{ fontFamily: 'Bahnschrift', fontSize: '1.1rem' }}>Email: example@example.com</p>
                        </div>
                        <div className='flex py-3'>
                            <AiOutlinePhone style={{ fontSize: '25px' }} />
                            <p className='px-3' style={{ fontFamily: 'Bahnschrift', fontSize: '1.1rem' }}>Phone: (123) 456-7890</p>
                        </div>
                    </div>
                    <div className="flex mt-2 py-2">
                        <a href="https://www.instagram.com" target="_blank" className="mr-2 text-white hover:text-gray-400 px-1" >
                            <i><AiFillInstagram style={{ fontSize: '30px' }} /></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" className="mr-2 text-white hover:text-gray-400 px-1">
                            <i><AiFillLinkedin style={{ fontSize: '30px' }} /></i>
                        </a>
                        <a href="mailto:kartikkedia011@gmail.com" target="_blank" className="mr-2 text-white hover:text-gray-400 px-1">
                            <i><AiTwotoneMail style={{ fontSize: '30px' }} /></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

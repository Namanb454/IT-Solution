import React, { useState, useEffect } from 'react';
// import { LuAsterisk } from 'react-icons/lu'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Contact = () => {
    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
    const [textcolor, settextcolor] = useState("white");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("5rem");
        window.scrollY > 10 ? settextcolor("#6527BE") : settextcolor("white");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <div>

            <div className=" w-full mx-auto text-center py-10">
                <nav style={{
                    backgroundColor: navColor,
                    height: navSize,
                    transition: "all 0.5s",
                    color: textcolor,
                }}>
                    <div className="mx-auto">
                        <Link to='/' className='lg:text-2xl mx-auto text-xl font-bold my-10'>B&K Solutions</Link>
                    </div>
                    <section className='w-full bg-blue-custom shadow-md border border-[#ec634b] border-t-8'></section>
                </nav>
            </div>
            <div className="min-h-screen flex flex-col justify-center items-center bg-blue">
                <section className="bg-blue-custom p-8 shadow-md border border-blue-300 border-t-8">
                    <h2 className="text-2xl text-center font-semibold mb-4 text-white">Visit Us</h2>
                    <a href='https://www.google.com/maps/place/Dr.+Akhilesh+Das+Gupta+Institute+of+Technology+%26+Management/@28.6772175,77.2583074,16.04z/data=!4m6!3m5!1s0x390cfc5e54e6b163:0x523ae20fe007eccc!8m2!3d28.6779427!4d77.2611069!16zL20vMDk1bm05?hl=en&entry=ttu' className="text-white text-center">
                        FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri Park, Shahdara, New Delhi, Delhi-110053
                    </a>
                    <div className='text-white pt-4 text-xl'>
                        <div className='flex py-3 mx-auto text-center'>
                            <AiOutlineMail style={{ fontSize: '25px' }} />
                            <a href='mailto: b&ksolution@gmail.com' className='px-3' style={{ fontFamily: 'Bahnschrift', fontSize: '1.1rem' }}>
                                b&ksolution@gmail.com
                            </a>
                        </div>
                        <div className='flex py-3 items-center'>
                            <AiOutlinePhone style={{ fontSize: '25px' }} />
                            <a href='tel: 9599765990' className='px-3 text-lg' style={{ fontFamily: 'Bahnschrift' }}>
                                +91 9599765990
                            </a>
                        </div>
                        <div className='flex py-3 items-center'>
                            <AiOutlinePhone className='' style={{ fontSize: '25px' }} />
                            <a href='tel: 9599791185' className='px-3 text-lg' style={{ fontFamily: 'Bahnschrift' }}>
                                +91 9599791185
                            </a>
                        </div>
                    </div>
                </section>
                <div className='w-full mx-auto my-20'>
                    <h2 className="lg:text-4xl text-center text-3xl font-semibold text-white lg:py-20 py-10" style={{ fontFamily: 'Century Gothic' }}>Find Us On Maps!</h2>
                    <section className="bg-white mx-auto lg:w-[50%] w-[90%] lg:h-[50vh] h-[30vh] shadow-md rounded-md ">
                        <div className="w-full h-full">
                            <iframe
                                title="Google Map"
                                className="w-full h-full rounded-md"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3911840989085!2d77.25853197540503!3d28.677942675639862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc5e54e6b163%3A0x523ae20fe007eccc!2sDr.%20Akhilesh%20Das%20Gupta%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1691055748960!5m2!1sen!2sin"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </section>
                </div>

                <section className="w-full max-w-md mt-6 sm:mt-12 pb-10">
                    <h2 className="lg:text-4xl text-3xl w-[90%] mx-auto font-semibold mb-4 text-white text-center" style={{ fontFamily: 'Century Gothic' }}>We Would Love To Hear From You!</h2>
                    <div className="flex items-center justify-center">
                        <div className="bg-transparent p-8 rounded shadow-md w-96">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-[#ec634b] text-sm font-medium">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="mt-1 p-2 border w-full rounded-md"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-[#ec634b] text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 p-2 border w-full rounded-md"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-[#ec634b] text-sm font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="mt-1 p-2 border w-full rounded-md"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <div className='mx-auto w-fit'>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-[#ec634b] text-white font-semibold rounded-md hover:bg-[#ff9b89] hover:font-bold"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
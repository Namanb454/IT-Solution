import React from 'react';
import { LuAsterisk } from 'react-icons/lu'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'


const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-blue">
            <section className="bg-blue-custom p-8 shadow-md mb-6 mt-44 mb-14 border border-blue-300 border-t-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Our Office</h2>
                <p className="text-white">
                    FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri Park, Shahdara, New Delhi, Delhi-110053
                </p>
                <div className='text-white pt-4 text-xl'>
                    <div className='flex py-3'>
                        <AiOutlineMail style={{ fontSize: '25px' }} />
                        <p className='px-3' style={{ fontFamily: 'Bahnschrift', fontSize: '1.1rem' }}>Email: example@example.com</p>
                    </div>
                    <div className='flex py-3'>
                        <AiOutlinePhone style={{ fontSize: '25px' }} />
                        <p className='px-3' style={{ fontFamily: 'Bahnschrift', fontSize: '1.1rem' }}>Phone: (123) 456-7890</p>
                    </div>
                </div>
            </section>

            <h2 className="text-4xl font-semibold mb-4 text-white my-10 pb-10" style={{ fontFamily: 'Century Gothic' }}>Find Us On Maps!</h2>
            <section className="bg-white shadow-md rounded-md mb-32">
                <div className="w-screen h-screen1">
                    <iframe
                        title="Google Map"
                        className="w-screen h-screen1 rounded-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3911840989085!2d77.25853197540503!3d28.677942675639862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc5e54e6b163%3A0x523ae20fe007eccc!2sDr.%20Akhilesh%20Das%20Gupta%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1691055748960!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </section>

            <section className="w-full max-w-md mt-6 sm:mt-12 pb-10">
                <h2 className="text-4xl font-semibold mb-4 text-white text-center pb-16" style={{ fontFamily: 'Century Gothic' }}>We Would Love To Hear From You!</h2>
                <form className="space-y-4 ">
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="name" className="block flex text-sm text-white font-large">
                                Name
                                <LuAsterisk style={{ color: 'red' }} />
                            </label>
                            <input
                                autoComplete='off'
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-2 w-full bg-blue-custom border rounded-md border-blue-300 text-white"
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label htmlFor="email" className="block flex text-sm text-white font-large">
                                Email
                                <LuAsterisk style={{ color: 'red' }} />
                            </label>
                            <input
                                autoComplete='off'
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-full bg-blue-custom border rounded-md border-blue-300 focus:ring-indigo-500 focus:border-indigo-500 text-white "
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block flex text-sm text-white font-large">
                            Subject
                            <LuAsterisk style={{ color: 'red' }} />
                        </label>
                        <input
                            autoComplete='off'
                            type="text"
                            id="subject"
                            name="subject"
                            className="mt-1 p-2 w-full bg-blue-custom border rounded-md border-blue-300 focus:ring-indigo-500 focus:border-indigo-500 text-white "
                        />
                    </div>
                    <div>
                        <label htmlFor="feedback" className="block flex text-sm text-white font-large">
                            Feedback
                            <LuAsterisk style={{ color: 'red' }} />
                        </label>
                        <textarea
                            autoComplete='off'
                            id="feedback"
                            name="feedback"
                            rows="4"
                            className="mt-1 p-2 w-full bg-blue-custom border rounded-md border-blue-300 focus:ring-indigo-500 focus:border-indigo-500 text-white "
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 w-48 bg-blue-400 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;
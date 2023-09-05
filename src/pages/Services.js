import React from 'react'
// import {services} from '../content/services'
import { services } from '../content'
function Services() {



    return (
        <div id='services' className='text-white lg:py-0 py-10'>
            <section className="text-white body-font">
                <div className="container px-5 lg:py-20 py-10 mx-auto">
                    <h2 className='lg:text-5xl text-3xl my-5 font-bold text-center text-[#ec634b] px-5'>What We Do</h2>
                    <div className="flex flex-wrap -m-4">
                        {services.map(data => {
                            return (
                                <div key={data.id} className="p-10 lg:w-1/3">
                                    <div className="h-full bg-transparent border-[#8062D6] hover:bg-[#6527BE] hover:text- transition-all border-[1px] bg-opacity-75 lg:px-10 px-2 pt-10 pb-10 rounded-lg overflow-hidden relative">
                                        <img className='w-[25%] lg:mx-auto mx-auto' src={data.img} alt='img' />
                                        <h1 className="title-font sm:text-2xl text-xl lg:text-center text-center font-bold text-[#ec634b] mb-3">{data.heading}</h1>
                                        <p className="leading-relaxed lg:text-center text-center mb-3">{data.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services

import React from 'react'

function Services() {

    const services = [
        { 'id': '1', 'img': 'webd.png', 'heading': 'Web Development' },
        { 'id': '2', 'img': 'softwaretool.png', 'heading': 'Software Tools' },
        { 'id': '3', 'img': 'dataanalyst.png', 'heading': 'Data Analyst' },
        { 'id': '4', 'img': 'appd.png', 'heading': 'App Development' },
        { 'id': '5', 'img': 'seo.png', 'heading': 'Search Engine Optimization' },
        { 'id': '6', 'img': 'graphicdesign.png', 'heading': 'Graphic Designing' },
        { 'id': '7', 'img': 'contentwriting.png', 'heading': 'Content Writing' },
        { 'id': '8', 'img': 'itconsultancy.png', 'heading': 'IT Support' },
    ];

    return (
        <div id='services' className='text-white'>
            <section class="text-white body-font">
                <div class="container px-5 lg:py-20 mx-auto">
                    <h2 className='lg:text-5xl text-3xl font-bold text-left px-5'>Our Services</h2>
                    <div class="flex flex-wrap -m-4">
                        {services.map(data => {
                            return (
                                <div key={data.id} class="p-10 lg:w-1/3">
                                    <div class="h-full bg-transparent border-[#8062D6] hover:bg-[#6527BE] hover:text- transition-all border-[1px] bg-opacity-75 px-10 pt-10 pb-10 rounded-lg overflow-hidden relative">
                                        <img className='w-[25%]' src={data.img} alt='img' />
                                        <h1 class="title-font sm:text-2xl text-xl text-left font-bold text-[#ec634b] mb-3">{data.heading}</h1>
                                        <p class="leading-relaxed  text-left mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
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

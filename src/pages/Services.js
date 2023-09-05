import React from 'react'

function Services() {

    const services = [
        { 'id': '1', 'img': 'webd.png', 'heading': 'Web Development' },
        { 'id': '2', 'img': 'appd.png', 'heading': 'App Development' },
        { 'id': '3', 'img': 'blockchain.png', 'heading': 'Block Chain Development' },
        { 'id': '4', 'img': 'softwaretool.png', 'heading': 'Software Tools' },
        { 'id': '5', 'img': 'dataanalyst.png', 'heading': 'Data Analyst' },
        { 'id': '6', 'img': 'seo.png', 'heading': 'Search Engine Optimization' },
        { 'id': '7', 'img': 'graphicdesign.png', 'heading': 'Design' },
        { 'id': '8', 'img': 'contentwriting.png', 'heading': 'Content Writing' },
        { 'id': '9', 'img': 'itconsultancy.png', 'heading': 'IT Support' },
    ];

    return (
        <div id='services' className='text-white lg:py-0 py-10'>
            <section className="text-white body-font">
                <div className="container px-5 lg:py-20 py-10 mx-auto">
                    <h2 className='lg:text-5xl text-3xl my-5 font-bold text-left text-[#ec634b] px-5'>Our Services</h2>
                    <div className="flex flex-wrap -m-4">
                        {services.map(data => {
                            return (
                                <div key={data.id} className="p-10 lg:w-1/3">
                                    <div className="h-full bg-transparent border-[#8062D6] hover:bg-[#6527BE] hover:text- transition-all border-[1px] bg-opacity-75 lg:px-10 px-2 pt-10 pb-10 rounded-lg overflow-hidden relative">
                                        <img className='w-[25%] lg:mx-0 mx-auto' src={data.img} alt='img' />
                                        <h1 className="title-font sm:text-2xl text-xl lg:text-left text-center font-bold text-[#ec634b] mb-3">{data.heading}</h1>
                                        <p className="leading-relaxed lg:text-left text-center mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
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

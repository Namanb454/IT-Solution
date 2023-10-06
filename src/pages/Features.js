import React from 'react';
import '../Feature.css';

const GridComponent = () => {
    const boxStyle = {
        backgroundColor: 'white',
        boxShadow: '0px 0px 15px #9681EB',
    }
    const boxData = [
        { imageUrl: 'features/js.png', heading: 'JavaScript' },
        { imageUrl: 'features/reactjs.png', heading: 'React JS' },
        { imageUrl: 'features/nextjs.png', heading: 'Next JS' },
        { imageUrl: 'features/mongodb.png', heading: 'MongoDB' },
        { imageUrl: 'features/nodejs.png', heading: 'Node JS' },
        { imageUrl: 'features/django.png', heading: 'Django' },
        { imageUrl: 'features/auth0.png', heading: 'Auth0' },
        { imageUrl: 'features/firebase.png', heading: 'Firebase' },
        { imageUrl: 'features/asp.png', heading: 'ASP.NET' },
        { imageUrl: 'features/sanity.png', heading: 'Sanity' },
        { imageUrl: 'features/bootstrap.png', heading: 'Bootstrap' },
        { imageUrl: 'features/tailwind.png', heading: 'Tailwind CSS' },
        { imageUrl: 'features/cleancode.png', heading: 'Clean Code' },
        { imageUrl: 'features/customize.png', heading: 'Easy To Customize' },
        { imageUrl: 'features/googlefont.png', heading: 'Google Font' },
        { imageUrl: 'features/fontawesomepro.png', heading: 'Font Awesome Pro' },
        { imageUrl: 'features/responsive.png', heading: 'Responsive Layout' },
        { imageUrl: 'features/oneclickdemo.png', heading: 'One Click Demo' },
        { imageUrl: 'features/speedoptimized.png', heading: 'Speed Optimized' },
        { imageUrl: 'features/unlimitedcolor.png', heading: 'Unlimited Color Option' },
    ];

    const Style1 = {
        // backgroundColor: 'white',
        textAlign: 'center',
        paddingTop: '6rem',
        fontWeight: 'bold',
        // background: 'linear-gradient(to right, #f200ff, #104cba, #f200ff, #104cba)',
        // background: 'white',
        // WebkitBackgroundClip: 'text',
        // WebkitTextFillColor: 'transparent',
        fontFamily: 'candara',
    };
    const Style2 = {
        fontFamily: 'Trebuchet MS',
        // backgroundColor: '#ec634b',
        textAlign: 'center',
        // fontSize: '3rem',
        // color: 'white',
        // WebkitBackgroundClip: 'text',
        // WebkitTextFillColor: 'transparent',
        paddingTop: '1rem',
        // fontWeight: 'extra-bold'
    };


    return (
        <div>
            {/* <h1 className='lg:text-3xl text-xl text-white' style={Style1}>AWESOME FEATURES</h1> */}
            <h2 className='lg:text-7xl text-3xl py-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-violet-400 to-[#ea3d1e]' style={Style2}>
                eNjoy ouR eXclusive featurEs
            </h2>
            <div className='text-white'>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {boxData.map(data => {
                                return (
                                    <div className="lg:w-1/4 md:w-1/2 p-5 w-1/2 ">
                                        <div style={boxStyle} className='lg:mx-5 py-5 rounded-xl'>
                                            <a className="  block relative lg:w-[30%] w-[40%] rounded mx-auto overflow-hidden ">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={data.imageUrl} />
                                            </a>
                                            <div className='w-fit mx-auto text-center'>
                                                <h3 className='font-semibold'>{data.heading}</h3>
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
    )
};

export default GridComponent;
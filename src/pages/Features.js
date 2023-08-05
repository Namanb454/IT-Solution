import React from 'react';
import '../Feature.css';

const GridComponent = () => {
    const boxStyle = {
        backgroundColor: 'white',
        boxShadow: '0px 0px 50px #9681EB',
    }
    const boxData = [
        { imageUrl: 'features/js.png', heading: 'JavaScript' },
        { imageUrl: 'features/reactjs.png', heading: 'React JS' },
        { imageUrl: 'features/nodejs.png', heading: 'Node JS' },
        { imageUrl: 'features/django.png', heading: 'Django' },
        { imageUrl: 'features/auth0.png', heading: 'Auth0' },
        { imageUrl: 'features/firebase.png', heading: 'Firebase' },
        { imageUrl: 'features/bootstrap.png', heading: 'Bootstrap' },
        { imageUrl: 'features/cleancode.png', heading: 'Clean Code' },
        { imageUrl: 'features/customize.png', heading: 'Easy To Customize' },
        { imageUrl: 'features/googlefont.png', heading: 'Google Font' },
        { imageUrl: 'features/fontawesomepro.png', heading: 'Font Awesome Pro' },
        { imageUrl: 'features/responsive.png', heading: 'Responsive Layout' },
        { imageUrl: 'features/oneclickdemo.png', heading: 'One Click Demo' },
        { imageUrl: 'features/speedoptimized.png', heading: 'Speed Optimized' },
        { imageUrl: 'features/unlimitedcolor.png', heading: 'Unlimited Color Option' },
        { imageUrl: 'features/asp.png', heading: 'ASP.NET' },
    ];

    const Style1 = {
        backgroundColor: 'white',
        textAlign: 'center',
        paddingTop: '6rem',
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #f200ff, #104cba, #f200ff, #104cba)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: 'candara',
    };
    const Style2 = {
        fontFamily: 'Trebuchet MS',
        backgroundColor: 'white',
        textAlign: 'center',
        // fontSize: '3rem',
        color: 'white',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        paddingTop: '1rem',
        // fontWeight: 'extra-bold'
    };


    return (
        <div>
            <h1 className='lg:text-3xl text-xl' style={Style1}>AWESOME FEATURES</h1>
            <h2 className='lg:text-4xl text-xl font-extrabold' style={Style2}>
                Great collection of websites
                and enjoy our exclusive features
            </h2>
            <div className='text-white'>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            {boxData.map(data => {
                                return (
                                    <div class="lg:w-1/4 md:w-1/2 p-5 w-1/2 ">
                                        <div style={boxStyle} className='lg:mx-5 py-5 rounded-xl'>
                                            <a class="  block relative lg:w-[30%] w-[40%] rounded mx-auto overflow-hidden ">
                                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={data.imageUrl} />
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
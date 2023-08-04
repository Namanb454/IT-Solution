import React from 'react';
import '../Feature.css';

const GridComponent = () => {
    const boxData = [
        { imageUrl: 'features/img1.jpeg', heading: 'Redux Framework' },
        { imageUrl: 'features/img2.svg', heading: 'Contact Form 7' },
        { imageUrl: 'features/img3.png', heading: 'WPML Compactible' },
        { imageUrl: 'features/img4.png', heading: 'Support JetPack' },
        { imageUrl: 'features/img5.png', heading: 'SEO plugn' },
        { imageUrl: 'features/img6.png', heading: 'FontAwesome Pro' },
        { imageUrl: 'features/img7.png', heading: 'Unlimited Colors Option' },
        { imageUrl: 'features/img8.png', heading: 'Google Font' },
        { imageUrl: 'features/img9.png', heading: 'Clean Code' },
        { imageUrl: 'features/img10.png', heading: 'Responsive Layout' },
        { imageUrl: 'features/img11.png', heading: 'Easy To Customize' },
        { imageUrl: 'features/img12.png', heading: 'Elementor' },
        { imageUrl: 'features/img13.png', heading: 'WordPress 6.0.1' },
        { imageUrl: 'features/img14.png', heading: 'One Click Demo' },
        { imageUrl: 'features/img15.png', heading: 'MailChimp' },
        { imageUrl: 'features/img16.png', heading: 'Speed Optimized' },
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
        fontWeight: 'bold'
    };


    return (
        <div>
            <h1 className='lg:text-3xl text-xl' style={Style1}>AWESOME FEATURES</h1>
            <h2 className='lg:text-4xl text-xl' style={Style2}>
                Great collection of websites
                and enjoy our exclusive features
            </h2>
            <div className='text-white'>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            {boxData.map(data => {
                                return (


                                    <div class="lg:w-1/4 md:w-1/2 p-1 w-1/2">
                                        <a class="block relative lg:w-[20%] w-[40%] my-5 rounded mx-auto overflow-hidden">
                                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={data.imageUrl} />
                                        </a>
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
import React from 'react';

const Box = ({ imageSrc, heading }) => {
    const boxStyle = {
        width: '110%',
        height: '150%',
        margin: 'auto',
        backgroundColor: 'white',
        boxShadow: '0px 0px 100px #bebbc2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        fontFamily: 'consolas',
        fontSize: '1.1rem',
    };

    const imageStyle = {
        width: '15%',
        height: '40%',
        objectFit: 'scale-down',
        marginBottom: '10px',
    };

    return (
        <div style={boxStyle}>
            <img src={imageSrc} alt="Box Image" style={imageStyle} />
            <h3>{heading}</h3>
        </div>
    );
};

const GridComponent = () => {
    const boxData = [
        { imageSrc: 'features/img1.jpeg', heading: 'Redux Framework' },
        { imageSrc: 'features/img2.svg', heading: 'Contact Form 7' },
        { imageSrc: 'features/img3.png', heading: 'WPML Compactible' },
        { imageSrc: 'features/img4.png', heading: 'Support JetPack' },
        { imageSrc: 'features/img5.png', heading: 'SEO plugn' },
        { imageSrc: 'features/img6.png', heading: 'FontAwesome Pro' },
        { imageSrc: 'features/img7.png', heading: 'Unlimited Colors Option' },
        { imageSrc: 'features/img8.png', heading: 'Google Font' },
        { imageSrc: 'features/img9.png', heading: 'Clean Code' },
        { imageSrc: 'features/img10.png', heading: 'Responsive Layout' },
        { imageSrc: 'features/img11.png', heading: 'Easy To Customize' },
        { imageSrc: 'features/img12.png', heading: 'Elementor' },
        { imageSrc: 'features/img13.png', heading: 'WordPress 6.0.1' },
        { imageSrc: 'features/img14.png', heading: 'One Click Demo' },
        { imageSrc: 'features/img15.png', heading: 'MailChimp' },
        { imageSrc: 'features/img16.png', heading: 'Speed Optimized' },

    ];

    const rows = 4;
    const cols = 4;

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: '5rem',
        // backgroundColor: ,
        padding: '6rem',
    };

    const Style1 = {
        backgroundColor: 'white',
        textAlign: 'center',
        paddingTop: '6rem',
        fontSize: '1.3rem',
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
        fontSize: '3rem',
        // background: '#15133C',
        color: 'white',
        // background: 'linear-gradient(to right, #15133C, #15133C)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        paddingTop: '1rem',
        fontWeight: 'bold'
    };

    // Create an array of Box components with unique keys
    const boxes = boxData.map(({ imageSrc, heading }, index) => (
        <Box key={index} imageSrc={imageSrc} heading={heading} />
    ));

    return (
        <div>
            <h1 style={Style1}>AWESOME FEATURES</h1>
            <h2 style={Style2}>
                Great collection of websites
                and enjoy our exclusive features
            </h2>
            <div style={gridStyle}>
                {boxes}
            </div>
        </div>
    )
};

export default GridComponent;
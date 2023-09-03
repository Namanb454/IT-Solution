import React, { useState, useEffect, useRef } from 'react';
// import { BsFillCartFill } from "react-icons/bs";
// import { HiMiniBars4 } from "react-icons/hi";

import { Link } from 'react-router-dom';
const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsNavOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    const navbar = [
        { 'id': '1', 'nav': 'Intro', 'link': '#' },
        { 'id': '2', 'nav': 'About Us', 'link': '#about' },
        { 'id': '3', 'nav': 'Services', 'link': '#services' },
        { 'id': '4', 'nav': 'Features', 'link': '#features' },
        { 'id': '5', 'nav': 'Demo', 'link': '#Demo' },
    ];
    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
    const [textcolor, settextcolor] = useState("#15133C");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("5rem");
        window.scrollY > 10 ? settextcolor("#6527BE") : settextcolor("#15133C");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <nav style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 0.5s",
            color: textcolor,
        }}>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className=" w-full flex items-center ">
                        <div className="flex-shrink-0">
                            {/* <img className="h-8 w-8" src="/logo.svg" alt="Logo" /> */}
                            <Link to='/' className='lg:text-2xl text-xl font-bold '>siteScript</Link>
                        </div>
                        <div className="hidden md:block mx-auto">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navbar.map(data => {

                                    return (
                                        <a key={data.id}
                                            href={data.link}
                                            className="font-bold hover:text-[#ec634b] transition-all px-3 py-2 rounded-md text-base"
                                        >
                                            <span>{data.nav}</span>
                                            <span className="absolute left-0 -bottom-1 w-full h-2 bg-[#ec634b] -z-10 group-hover:h-full group-hover:transition-all"></span>
                                        </a>

                                    )
                                })}

                                <Link
                                    to="/contact"
                                    className="text-white font-semibold bg-[#6527BE] hover:bg-white border-2 border-[#9681EB] transition-all hover:text-[#6527BE] px-5 py-[5px] rounded-md text-base"
                                >
                                    Get In Touch
                                </Link>

                            </div>
                        </div>
                    </div>


                    {/* <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsNavOpen((prev) => !prev)}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-white focus:outline-none focus:ring- focus:ring-offset- focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-Homeu"
                            aria-expanded="false"
                        >
                           
                            {!isNavOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16/4 18h16"
                                    />
                                </svg>

                            ) : (
                               
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                                
                            )}
                        </button>
                    </div> */}
                    <section className="MOBILE-MENU flex lg:hidden md:ml-auto" ref={menuRef}>
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-7 bg-[#6527BE] "></span>
                            <span className="block h-0.5 w-7 bg-[#6527BE] "></span>
                            <span className="block h-0.5 w-7 bg-[#6527BE] "></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav rounded-b-2xl" : "hideMenuNav"}>
                            <div
                                className="absolute top-0  right-0 md:px-10 px-3 py-[4%]"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-9 w-10 text-[#6527BE]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <div
                                className={`${isNavOpen ? 'block' : 'hidden'
                                    } md:hidden bg-transparent`}
                                id="mobile-Homeu"
                                ref={menuRef}
                            >
                                <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3" ref={menuRef}>
                                    <div className="flex-shrink-0">
                                        {/* <img className="h-8 w-8" src="/logo.svg" alt="Logo" /> */}
                                        <Link to='/' className='lg:text-2xl text-[#6527BE] text-xl font-bold '>B&K Solutions</Link>
                                    </div>

                                    {navbar.map(data => {
                                        return (

                                            <a key={data.id}
                                                href={data.link}
                                                className="text-[#6527BE] font-bold hover:text-[#ec634b] transition-all block px-3 py-2 rounded-md text-base"
                                            >
                                                {data.nav}
                                            </a>
                                        )
                                    })}
                                    <Link
                                        to="/contact"
                                        className="w-fit mx-auto text-white font-semibold bg-[#6527BE] hover:bg-white border-2 border-[#9681EB] transition-all hover:text-[#6527BE] block px-5 py-[5px] rounded-md text-base"
                                    >
                                        Get In Touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 40vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </div>
            </div>

            {/* Mobile Homeu, toggle classes based on Homeu state */}

        </nav>
    );
};

export default Navbar;

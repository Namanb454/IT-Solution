import React from "react";
// import { Preview } from "../Preview";
import { Header } from "./Header";
// import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import Navbar from "./Navbar";

// Font files can be colocated inside of `app`
// const CalSans = localFont({
// src: [{ path: "../../../fonts/CalSans-SemiBold.woff2" }], // specify the path to a custom font in your project.
// display: "swap",
// });

export const Header2 = () => {
    return (
        <div className="h-96 relative w-full overflow-hidden bg-violet-700 flex flex-col items-center justify-center rounded-lg">

            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            
            <h1
                className={twMerge(
                    "md:text-4xl text-xl text-white relative z-20 !p-0 !m-0",

                )}
            >
                Tailwind is Awesome
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
                Framer motion is the best animation library ngl
            </p>
        </div>
    );
};


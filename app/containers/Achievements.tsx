"use client";

import Image from "next/image";
import AOS from "aos";
import React, { useEffect, useState, useCallback } from "react";
import { useSwipeable } from 'react-swipeable';
import "aos/dist/aos.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/Tutorial/1.png",
    "/images/Tutorial/2.png",
    "/images/Tutorial/3.png",
    "/images/Tutorial/4.png",
    "/images/Tutorial/5.png",
    "/images/Tutorial/6.png",
    "/images/Tutorial/7.png",
    // "/images/Tutorial/8.png",
    // "/images/Tutorial/9.png",
    // "/images/Tutorial/10.png",
  ];

  const nextImage = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 15000);
    return () => clearInterval(interval);
  }, [nextImage]);

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true
  });

  return (
    <div id="tutorial" className="pb-60 border-t-2 border-black flex bg-slate-200 px-1 sm:px-40">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex-1 lg:mx-40 mx-10 mt-20 w-full">
          <div className="text-left px-2" data-aos="fade-right">
            <h1 className="text-4xl text-black hidden lg:flex z-10 font-bold">
              INTERFACE
            </h1>
            <h1 className="text-5xl text-black hidden lg:flex z-10 font-bold">
              MATHCUL
            </h1>
            <div className="mt-4 border-2 border-pink-500 hidden lg:flex w-1/6"></div>
            <div className="border-2 border-pink-500 hidden lg:flex w-1/12"></div>
            <h1 className="text-black [#38bdf8] text-[75px] max-md:text-4xl max-md:mb-4 lg:text-[#FFFFFF1A] lg:text-[100px] lg:absolute lg:top-[-10px] lg:left-0 duration-500 font-bold">
              INTERFACE
            </h1>
            <h1 className="text-black [#38bdf8] text-[75px] max-md:text-3xl max-md:mb-4 lg:text-[#FFFFFF1A] lg:text-[100px] lg:absolute lg:top-[-10px] lg:left-0 font-bold duration-500">
              MATHCUL
            </h1>
            <div className="mt-4 border-2 border-pink-500 w-1/3 lg:hidden flex"></div>
            <div className="border-2 border-pink-500 w-1/6 lg:hidden flex"></div>

            <div className="mt-20">
              <div className="flex justify-center items-center w-full relative" {...handlers}>
                <button onClick={prevImage} className="absolute left-2 px-2 py-2 bg-gray-300 rounded hover:bg-gray-400 z-50">
                  <FaCaretLeft size={14} />
                </button>
                <div className="flex justify-center items-center overflow-hidden rounded-md shadow-lg shadow-pink-800 border border-purple-500 mx-4 lg:mx-10">
                  <div className="flex transition-transform duration-500 w-full" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    {images.map((src, index) => (
                      <Image key={index} src={src} className="rounded-md w-full h-auto" width={1200} height={540} alt={`char${index + 1}`} />
                    ))}
                  </div>
                </div>
                <button onClick={nextImage} className="px-2 py-2 bg-gray-300 rounded hover:bg-gray-400 absolute right-2 z-50">
                  <FaCaretRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

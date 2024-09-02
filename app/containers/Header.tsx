"use client";

import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import HeaderButton from "@/app/components/HeaderButton";
import React, { useState, useEffect, useRef } from "react";
import { BsXLg } from "react-icons/bs";
import 'animate.css';
import Link from "next/link";
import { toast } from "react-hot-toast";

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref untuk sidebar
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(window.scrollY);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      let offset;
      if (window.innerWidth < 768) {
        offset = element.getBoundingClientRect().top + window.scrollY - 66;
      } else if (window.innerWidth < 1280) {
        offset = element.getBoundingClientRect().top + window.scrollY - 74;
      } else {
        offset = element.getBoundingClientRect().top + window.scrollY - 90;
      }
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };
  const [toastActive, setToastActive] = useState(false);

  const handleToast = () => {
    if (!toastActive) {
      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-2/5 bg-purple-950 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-pink-900`}
        >
          <div className="flex-1 w-0 px-4 py-3">
            <div className="flex items-center">
              <p className="text-xs font-bold text-white">Segera Datang!</p>
            </div>
          </div>
        </div>
      ));
      setToastActive(true);
      setTimeout(() => setToastActive(false), 600);
    }
  };

  return (
    <div className="relative">
      {/* Overlay untuk menggelapkan layar */}
      {isMenuOpen && (
        <div className="fixed rounded border-b-2 border-pink-500 inset-0 bg-black opacity-50 z-40 pointer-events-none" />
      )}

      <div className={`fixed top-0 w-full rounded border-b-2 border-pink-500 z-50 ${isMenuOpen ? 'opacity-1' : ''}`}>
        <div className="px-4 sm:px-8 pt-4 py-4 flex items-center justify-between bg-gradient-to-r from-black to-purple-900">
          <div className="flex items-center gap-2">
            <div onClick={() => handleClick("home")}>
              <div className="flex lg:hidden items-center gap-2">
                <Image
                  src="/images/mathcul.png"
                  height={50}
                  width={50}
                  alt="WEAPMATH LOGO"
                  className="cursor-pointer rounded-full border border-white shadow-md"
                />
                <h1 className="ml-2 md:hidden lg:flex font-bold text-xl text-white hover:text-pink-500 duration-400 transition-all">
                  MATHCUL
                </h1>
              </div>
              <div className="lg:flex hidden items-center gap-2">
                <Image
                  src="/images/mathcul.png"
                  height={50}
                  width={50}
                  alt="WEAPMATH LOGO"
                  className="cursor-pointer rounded-full border border-white shadow-md"
                />
                <h1 className="ml-2 md:hidden lg:flex font-bold text-xl text-white hover:text-pink-500 duration-400 transition-all">
                  MATHCUL
                </h1>
              </div>
            </div>
          </div>

          <div className="justify-center md:hidden">
            <div
              onClick={handleButtonClick}
              className="text-white text-2xl mt-1 hover:text-pink-500 duration-100"
            >
              <IoMenu />
            </div>
            {isMenuOpen && (
              <div ref={sidebarRef} className=" shadow-pink-500 fixed top-0 right-0 w-3/4 h-full p-5 bg-black shadow-lg text-xl animate__animated animate__slideInRight flex flex-col z-50">
                {/* Tombol X di kanan atas */}
                <div
                  onClick={handleButtonClick}
                  className="text-white hover:text-pink-500 duration-100 animate__animated animate__fadeInUp fixed top-5 right-5 z-50"
                >
                  <BsXLg size={24} />
                </div>
                <div className="mt-5">
                  <div onClick={() => handleClick("home")}>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/mathcul.png"
                        height={50}
                        width={50}
                        alt="MATHCUL LOGO"
                        className="cursor-pointer rounded-full border border-white"
                      />
                      <h1 className="md:hidden lg:flex font-bold text-xl lg:text-2xl text-white hover:text-pink-500 duration-400 transition-all">
                        MATHCUL
                      </h1>
                    </div>
                  </div>
                </div>
                <p className="text-white text-sm font-semibold italic mt-8">
                  Inovasi Bisnis DIgital Game Online Sebagai Media Pembelajaran Etnomatematika
                </p>
                <div className="border-pink-500 border-t-2 mt-3"></div>

                {/* Daftar menu di bawah logo */}
                <div className="mt-10 flex flex-col gap-4">
                  <HeaderButton section="GAME" onClick={() => handleClick("home")} />
                  <HeaderButton section="WAKTU" onClick={() => handleClick("about")} />
                  <HeaderButton section="KARAKTER" onClick={() => handleClick("karakter")} />
                  <HeaderButton section="ABOUT US" onClick={() => handleClick("education")} />
                  <HeaderButton section="TUTORIAL" onClick={() => handleClick("tutorial")} />
                </div>
                <div className="fixed bottom-4">
                  <div onClick={() => handleClick("home")}>
                    <div onClick={handleToast} className="flex items-center gap-2">
                      <Image
                        src="/images/play_store.jpg"
                        height={140}
                        width={140}
                        alt="WEAPMATH LOGO"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:flex gap-10 xl:gap-12">
            <HeaderButton section="GAME" onClick={() => handleClick("home")} />
            <HeaderButton section="WAKTU" onClick={() => handleClick("about")} />
            <HeaderButton section="KARAKTER" onClick={() => handleClick("karakter")} />
            <HeaderButton section="ABOUT US" onClick={() => handleClick("education")} />
            <HeaderButton section="TUTORIAL" onClick={() => handleClick("tutorial")} />
          </div>
          <div onClick={handleToast} className="hidden lg:block">
            <button className="bg-pink-600 rounded-md px-5 py-1.5 text-white hover:bg-pink-400 duration-500 text-lg font-semibold">
              MAINKAN GAME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

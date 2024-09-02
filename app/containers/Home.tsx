"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { toast } from "react-hot-toast";
import as_sum1 from "@/public/images/beranda/P1.png";
import as_sum2 from "@/public/images/beranda/P2.png";

const HomeLayout: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const [toastActive, setToastActive] = useState(false);

  const handleClick = () => {
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
    <div id="home" className="flex justify-center mx-auto  h-screen py-32">
      <div className="lg:w-1/2">
        <div className="relative text-left" data-aos="zoom-in" data-aos-duration="10000">

          {/* SIZE DESKTOP */}
          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/images/beranda/gambar.gif"
              width={250}
              height={250}
              alt="Character image"
              className="object-cover z-50"
            />
            <Image
              src={as_sum1}
              width={250}
              height={250}
              alt="logo"
              className="object-cover absolute"
            />
            <Image
              src={as_sum2}
              width={250}
              height={250}
              alt="logo"
              className="object-cover absolute z-50"
            />
          </div>
          {/* SIZE DESKTOP END */}

          {/* SIZE MOBILE */}
          <div className="flex md:hidden items-center justify-center">
            <Image
              src="/images/beranda/gambar.gif"
              width={150}
              height={150}
              alt="Character image"
              className="object-cover z-50"
            />
            <Image
              src={as_sum1}
              width={150}
              height={150}
              alt="logo"
              className="object-cover absolute"
            />
            <Image
              src={as_sum2}
              width={150}
              height={150}
              alt="logo"
              className="object-cover absolute z-50"
            />
          </div>
          {/* SIZE MOBILE END */}

          <div className="lg:hidden inline-block mt-10 mx-10 text-xl font-serif font-bold text-white">
            <h1>
              <span className="text-pink-400">MATHCUL</span> ADALAH GAME BATTLE{" "}
              <span className="text-pink-400">ONLINE</span> YANG{" "}
              <span className="text-pink-400">BERBASIS</span> MULTIPLAYER
            </h1>
            <p className="pt-4 text-sm text-white duration-500">
              Pemain akan disediakan tiga room dengan masing-masing room merupakan
              tingkatan kelas di SMP. Tujuan pemain yakni menghancurkan monster dengan
              senjata yang telah disediakan. Senjata didalamnya terdapat soal matematika
              yang harus dipecahkan solusinya.
            </p>
          </div>

          <div className="lg:inline-block hidden mt-10 mx-10 text-2xl font-serif font-bold text-white">
            <h1>
              <span className="text-pink-400">MATHCUL</span> ADALAH GAME BATTLE{" "}
              <span className="text-pink-400">ONLINE</span> YANG{" "}
              <span className="text-pink-400">BERBASIS</span> MULTIPLAYER
            </h1>
            <p className="pt-4 text-sm text-white duration-500">
              Pemain akan disediakan tiga room dengan masing-masing room merupakan
              tingkatan kelas di SMP. Tujuan pemain yakni menghancurkan monster dengan
              senjata yang telah disediakan. Senjata didalamnya terdapat soal matematika
              yang harus dipecahkan solusinya.
            </p>
          </div>

        </div>
        <button
          className="lg:hidden inline-block mx-10 mt-4 items-center justify-center animate-pulse duration-100"
          onClick={handleClick}
        >
          <Image
            src="/images/play_store.jpg"
            height={125}
            width={125}
            alt="MATHCUL LOGO"
            className="cursor-pointer shadow-md"
          />
        </button>
        <button
          className="lg:inline-block hidden mx-10 mt-2 items-center justify-center animate-pulse duration-100"
          onClick={handleClick}
        >
          <Image
            src="/images/play_store.jpg"
            height={170}
            width={170}
            alt="MATHCUL LOGO"
            className="cursor-pointer shadow-md pb-10"
          />
        </button>
      </div>
    </div>
  );
};

export default HomeLayout;

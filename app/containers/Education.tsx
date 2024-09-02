import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div
      id="education"
      className="mx-auto py-20 pb-36 items-center bg-gradient-to-r from-purple-950 to-black"
      data-aos="slide-up"
      data-aos-duration="2000"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h1
          className="text-white text-2xl ml-2 lg:text-4xl sm:text-5xl dark:text-gray-400 font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 5)" }}
        >
          BERTEMU TIM KAMI
        </h1>
        <br />
      </div>

      <div
        className="flex items-center justify-center mx-10 ml-12"
        data-aos="flip-up"
        data-aos-duration="2000"
      >
        <Image
          src={"/images/BISMILLAH.png"}
          width={1000}
          height={500} alt="anggota"
          className="rounded-lg border border-white"
        />
      </div>
    </div>
  );
};

export default Education;

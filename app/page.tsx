import Header from "@/app/containers/Header";
import HomeLayout from "@/app/containers/Home";
import About from "@/app/containers/About";
import Education from "@/app/containers/Education";
import Achievements from "@/app/containers/Achievements";
import Contact from "@/app/containers/Contact";
import Head from "next/head";
import Downloadd from "@/app/containers/Downloadku"
import Tentang from '@/app/containers/Tentang';
import React from "react";
// import ComingSoon from "@/app/containers/comingsoon";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/public/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <main className="max-w-screen overflow-x-hidden bg-black dark:bg-white">
        <Header />
        <HomeLayout />
        <Tentang />
        <About />
        <Education />
        <Achievements />
        <Contact />
        <Downloadd/>
        {/* <ComingSoon /> */}
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

type ProjectsCardProps = {
  path: string;
  title: string;
  desc: string;
  href: string;
};

export default function ProjectsCard({
  path,
  title,
  desc,
  href,
}: ProjectsCardProps) {
  return (
    <div className=" bg-neutral-800 rounded-xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
      <div className="w-full h-1/4 bg-white rounded-lg p-10 ">
        <Image
          src={path}
          width={200}
          height={200}
          alt="pics"
          className="flex items-center mx-auto"
        />
      </div>
      <div className="">
        <p className="font-bold">{title}</p>
        <p className="max-sm:hidden">{desc}</p>
      </div>
      <div className="gap-4 flex">
        <Link href={href} target="blank">
          <button className="bg-sky-700 font-bold text-white p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
            See more
          </button>
        </Link>
        <div className="flex items-center gap-4 text-2xl">
          <SiNextdotjs />
          <SiTypescript />
          <SiReact />
          <SiTailwindcss />
        </div>
      </div>
    </div>
  );
}

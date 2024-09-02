import Image from "next/image";
import Link from "next/link";

interface EducationBoxProps {
  year: string;
  major: string;
  school: string;
  grade: string;
  logo: string;
  list1: string;
  list2: string;
  list3: string;
  link: string;
}

const EducationBox = ({
  year,
  major,
  school,
  grade,
  logo,
  list1,
  list2,
  list3,
  link,
}: EducationBoxProps) => {
  return (
    <div className="mt-8 lg:mt-[150px] dark:bg-neutral-800 dark:text-neutral-300 lg:w-1/2 rounded-xl hover:shadow-xl dark:hover:shadow-sky-400 hover:shadow-[#FFBD39] transition-shadow">
      <div className="bg-[#FFFFFF1A] p-8 lg:py-8 lg:pl-8 rounded-xl flex justify-between">
        <div>
          <h1 className=" text-[#FFBD39] dark:text-[#38bdf8] font-bold text-xl lg:text-2xl">
            {year}
          </h1>
          <h1 className=" text-white text-2xl lg:text-[27px] mt-2">{major}</h1>
          <h1 className="text-[#999999] text-md font-semibold mt-3">
            {school}
          </h1>
          <h1 className="text-[#999999] text-sm mt-3">
            {grade} <br />
            Experience:
            <ul className="list-disc ml-4">
              <li>{list1}</li>
              <li>{list2}</li>
              <li>{list3}</li>
            </ul>
          </h1>
        </div>
        <div className="w-[150px] lg:w-[120px]">
          <Link href={link} target="_blank">
            <Image src={logo} width={125} height={100} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EducationBox;

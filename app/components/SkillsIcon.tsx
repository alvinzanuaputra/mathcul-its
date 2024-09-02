interface SkillsIconProps {
  icon: React.ReactNode;
  title: string;
  duration: string;
}

const SkillsIcon = ({ icon, title, duration }: SkillsIconProps) => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center group cursor-pointer p-2"
      data-aos="flip-up"
      data-aos-duration={duration}
    >
      <div className="absolute transition-opacity duration-500 group-hover:opacity-0 group-hover:pointer-events-none text-[#FFBD39] dark:text-[#38bdf8] text-4xl md:text-6xl lg:text-[75px] font-semibold">
        {icon}
      </div>
      <div className="absolute flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100 max-md:text-[10px] lg:text-xl text-white font-light hover:text-[#FFBD39] dark:hover:text-[#38bdf8]">
        {title}
      </div>
    </div>
  );
};

export default SkillsIcon;

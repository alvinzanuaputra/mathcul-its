import { BsArrowUpRight } from "react-icons/bs";

type HeaderButtonProps = {
  section: string;
  onClick: () => void;
};

export default function HeaderButton({ section, onClick }: HeaderButtonProps) {
  return (
    <button
      className="flex items-center text-md border-b-2 border-solid border-white border-opacity-0 font-medium text-white hover:border-pink-500 focus:text-pink-500 focus:pink-600 focus:border-pink-500 focus:duration-500 transition duration-500 lg:text-lg text-md"
      onClick={onClick}
    >
      {section}
      <BsArrowUpRight size={20} />
    </button>
  );
}

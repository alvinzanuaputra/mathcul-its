type HeaderMobileButtonProps = {
  section: string;
  onClick: () => void;
};

export default function HeaderMobileButton({
  section,
  onClick,
}: HeaderMobileButtonProps) {
  return (
    <li>
      <button
        className="font-base  border-b-2 border-solid border-white border-opacity-0 font-medium text-white white hover:border-green-500 focus:text-green-500 focus:green-600 focus:border-green-500 focus:duration-500 transition duration-500"
        onClick={onClick}
      >
        {section}
      </button>
    </li>
  );
}

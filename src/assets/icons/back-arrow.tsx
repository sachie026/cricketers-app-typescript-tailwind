interface Props {
  onClick?: () => void;
  text?: string;
}

const BackIcon = ({ onClick, text }: Props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
        onClick={onClick && onClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>

      {text ? (
        <label className="ml-2 text-md cursor-pointer">{text}</label>
      ) : null}
    </>
  );
};

export default BackIcon;

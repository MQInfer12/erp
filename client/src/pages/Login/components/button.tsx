import IconChevronRight from "../../../icons/iconChevronRight";

const Button = () => {
  return (
    <button
      type="submit"
      className="h-10 aspect-square max-w-max self-end bg-sky-700 p-3 mt-10 hover:opacity-80 transition-all duration-300"
    >
      <IconChevronRight />
    </button>
  );
};

export default Button;

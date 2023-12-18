interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
}

const IconButton = ({ icon, ...props }: Props) => {
  return <button {...props} className="h-9 p-2 aspect-square text-neutral-500 hover:opacity-80 transition-all duration-300">{icon}</button>;
};

export default IconButton;

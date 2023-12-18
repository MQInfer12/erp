import { NavLink as RouterLink } from "react-router-dom";
import styles from "./link.module.css";

interface Props {
  to: string;
  children: string;
}

const Link = ({ to, children }: Props) => {
  return (
    <RouterLink
      className={styles.link + " block w-full text-sm py-1 rounded-md px-2 text-gray-400 transition-all duration-300"}
      to={to}
    >
      {children}
    </RouterLink>
  );
};

export default Link;

import styles from "../../dashboard.module.css";
import Left from "./left";

const Aside = () => {
  return (
    <aside className={styles.aside + " grid grid-cols-[auto_1fr] w-80 h-screen bg-gray-700 border-r border-gray-800"}>
      <Left />
    </aside>
  );
};

export default Aside;

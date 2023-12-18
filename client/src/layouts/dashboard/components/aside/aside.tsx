import { useState } from "react";
import styles from "../../dashboard.module.css";
import Left from "./left";
import Right from "./right";

const Aside = () => {
  const [page, setPage] = useState(1);

  return (
    <aside className={styles.aside + " grid grid-cols-[auto_1fr] w-80 h-screen bg-gray-700 border-r border-gray-800"}>
      <Left page={page} setPage={setPage} />
      <Right page={page} />
    </aside>
  );
};

export default Aside;

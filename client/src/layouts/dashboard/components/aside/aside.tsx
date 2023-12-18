import { useState } from "react";
import styles from "../../dashboard.module.css";
import Left from "./left";
import Right from "./right";

interface Props {
  open: boolean;
}

const Aside = ({ open }: Props) => {
  const [page, setPage] = useState(1);

  return (
    <aside
      className={
        styles.aside +
        " z-50 isolate grid grid-cols-[auto_1fr] w-80 h-screen bg-gray-700 border-r border-gray-800 fixed lg:static "
      }
    >
      <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-20 -z-10 lg:hidden" />
      <Left page={page} setPage={setPage} />
      <Right page={page} />
    </aside>
  );
};

export default Aside;

import { Outlet } from "react-router-dom";
import styles from "./dashboard.module.css";
import Aside from "./components/aside/aside";
import Header from "./components/header/header";
import { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dashboard}>
      <Aside open={open} />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

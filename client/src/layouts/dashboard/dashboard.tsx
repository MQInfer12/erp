import { Outlet } from "react-router-dom";
import styles from "./dashboard.module.css";
import Aside from "./components/aside/aside";
import Header from "./components/header/header";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Aside />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

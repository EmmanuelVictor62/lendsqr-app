import React from "react";

import Sidebar from "@/components/Sidebar/sidebar";
import Navbar from "@/components/Navbar";

import styles from "./dashboard.module.scss";

interface DashboardProps {
  name?: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className={styles["dashboard"]}>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Dashboard;

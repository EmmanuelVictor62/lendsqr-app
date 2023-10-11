import React from "react";

import Layout from "@/components/Layout";

import styles from "./dashboard.module.scss";

interface DashboardProps {
  name?: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Layout>
      <div className={styles["dashboard"]}>
        <h1 className={styles["dashboard__heading"]}>Users</h1>
      </div>
    </Layout>
  );
};

export default Dashboard;

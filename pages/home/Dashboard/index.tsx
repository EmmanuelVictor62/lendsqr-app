import React from "react";
import { useRouter } from "next/router";

import UsersTable from "../Users/UsersTable";

import { usersMockData } from "@/util/constants";

import styles from "./dashboard.module.scss";

interface DashboardProps {
  name?: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  const router = useRouter();

  const handleNavigateToUserDetails = () => {
    router.push("/dashboard/users");
  };

  return (
    <div className={styles["dashboard"]}>
      <div className={styles["dashboard__heading-container"]}>
        <h1 className={styles["dashboard__heading"]}>Users</h1>
        <button className={styles["dashboard__heading-button"]}>
          Add Users
        </button>
      </div>

      <div className={styles["dashboard__users-table-card-wrapper"]}>
        <UsersTable
          users={usersMockData}
          handleNavigateToUserDetails={() => handleNavigateToUserDetails()}
        />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { useNavigate } from "react-router-dom";

import UsersTable from "./UsersTable";
import Icon from "@/components/Icon";

import { usersMockData } from "@/util/constants";

import styles from "./dashboard.module.scss";

interface DashboardProps {
  name?: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  const navigate = useNavigate();

  const handleNavigateToUserDetails = (userId: string) => {
    navigate(`/home/users/details/:${userId}`);
  };

  return (
    <div className={styles["dashboard"]}>
      <div className={styles["dashboard__heading-container"]}>
        <h1 className={styles["dashboard__heading"]}>Users</h1>
        <button className={styles["dashboard__heading-button"]}>
          Add Users
        </button>
      </div>

      <div className={styles["dashboard__users-table-wrapper"]}>
        <div className={styles["dashboard__users-table"]}>
          <div className={styles["dashboard__users-table-heading-container"]}>
            <button className={styles["dashboard__users-table-heading"]}>
              Organization
              <Icon icon="filter" />
            </button>
            <button className={styles["dashboard__users-table-heading"]}>
              Username
              <Icon icon="filter" />
            </button>
            <button className={styles["dashboard__users-table-heading"]}>
              Email
              <Icon icon="filter" />
            </button>
            <button className={styles["dashboard__users-table-heading"]}>
              Phone Number
              <Icon icon="filter" />
            </button>
            <button className={styles["dashboard__users-table-heading"]}>
              Date Joined
              <Icon icon="filter" />
            </button>
            <button className={styles["dashboard__users-table-heading"]}>
              Status
              <Icon icon="filter" />
            </button>
          </div>
          <ul className={styles["dashboard__users-table-card-wrapper"]}>
            {usersMockData?.map((user, index) => {
              return (
                <div key={index + 1}>
                  <UsersTable
                    user={user}
                    handleNavigateToUserDetails={() =>
                      handleNavigateToUserDetails(user?.id)
                    }
                  />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";

import Layout from "@/components/Layout";
// import UserCard from "@/components/UserCard";

import UsersTable from "./UsersTable";

import { usersMockData } from "@/util/constants";

import styles from "./dashboard.module.scss";

interface DashboardProps {
  name?: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Layout>
      <div className={styles["dashboard"]}>
        <div className={styles["dashboard__heading-container"]}>
          <h1 className={styles["dashboard__heading"]}>Users</h1>
          <button className={styles["dashboard__heading-button"]}>
            Add Users
          </button>
        </div>
        {/* <div className={styles["dashboard__card-wrapper"]}>
          {userCardContent.map((card, index) => {
            return (
              <div className={styles["dashboard__card"]} key={index + 1}>
                <UserCard
                  iconName={card.iconName}
                  cardName={card.cardName}
                  cardNumber={card.cardNumber}
                  iconBackground={card.iconBackground}
                />
              </div>
            );
          })}
        </div> */}
        <div className={styles["dashboard__users-table-card-wrapper"]}>
          <UsersTable users={usersMockData} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

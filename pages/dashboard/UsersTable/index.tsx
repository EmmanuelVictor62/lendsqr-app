import React from "react";

import Icon from "@/components/Icon";
import { userTableCardType } from "@/types/type";

import styles from "./users-table.module.scss";

interface UsersTableProps {
  users: userTableCardType;
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  return (
    <div className={styles["user-table"]}>
      <div className={styles["user-table__heading-container"]}>
        <button className={styles["user-table__heading"]}>
          Organization
          <Icon icon="filter" />
        </button>
        <button className={styles["user-table__heading"]}>
          Username
          <Icon icon="filter" />
        </button>
        <button className={styles["user-table__heading"]}>
          Email
          <Icon icon="filter" />
        </button>
        <button className={styles["user-table__heading"]}>
          Phone Number
          <Icon icon="filter" />
        </button>
        <button className={styles["user-table__heading"]}>
          Date Joined
          <Icon icon="filter" />
        </button>
        <button className={styles["user-table__heading"]}>
          Status
          <Icon icon="filter" />
        </button>
      </div>

      <ul className={styles["user-table__card-wrapper"]}>
        {users?.map((user, index) => {
          return (
            <li className={styles["user-table__card"]} key={index + 1}>
              <p className={styles["user-table__card-organization"]}>
                {user?.organization}
              </p>
              <p className={styles["user-table__card-username"]}>
                {user?.username}
              </p>
              <p className={styles["user-table__card-email"]}>{user?.email}</p>
              <p className={styles["user-table__card-phone-no"]}>
                {user?.phoneNumber}
              </p>
              <p className={styles["user-table__card-date-joined"]}>
                {user?.dateJoined}
              </p>

              <div
                className={styles["user-table__card-status"]}
                data-status={user?.status}
              >
                {user?.status}
              </div>

              <div className={styles["user-table-card__dropdown-container"]}>
                <button className={styles["user-table-card__dropdown-icon"]}>
                  <Icon icon="ellipse" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersTable;

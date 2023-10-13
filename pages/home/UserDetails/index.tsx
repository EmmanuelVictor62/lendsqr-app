import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Icon from "@/components/Icon";
import Tab from "@/components/Tab";

import GeneralDetails from "./GeneralDetails";
import { TabHeaderType } from "@/types/type";

import styles from "./user-details.module.scss";
interface UserDetailsProps {
  name?: string;
}

const UserDetails: React.FC<UserDetailsProps> = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate("/home");
  };

  const handleActiveTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const TabList: Record<TabHeaderType, JSX.Element> = {
    "General Details": <GeneralDetails />,
    Documents: <p>Add a new document</p>,
    Loans: <p>This is the loan tab</p>,
  };

  const tabContent = Object.values(TabList);

  return (
    <div className={styles["user-details__wrapper"]}>
      <button
        className={styles["user-details__button"]}
        onClick={handleBackToDashboard}
      >
        <Icon icon="arrowLeft" />
        Back to Users
      </button>

      <div className={styles["user-details__heading-container"]}>
        <h2 className={styles["user-details__heading"]}>User Details</h2>
        <div className={styles["user-details__heading-button-container"]}>
          <button className={styles["user-details__heading-button--blacklist"]}>
            Blacklist User
          </button>
          <button className={styles["user-details__heading-button--activate"]}>
            Activate User
          </button>
        </div>
      </div>

      <div className={styles["user-details__preview-wrapper"]}>
        <div className={styles["user-details__preview-content-container"]}>
          <div className={styles["user-details__preview-image-container"]}>
            <div className={styles["user-details__preview-image"]}></div>
          </div>
          <div className={styles["user-details__preview-name-container"]}>
            <h2 className={styles["user-details__preview-name"]}>
              Grace Effiom
            </h2>
            <p className={styles["user-details__preview-name-id"]}>
              LSQFf587g90
            </p>
          </div>
          <div className={styles["user-details__preview-account-container"]}>
            <h2 className={styles["user-details__preview-account-balance"]}>
              #200,000
            </h2>
            <p className={styles["user-details__preview-account-bank"]}>
              Providus Bank
            </p>
          </div>
        </div>
        <div className={styles["user-details__preview-tab-container"]}>
          <Tab
            tabList={TabList}
            activeTab={activeTab}
            handleActiveTab={handleActiveTab}
          />
        </div>
      </div>

      <div className={styles["user-details__info-wrapper"]}>
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default UserDetails;

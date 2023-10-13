import React from "react";

import { TabListType } from "@/types/type";
import styles from "./tab.module.scss";

interface TabProps {
  tabList: TabListType;
  activeTab?: number;
  handleActiveTab: (tabIndex: number) => void;
}

const Tab: React.FC<TabProps> = ({ tabList, activeTab, handleActiveTab }) => {
  return (
    <div className={styles["tab__button-wrapper"]}>
      {tabList.map((tab, index) => {
        return (
          <button
            className={styles["tab__button"]}
            key={index + 1}
            data-active={activeTab === index + 1}
            onClick={() => handleActiveTab(index + 1)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;

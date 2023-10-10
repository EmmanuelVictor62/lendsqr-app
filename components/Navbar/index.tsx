import React from "react";

import Icon from "@/components/Icon";

import styles from "./navbar.module.scss";

interface NavbarProps {
  userName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ userName }) => {
  return (
    <header className={styles["navbar"]}>
      <div className={styles["navbar__logo-container"]}>
        <Icon icon="appLogo" />
      </div>
      <div className={styles["navbar__input-container"]}>
        <input
          type="text"
          placeholder="Search for anything"
          className={styles["navbar__input"]}
        />
        <div className={styles["navbar__input-search-icon-container"]}>
          <Icon icon="search" />
        </div>
      </div>
      <div className={styles["navbar__right-container"]}></div>
    </header>
  );
};

export default Navbar;

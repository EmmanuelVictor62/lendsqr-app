import React from "react";

import Sidebar from "../Sidebar/sidebar";
import Navbar from "@/components/Navbar";

import styles from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles["main__wrapper"]}>
      <Navbar userName="Adedeji" />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;

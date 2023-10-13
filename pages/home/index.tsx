import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Sidebar from "@/components/Sidebar/sidebar";
import Navbar from "@/components/Navbar";

import Dashboard from "./Dashboard/index";
import Users from "./Users";

import styles from "./home.module.scss";
import UserDetails from "./UserDetails";

const Home: React.FC = () => {
  return (
    <div className={styles["home"]}>
      <Router>
        <div className={styles["home__content-wrapper"]}>
          <Navbar userName="Adedeji" />
          <Sidebar />

          <div className={styles["home__content"]}>
            <Routes>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/home/users" element={<Users />} />
              <Route path="/home/users/details/:id" element={<UserDetails />} />
              <Route path="/home/guarantors" element={<p>Guarantors</p>} />
              <Route path="/home/services" element={<p>Services</p>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Home;

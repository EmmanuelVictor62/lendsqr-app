import React from "react";
import styles from "./login.module.scss";

interface loginPageProps {
  name?: string;
}

const LoginPage: React.FC<loginPageProps> = () => {
  return (
    <div className={styles["login-page"]}>
      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

export default LoginPage;

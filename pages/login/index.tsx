import React from "react";

import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Input from "@/components/Input/input";

import styles from "./login.module.scss";
interface loginPageProps {
  name?: string;
}

const LoginPage: React.FC<loginPageProps> = () => {
  return (
    <div className={styles["login-page"]}>
      <div className={styles["login-page__image-wrapper"]}>
        <div className={styles["login-page__image-container"]}>
          <div className={styles["login-page__image-logo"]}>
            <Icon icon="appLogo" />
          </div>

          <div className={styles["login-page__image-image"]}>
            <Icon icon="loginImage" />
          </div>
        </div>
      </div>

      <div className={styles["login-page__form-wrapper"]}>
        <div className={styles["login-page__form-container"]}>
          <div className={styles["login-page__form-heading-container"]}>
            <h1 className={styles["login-page__form-heading"]}>Welcome!</h1>
            <p className={styles["login-page__form-subheading"]}>
              Enter details to login
            </p>
          </div>
          <div className={styles["login-page__form-container"]}>
            <div className={styles["login-page__form-input-container"]}>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                required={true}
                inputVariant="large"
              />
              <Input
                type="password"
                placeholder="Password"
                name="password"
                required={true}
                inputVariant="large"
              />
            </div>

            <div className={styles["login-page__form-button"]}>
              <Button
                type="button"
                variant="primary"
                label="LOG IN"
                name="button"
                handleClickEvent={() => console.log("Button Clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";

import styles from "./general-details.module.scss";

interface DetailsProps {
  details?: {};
}

const GeneralDetails: React.FC<DetailsProps> = () => {
  return (
    <div className={styles["general-details__container"]}>
      <p className={styles["general-details__heading"]}>Personal Information</p>
      <div className={styles["general-details__content-column"]}>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Full Name
          </p>
          <p className={styles["general-details__content"]}>Grace Effion</p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Phone Number
          </p>
          <p className={styles["general-details__content"]}>07060780922</p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Email Address
          </p>
          <p className={styles["general-details__content"]}>grace@gmail.com</p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>Gender</p>
          <p className={styles["general-details__content"]}>Female</p>
        </div>
      </div>

      <p className={styles["general-details__heading"]}>Education </p>
      <div className={styles["general-details__content-column"]}>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Level of Education
          </p>
          <p className={styles["general-details__content"]}>B.Sc</p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Employment Status
          </p>
          <p className={styles["general-details__content"]}>Employed</p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Sector Of Employment
          </p>
          <p className={styles["general-details__content"]}>FinTech</p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Office Email
          </p>
          <p className={styles["general-details__content"]}>
            grace@lendsqr.com
          </p>
        </div>
      </div>

      <p className={styles["general-details__heading"]}>Guarantor</p>
      <div className={styles["general-details__content-column"]}>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Full Name
          </p>
          <p className={styles["general-details__content"]}>Grace Effion</p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Phone Number
          </p>
          <p className={styles["general-details__content"]}>07060780922</p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Relationship
          </p>
          <p className={styles["general-details__content"]}>Sister</p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>Gender</p>
          <p className={styles["general-details__content"]}>Female</p>
        </div>
        <div className={styles["general-details__content-container"]}>
          <p className={styles["general-details__content-heading"]}>
            Office Email
          </p>
          <p className={styles["general-details__content"]}>
            guarantor@lendsqr.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;

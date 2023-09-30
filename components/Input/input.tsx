import React, { useState } from "react";

import styles from "./input.module.scss";

type InputType = "text" | "password" | "number" | "email" | "submit";
type InputVariant = "small" | "medium" | "large";

interface InputProps {
  icon?: string;
  type: InputType;
  placeholder?: string;
  label?: string;
  name: string;
  required?: boolean;
  inputVariant?: InputVariant;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  label,
  required,
  inputVariant,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordField = () => {
    setShowPassword(!showPassword);
  };

  const inputType =
    type !== "password" ? type : showPassword ? "password" : "text";

  return (
    <div className={styles["input__wrapper"]}>
      <div className={styles["input__label-container"]}>
        {label && <label htmlFor="{name}">{label}</label>}
        {required && <span className={styles["input__label-required"]}>*</span>}
      </div>

      <div className={styles["input__container"]} data-variant={inputVariant}>
        <input
          type={inputType}
          placeholder={placeholder}
          required={required}
          name={name}
        />

        <button
          className={styles["input__toggle-button"]}
          onClick={() => togglePasswordField()}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </button>
      </div>
    </div>
  );
};

export default Input;

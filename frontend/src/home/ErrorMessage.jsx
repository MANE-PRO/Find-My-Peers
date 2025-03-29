import React, { useState } from "react";
import styles from "./ErrorMessage.module.css"; // Import CSS module

const ErrorMessage = ({ message }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={styles["error-container"]}>
      <span className={styles["error-text"]}>{message}</span>
      <button className={styles["error-close"]} onClick={() => setVisible(false)}>❌</button>
    </div>
  );
};

export default ErrorMessage;

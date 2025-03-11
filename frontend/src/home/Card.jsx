import React from "react";
import styles from "./Card.module.css";

const Card = ({ prof }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{prof.name}</h3>
        <p className={styles.description}>{prof.email}</p>
        <p className={styles.description}>{prof.opt_email}</p>
        <p className={styles.description}>{prof.phone}</p>
        <p className={styles.description}>{prof.psstation}</p>
        <p className={styles.description}>{prof.pslocation}</p>
      </div>
    </div>
  );
};

export default Card;

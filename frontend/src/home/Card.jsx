import React from "react";
import styles from "./Card.module.css";

const Card = ({ prof }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{prof.name}</h3>
        <p className={styles.description}>EMAIL: {prof.email}</p>
        <p className={styles.description}>PHONE: {prof.phone}</p>
        <p className={styles.description}>PS STATION: {prof.psstation}</p>
        <p className={styles.description}>PS LOCATION: {prof.pslocation}</p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import styles from "./Card.module.css";
import axios from "axios";
const Card = ({ prof }) => {
  const handleClick = async () => {
    try{
        const response = await axios.post("http://localhost:8000/users/request", {email: prof.email});
    }
    catch(err){
        console.log(err);
    }
  }
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{prof.name}</h3>
        <p className={styles.description}>BITS EMAIL: {prof.email}</p>
        <p className={styles.description}>PERSONAL EMAIL: {prof.opt_email}</p>
        <p className={styles.description}>PHONE: {prof.phone}</p>
        <p className={styles.description}>PS STATION: {prof.psstation}</p>
        <p className={styles.description}>PS LOCATION: {prof.pslocation}</p>
        <button className={styles.button} onClick={handleClick}>Connect</button>
      </div>
    </div>
  );
};

export default Card;

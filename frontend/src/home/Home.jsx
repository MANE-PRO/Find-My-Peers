import React from "react";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.container}>
      {/* Navigation Bar with Buttons */}
      <div className={styles.navbar}>
        <button className={styles.button}>Profile</button>
        <button className={styles.button}>Reset Filters</button>
        <button className={styles.button} onClick={props.logout}>Logout</button>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Our Platform</h1>
        <p className={styles.subtitle}>Experience seamless interaction with our services.</p>
      </div>
    </div>
  );
};

export default Home;

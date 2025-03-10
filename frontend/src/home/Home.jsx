import React from "react";
import styles from "./Home.module.css";
import Modal from "./Modal";
import {useState} from "react";
const Home = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* Navigation Bar with Buttons */}
      <div className={styles.navbar}>
        <button onClick={() => setIsModalOpen(true)} className={styles.button}>Profile</button>
        <Modal isOpen={isModalOpen} modifyUser={(data) => {props.modifyUser(data)}} user={props.user} onClose={() => setIsModalOpen(false)} />
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

import React from "react";
import styles from "./Home.module.css";
import Modal from "./Modal";
import {useState} from "react";
import Card from "./Card";
const Home = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //console.log(props.otherUser);
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
        {props.otherUser.map((user) => {
          return <Card key={user.id} prof={user}/>
        })}
      </div>
    </div>
  );
};

export default Home;

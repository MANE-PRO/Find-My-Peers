import React from "react";
import styles from "./Home.module.css";
import Modal from "./Modal";
import {useState} from "react";
import Card from "./Card";
import Navbar from "./Navbar";
const Home = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //console.log(props.otherUser);
  const handleModal = () => {
    setIsModalOpen(true);
  }

  return (
    <div className={styles.container}>
      {/* Navigation Bar with Buttons */}
      <Modal isOpen={isModalOpen} modifyUser={(data) => {props.modifyUser(data)}} user={props.user} onClose={() => setIsModalOpen(false)} />
      <Navbar logout={props.logout} modalon={handleModal} modifyOtherUser={props.modifyOtherUser}/>
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

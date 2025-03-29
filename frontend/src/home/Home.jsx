import React from "react";
import styles from "./Home.module.css";
import Modal from "./Modal";
import {useState} from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import ErrorMessage from "./ErrorMessage";
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
      <div className={styles.nav}>
      <Navbar logout={props.logout} modalon={handleModal} />
      </div>
      <div className={styles.err}>
      {(props.user.phone === "" || props.user.psstation === "" || props.user.pslocation === "") ? <ErrorMessage message="Incomplete Profile!" />: undefined}
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

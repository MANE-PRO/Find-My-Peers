import React from "react";
import styles from "./Home.module.css";
import Modal from "./Modal";
import {useState} from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import FilterForm from "./FIlter";
import ErrorMessage from "./ErrorMessage";
const Home = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ouser, setOuser] = useState(props.otherUser);
  const [resetChild, setResetChild] = useState(1);
  //console.log(props.otherUser);
  const handleModal = () => {
    setIsModalOpen(true);
  }
  
  const handleSearch = (data) =>{
    let nwuser = props.otherUser;
    if(data.name.length > 0)
      nwuser = nwuser.filter((user) => user.name === data.name);
    if(data.psstation.length > 0)
      nwuser = nwuser.filter((user) => user.psstation === data.psstation);
    if(data.pslocation.length > 0)
      nwuser = nwuser.filter((user) => user.pslocation === data.pslocation);
    setOuser(nwuser);
  }

  const handleReset = () =>{
    setOuser(props.otherUser);
    if(resetChild === 1)
      setResetChild(0);
    else
      setResetChild(1);
  }

  return (
    <div className={styles.container}>
      {/* Navigation Bar with Buttons */}
      <Modal isOpen={isModalOpen} modifyUser={(data) => {props.modifyUser(data)}} user={props.user} onClose={() => setIsModalOpen(false)} />
      <div className={styles.nav}>
      <Navbar logout={props.logout} modalon={handleModal} reset={handleReset}/>
      </div>
      <div className={styles.filter}>
      <FilterForm onSearch={(data) => {handleSearch(data)}} key={resetChild}/>
      </div>
      <div className={styles.err}>
      {(props.user.phone === "" || props.user.psstation === "" || props.user.pslocation === "") ? <ErrorMessage message="Incomplete Profile!" />: undefined}
      </div>
      {/* Main Content */}
      <div className={styles.content}>
        {ouser.length > 0 ? ouser.map((user) => {
          return <Card key={user.id} prof={user}/>
        }) : <p>No Such User!</p>}
      </div>
    </div>
  );
};

export default Home;

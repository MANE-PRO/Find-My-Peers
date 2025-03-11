import React from "react";
import axios from "axios";
import styles from "./Navbar.module.css";
const Navbar = (props) => {
    const getNewUser = async() =>{
        try{
        const response = await axios.get("http://localhost:8000/users/request");
        props.modifyOtherUser(response.data.users);
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <div className={styles.navbar}>
            <button onClick={props.modalon} className={styles.button}>Profile</button>
            <button className={styles.button}>Reset Filters</button>
            <button className={styles.button}>Connections</button>
            <button className={styles.button} onClick={getNewUser}>Connection Request</button>
            <button className={styles.button} onClick={props.logout}>Logout</button>
        </div>
    );
}

export default Navbar;
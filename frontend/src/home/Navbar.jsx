import React from "react";
import styles from "./Navbar.module.css";
const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <button onClick={props.modalon} className={styles.button}>Profile</button>
            <button className={styles.button}>Reset Filters</button>
            <button className={styles.button} onClick={props.logout}>Logout</button>
        </div>
    );
}

export default Navbar;
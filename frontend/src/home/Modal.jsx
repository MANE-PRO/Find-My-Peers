import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import axios from "axios";
import {useRef} from "react";
const Modal = ({ isOpen, onClose, user, modifyUser }) => {
  const persRef = useRef();
  const phoneRef = useRef();
  const psStRef = useRef();
  const psLocRef = useRef();
  
  if (!isOpen) return null; // Do not render if modal is closed

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = {
      personalEmail: persRef.current.value,
      phone: phoneRef.current.value,
      psStation: psStRef.current.value,
      psLocation: psLocRef.current.value
    }
    try{
      const response = await axios.post("http://localhost:8000/user/save", formData);
      modifyUser(response.data.user);
    }catch(error){
      console.log(error);
    }
    
    onClose();
  }

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <h2 className={styles.title}>User Information</h2>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit} >
          <label>Name:</label>
          <input type="text" value={user.name} readOnly />

          <label>BITS Email:</label>
          <input type="email" value={user.email} readOnly />

          <label>Personal Email:</label>
          <input type="email" placeholder="Enter your personal email" ref={persRef} defaultValue={user.opt_email}/>

          <label>Phone:</label>
          <input type="tel" placeholder="Enter your phone number" ref={phoneRef} defaultValue={user.phone}/>

          <label>PS Station:</label>
          <input type="tel" placeholder="PS Station" ref={psStRef} defaultValue={user.psstation}/>

          <label>Location:</label>
          <input type="tel" placeholder="Location" ref={psLocRef} defaultValue={user.pslocation}/>

          <button type="submit" className={styles.saveButton}>Save</button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root") // Attach to modal-root in index.html
  );
};

export default Modal;

import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import axios from "axios";
import {useRef} from "react";
const Modal = ({ isOpen, onClose, user, modifyUser }) => {
  const phoneRef = useRef();
  const psStRef = useRef();
  const psLocRef = useRef();
  
  if (!isOpen) return null; // Do not render if modal is closed

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = {
      phone: phoneRef.current.value,
      psStation: psStRef.current.value,
      psLocation: psLocRef.current.value
    }
    try{
      const response = await axios.post("http://localhost:8000/users/save", formData);
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

          <label>Email:</label>
          <input type="email" value={user.email} readOnly />

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

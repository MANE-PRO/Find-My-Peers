import React from "react";
import styles from "./login.module.css";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
const SignIn = () => {
  const handleSuccess = async (credentialResponse) => {
    //console.log("Google Sign-In Success:", credentialResponse);
    //const response = JSON.parse(await axios.get("http://localhost:3000/auth/google"));
    //if(response.success){
      //props.login();
    //}
   window.location.href = "http://localhost:8000/auth/google"; 
   //const response = JSON.parse(await axios.get("http://localhost:3000/auth/google/callback"));
   //if(response.success){
   //   props.login();
   //}
  };

  const handleFailure = () => {
    console.log("Google Sign-In Failed");
  };
  //console.log("Hi");
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Sign In</h2>
        <p className={styles.subtitle}>Continue with your Google Account</p>
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";
import styles from "./login.module.css";
import { GoogleLogin } from "@react-oauth/google";

const SignIn = () => {
  const handleSuccess = (credentialResponse) => {
    console.log("Google Sign-In Success:", credentialResponse);
    window.location.href = "http://localhost:3000/auth/google"; // Redirect to backend
  };

  const handleFailure = () => {
    console.log("Google Sign-In Failed");
  };
  console.log("Hi");
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

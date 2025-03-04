import React from "react";
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
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Sign in with Google</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
    </div>
  );
};

export default SignIn;

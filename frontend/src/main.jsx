import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = "149935536093-g888mf9q68307ai03n4fdig2ktpnekjp.apps.googleusercontent.com";


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>,
);

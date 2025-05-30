import React, { useState, useEffect } from "react";

// import { login } from "../DAL/auth";
import "../login.css";
import { useNavigate } from "react-router-dom";
const ForgotPassword = ({ onLoginSuccess }) => {
    const navigate = useNavigate();
    

  return (
    <div className="login-card">
      <div className="left"></div>
      <div className="overlay"></div>
      <div className="right">
        <strong className="title">Forgot Password?</strong>
        <p className="description">Please enter your email address and we'll send you a link to get back into your account. </p>

        <input type="email" placeholder="Email" />

        <button className="filled-btn">
          <span>Send Login Link</span>
        </button>
        <p className="forgot-text">
          Back to <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

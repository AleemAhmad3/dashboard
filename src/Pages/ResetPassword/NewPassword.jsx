import React, { useState, useEffect } from "react";

import "../login.css";
const NewPassword = ({ onLoginSuccess }) => {
 

  return (
    <div className="login-card">
      <div className="left"></div>
      <div className="overlay"></div>
      <div className="right">
        <strong className="title">Reset your Password</strong>
        <p className="description">
          Enter the new password to reset the password on your account. We'll ask
          for this password whenever you login.
        </p>

        <input type="text" placeholder="New Password" />
        <input type="text" placeholder="Confirm Password" />

        <button className="filled-btn">
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default NewPassword;

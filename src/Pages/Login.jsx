import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../DAL/auth";
import { useAlert } from "../Components/Alert/AlertContext";
import "./login.css";
const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
   const { showAlert } = useAlert();
    const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const result = await login(formData);

      if (result.status == 200) {
        showAlert("success", result?.message);
        localStorage.setItem("Token", result?.token);
        onLoginSuccess();
      } else {
        // Login failed, show the error message from the server
        alert("Login failed: " + result?.message);
      }
    } catch (error) {
      if (error.response) {
        // The server responded with a status code out of the 2xx range
        console.log("<=== Api-Error ===>", error.response.data);
        alert(
          "Login failed: " + error.response.data.message || "An error occurred."
        );
      } else if (error.request) {
        // The request was made, but no response was received
        console.log(
          "<=== Api-Request-Error ===> No response received:",
          error.request
        );
        alert("Login failed: No response from the server.");
      } else {
        // Something else went wrong in setting up the request
        console.log("<=== Api-Unknown-Error ===>", error.message);
        alert("Login failed: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-card">
      <div className="left"></div>
      <div className="overlay"></div>

      <form className="right" onSubmit={handleLogin}>
        <strong className="title">Sign In</strong>
        <p className="description">Please sign in to your registered account</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="filled-btn">
          <span>Login</span>
        </button>

        <p className="forgot-text">
          Forgot your password? <span onClick={() => navigate("/forgot")}>Reset here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;

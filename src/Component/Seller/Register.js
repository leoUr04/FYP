import React, { useState } from "react";
import "./css/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    emailError: "",
    mobileNumberError: "",
    passwordMatchError: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let newErrors = {
      emailError: "",
      mobileNumberError: "",
      passwordMatchError: "",
    };

    if (!emailPattern.test(email)) {
      newErrors.emailError = "Please enter a valid email address";
    }

    if (mobileNumber.length !== 10) {
      newErrors.mobileNumberError = "Please enter a valid mobile number";
    }

    if (password !== confirmPassword) {
      newErrors.passwordMatchError = "Passwords do not match";
    }

    if (
      newErrors.emailError ||
      newErrors.mobileNumberError ||
      newErrors.passwordMatchError
    ) {
      setValidationErrors(newErrors);
    } else {
      setValidationErrors({
        emailError: "",
        mobileNumberError: "",
        passwordMatchError: "",
      });
      const userData = {
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        password: password,
      };
      try {
        const response = await axios.post(
          "http://localhost:80/api/registration.php",
          userData
        );
        console.log("Response from backend:", response.data);
        navigate('/Login');
        
        setName("");
        setEmail("");
        setMobileNumber("");
        setPassword("");
        setConfirmPassword("");

      } catch (error) {
        console.error("Error sending data to backend:", error);
      }
      console.log(`UserData: ${JSON.stringify(userData)}`);
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-heading">Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label className="register-label">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="register-input"
            required
          />
        </label>
        <br />
        <label className="register-label">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
            required
          />
        </label>
        {validationErrors.emailError && (
          <p className="register-error">{validationErrors.emailError}</p>
        )}
        <br />
        <label className="register-label">
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="register-input"
            required
          />
        </label>
        {validationErrors.mobileNumberError && (
          <p className="register-error">{validationErrors.mobileNumberError}</p>
        )}
        <br />
        <label className="register-label">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
            required
          />
        </label>
        <br />
        <label className="register-label">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="register-input"
            required
          />
        </label>
        {validationErrors.passwordMatchError && (
          <p className="register-error">
            {validationErrors.passwordMatchError}
          </p>
        )}
        <br />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <p className="register-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;

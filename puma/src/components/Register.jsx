import React from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return <div>
            <link rel="stylesheet" href="../styles/register.css" />

    <div className="register-details-heading">
        <p><b>My account</b></p>
        <div className="register-details">
            <div className="name"><b>Register</b></div>
            <label>Name *</label><br/>
            <input type="text" placeholder="Enter your full name"></input><br/>
            <label>Email *</label><br/>
            <input type="email" placeholder="Enter your email id"></input><br/>
            <label>Password *</label><br/>
            <input type="password" placeholder="Enter your password"></input>
            <button>Continue</button>
            <p>Already hav an account?<Link to="/login"> Sign In</Link></p>

        </div>
    </div>
  </div>;
};

export default Register;

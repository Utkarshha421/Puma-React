import React from 'react'
import "../styles/register.css";

const Login = () => {
  return (
    <div>
        <link rel="stylesheet" href="../styles/register.css" />

<div className="register-details-heading">
    <p><b>My account</b></p>
    <div className="register-details">
        <div className="name"><b>Login</b></div>
        <label>Email *</label><br/>
        <input type="email" placeholder="Enter your email id"></input><br/>
        <label>Password *</label><br/>
        <input type="password" placeholder="Enter your password"></input>
        <button>Login</button>

    </div>
</div>
    </div>
  )
}

export default Login
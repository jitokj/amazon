import React from 'react';
import "./Login.css";
import Logo from "./images/Amazon_black.png";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
        <Link to="/">
          <img className="login__logo" src={Logo} alt="logo"/> 
          </Link> 
          <div className="login__container">
              <h1>Sign-in</h1>
              <form>
                   <h5>E-mail</h5>
                   <input type="email"/>
                   <h5>Password</h5>
                   <input type="password"/>
                   <button className="login__signInButton">Sign In</button>
              </form>
              <p>By Signing-in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
              <button className="login__registerButton">Create Your Amazon account</button>
          </div>
        </div>
    );
};

export default Login;
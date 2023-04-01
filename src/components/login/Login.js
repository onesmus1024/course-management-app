import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { UserContext } from "../../App";
import { useContext } from "react";

const Login = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const user = useContext(UserContext);
    
  return (
    <div className="form-group">
      <p>Log in to your account</p>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="input-group">
             <input type="submit" value="Log In" />
        </div>
      </form>

        <p> 
            Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
    </div>
  );
};


export default Login;
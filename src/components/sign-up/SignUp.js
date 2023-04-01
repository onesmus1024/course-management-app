import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-group">
      <p>Sign up for our catalog</p>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>

        <div className="input-group">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};


export default SignUp;
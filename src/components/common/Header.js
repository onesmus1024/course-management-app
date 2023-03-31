import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink to="/" activeClassName="active">
            Home
        </NavLink>

   
        <NavLink to="/about" activeClassName="active">
            About
        </NavLink>

   
        <NavLink to="/courses" activeClassName="active">
            Courses
        </NavLink>

      </nav>
    </div>
  );
};


export default Header;
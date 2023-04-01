import React from "react";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext, UserContext } from "../../App";
import "./Header.css";

function Header() {
  const Theme = useContext(ThemeContext);
  const User = useContext(UserContext);
  

  const [theme, setTheme] = useState(Theme);
  const body = document.querySelector("body");

  if (theme === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      
    } else {
      setTheme("light");
    }
  };

  if (User === "false") {
    return (
      
        <div className="header">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
            </ul>

            <ul>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <button className={theme} onClick={toggleTheme}>
                  {" "}
                  {theme}{" "}
                </button>
              </li>
            </ul>
          </nav>
        </div>
     
    );
  }else {
    return 
  }
}

export default Header;

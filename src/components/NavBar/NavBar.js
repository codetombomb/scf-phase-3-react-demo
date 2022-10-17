import React from "react";
import logo from "../../assets/logo.svg";
import "./NavBar.css";

function NavBar({ user }) {
  return (
    <>
      <ul className="navbar">
        <li className="nav-logo">
          <a href="/">
            <img src={logo}></img>
          </a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">SignUp</a>
        </li>
      </ul>
      {user ? <p>{`Hello, ${user.username}`}!</p> : user}
    </>
  );
}

export default NavBar;

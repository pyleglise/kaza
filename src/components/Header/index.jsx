import logo from "../../assets/logo-kasa-orange.svg";
import "../../utils/style/_header.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    
      <nav className="navbar">
        <div className="logo-container">
          <img className="logo-img" src={logo} alt="logo"></img>
        </div>

        <ul className="links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    
  );
}
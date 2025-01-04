React;
import React, { useState } from "react";
import { logo_url } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//React- functional component
export const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo_url} alt="logo" />
      </div>
      <div className="navItems">
        <ul>
          <li>ConnStatus:{onlineStatus === true ? "✅" : "🔴"}</li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/grocery">Grocery</NavLink>
          </li>
          <li>Cart</li>
          <button
            className="header-btn"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

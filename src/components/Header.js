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
    <div className="flex justify-between shadow-lg bg-orange-400 sm:bg-gray-600 md:bg-yellow-400">
      <div className="flex items-center">
        <img className="w-32 h-28" src={logo_url} alt="logo" />
      </div>
      <div className="navItems">
        <ul className="flex p-4 m-4 text-white">
          <li>ConnStatus:{onlineStatus === true ? "✅" : "🔴"}</li>
          <li className="px-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/grocery">Grocery</NavLink>
          </li>
          <li className="px-4">Cart</li>
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

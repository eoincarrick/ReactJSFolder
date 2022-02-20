import React, { useState } from "react";
import { MenuList } from "./MenuList";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const CLICKED = () => {
    setClicked(!clicked);
  };

  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <a href={url}>{title}</a>
      </li>
    );
  });
  return (
    <nav>
      <div className="logo">
        VPN<font>Lab</font>
      </div>
      <div className="menu-icon" onClick={CLICKED}>
        <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className="menu-list">{menuList}</ul>
    </nav>
  );
};

export default Navbar;

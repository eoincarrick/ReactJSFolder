import React, { useState } from "react";
import { MenuList } from "./MenuList";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const CLICKED = () => {
    setClicked(!clicked);
  };

  const menuList = MenuList.map(({ url, title, dark, light}, index) => {
    return (
      <li key={index}>
        <a className={ clicked ? dark : light} href={url}>
          {title}
        </a>
      </li>
    );
  });
  return (
    <nav>
      <div className="logo">
        VIMKAS<font>VPN</font>
      </div>
      <div className="menu-icon" onClick={CLICKED}>
        <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list sdsdsdsdsds"}>
        {menuList}
      </ul>
    </nav>
  );
};

export default Navbar;

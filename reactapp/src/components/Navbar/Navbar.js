import React from "react";
import { MenuList } from "./MenuList";

const Navbar = () => {
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
      <ul className="menu0list">{menuList}</ul>
    </nav>
  );
};

export default Navbar;

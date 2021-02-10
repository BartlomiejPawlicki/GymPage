import React from "react";
import { NavLink } from "react-router-dom";
import "./style/Navigation.css";

const list = [
  { name: "Start", path: "/", exact: true },
  { name: "Produkty", path: "/products" },
  { name: "Kontakt", path: "/contact" },
  { name: "Panel admin", path: "/login" },
  { name: "Zadowoleni użytkownicy", path: "/users" },
];

const Navigation = () => {
  const menu = list.map((link) => (
    <li key={link.name}>
      <NavLink to={link.path} exact={link.exact ? link.exact : false}>
        {link.name}
      </NavLink>
    </li>
  ));
  return (

<div className="main">
  <div className="logo">
  Gold's Gym
  </div>
    <nav>
      <ul>{menu}</ul>
    </nav>
    </div>
  );
};

export default Navigation;

import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style/Navigation.css";
import icon from "./pictures/logo-gym.png";
import basket from "../src/pictures/basket.svg";
import { DataContext } from "./components/DataProvider";

const list = [
  { name: "Start", path: "/", exact: true },
  { name: "Produkty", path: "/products" },
  { name: "Kontakt", path: "/contact" },
  { name: "Panel admin", path: "/login" },
  { name: "Zadowoleni użytkownicy", path: "/users" },
];

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const value = useContext(DataContext);
  const [cart] = value.cart;

  const [navbar, setNavbar] = useState(false)

  const changeSize = () => {
   if(window.scrollY >= 80) {
     setNavbar(true)
   }
   else setNavbar(false)
  }

  window.addEventListener('scroll',changeSize)

  const menu = list.map((link) => (
    <li className="nav-item" key={link.name}>
      <NavLink
        className="nav-links"
        onClick={closeMobileMenu}
        to={link.path}
        exact={link.exact ? link.exact : false}
      >
        {link.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu} >
          <img className="logo" src={icon} alt="logo" height="30px"/>
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>{menu}</ul>
      </div>
      <div className="basket">
        <span>{cart.length}</span>
        <NavLink to="/cart" >
          <img src={basket} alt="" width="30" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;

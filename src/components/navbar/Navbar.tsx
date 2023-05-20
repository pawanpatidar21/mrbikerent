import React from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.imageContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.listStyle}>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Contact us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

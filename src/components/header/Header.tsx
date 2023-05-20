import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./header.module.css";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import user from "../../assets/images/user.jpg";
import logoReal from "../../assets/images/logoReal.png";
const Header = () => {
  return (
    <header>
      <Navbar />
      <div className={styles.headerContainer}>
        <div className={styles.headerImage}>
          <div>
            <img src={logoReal} alt="logoReal" />
          </div>
          <div className={styles.headerContent}>
            <p>
              <MdLocationOn className={styles.icon} />
              Yashoda Nagar Colony , Varanasi ,U.P,India, 221002
            </p>
            <p>
              <MdLocalPhone className={styles.icon} />
              +91-638-652-4494
            </p>
            <p>
              <MdEmail className={styles.icon} />
              info@rjbikerent.in
            </p>
          </div>
        </div>
        <div className={styles.headerForm}>
          <div className={styles.formUser}>
            <img src={user} alt="user" />
            <p>ADMIN LOGIN</p>
          </div>
          <div className={styles.formContainer}>
            {" "}
            <form action="">
              <div className={styles.form}>
                {" "}
                <div className={styles.formControl}>
                  <label htmlFor="username">Username</label>
                  <input className={styles.inputItem} type="text" />
                </div>
                <div className={styles.formControl}>
                  <label htmlFor="password">Password</label>
                  <input className={styles.inputItem} type="text" />
                </div>
                <div className={styles.loginButton}>
                  <button>Login</button>
                </div>
              </div>
              <div>
                <input type="checkbox" />
                <span> Remember me on this computer | Forgot password ?</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

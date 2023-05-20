/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import styles from "./footer.module.css";
import logoReal from "../../assets/images/logoReal.png";
const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.content}>
        <div className={styles.logoReal}>
          <img src={logoReal} alt="logoReal" />
        </div>
        <div className={styles.listStyle}>
          <ul className={styles.ulList}>
            <li>
              <a href="#">
                Home <span>|</span>
              </a>
            </li>
            <li>
              <a href="#">
                Pro Agent Account <span>|</span>
              </a>
            </li>
            <li>
              <a href="#">
                About Us <span>|</span>
              </a>
            </li>
            <li>
              <a href="#">
                Contact Us <span>|</span>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                Privacy Policy Terms Of Use <span>|</span>
              </a>
            </li>
            <li>
              <a href="#">
                Advertise With Us <span>|</span>
              </a>
            </li>
          </ul>
          <ul className={styles.ulList}>
            <li>
              <a href="#">
                Yashoda Nagar Colony , Varanasi ,U.P,India, <span>|</span>
              </a>
            </li>
            <li>
              {" "}
              <a href="#">
                221002 <span>|</span>
              </a>
            </li>
            <li>
              <a href="#">
                mail: info@rjbikerent.in <span>|</span>
              </a>
            </li>
            <li>
              <a href="#"> +91-638-652-4494</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Back To Top</p>
      </div>
    </footer>
  );
};

export default Footer;

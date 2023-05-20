import React from "react";
import styles from "./property.module.css";
import carAnimation from "../../assets/images/banner.gif";
import selfCar from "../../assets/images/selfBike.jpg";
const Property = () => {
  return (
    <div className={styles.propertyContainer}>
      <div className={styles.propertyBuy}>
        <div className={styles.title}>SEARCH PROPERTY TO BUY / RENT</div>
        <div className={styles.propertyImage}>
          <div className={styles.imageContent}>
            <h1>SERVICE PROVIDED BY US:</h1>
            <p>Self Drive Car in Varanasi</p>
            <p>Self Drive Bike in Varanasi</p>
            <p>Self Drive Scooty in Varanasi</p>
          </div>
          <img src={carAnimation} alt="car" />
          <div className={styles.callusContent}>
            {" "}
            <p>
              <span>Call US :</span> +91-638-652-4494
            </p>
          </div>
        </div>
      </div>
      <div className={styles.package}>
        <img src={selfCar} alt="selfcar" />
      </div>
    </div>
  );
};

export default Property;

import React from "react";
import styles from "./custom.module.css";
const HotelForm = () => {
  return (
    <div className={styles.hotelForm}>
      <p className={styles.title}>HOTEL BOOKING</p>
      <form className={styles.formWrapper}>
        <div className={styles.formControl}>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="">Mobile</label>
          <input type="text" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="">Hotel Category</label>
          <select name="" id="">
            <option value="">select</option>
            <option value="">one</option>
            <option value="">two</option>
          </select>
        </div>
        <div className={styles.formButton}>
          <button>SEARCH</button>
        </div>
      </form>
    </div>
  );
};

export default HotelForm;

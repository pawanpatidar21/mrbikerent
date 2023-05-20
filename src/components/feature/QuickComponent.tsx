import React from "react";
import CustomLinks from "../other/CustomLinks";
import CustomReview from "../other/CustomReview";
import HotelForm from "../other/HotelForm";
import styles from "./quick.module.css";
const QuickComponent = () => {
  return (
    <div className={styles.quick}>
      <CustomLinks />
      <HotelForm />
      <CustomReview />
    </div>
  );
};

export default QuickComponent;

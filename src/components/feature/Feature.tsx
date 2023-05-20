import React from "react";
import bike from "../../assets/images/bike.png";
import { IFeatureCard } from "../../type";
import FeatureCard from "./FeatureCard";
import styles from "./feature.module.css";
import QuickComponent from "./QuickComponent";
const Feature = () => {
  const featureData = [
    {
      id: "1",
      image: bike,
      bike: "Hero , Passion Pro Plus",
      city: " Varanasi",
      time: "24 hours",
      year: "2018",
      delPrice: "800",
      price: "500",
      detail: "View Details",
      whatsup: "What's app",
      callus: "Call us",
    },
    {
      id: "2",
      image: bike,
      bike: "Hero , Passion Pro Plus",
      city: " Varanasi",
      time: "24 hours",
      year: "2018",
      price: "500",
      delPrice: "800",
      detail: "View Details",
      whatsup: "What's app",
      callus: "Call us",
    },
    {
      id: "3",
      image: bike,
      bike: "Hero , Passion Pro Plus",
      city: " Varanasi",
      time: "24 hours",
      year: "2018",
      price: "500",
      delPrice: "800",
      detail: "View Details",
      whatsup: "What's app",
      callus: "Call us",
    },
    {
      id: "4",
      image: bike,
      bike: "Hero , Passion Pro Plus",
      city: " Varanasi",
      time: "24 hours",
      year: "2018",
      price: "500",
      delPrice: "800",
      detail: "View Details",
      whatsup: "What's app",
      callus: "Call us",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.featureList}>
        {" "}
        <p>Featured Listing</p>
        {featureData &&
          featureData.map((item) => <FeatureCard key={item.id} item={item} />)}
      </div>
      <div>
        <QuickComponent />
      </div>
    </div>
  );
};

export default Feature;

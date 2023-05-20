import React from "react";
import { IFeatureCard } from "../../type";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import styles from "./feature.module.css";
interface IProps {
  item: IFeatureCard;
}
const FeatureCard = ({ item }: IProps) => {
  return (
    <div className={styles.feature}>
      <div className={styles.bikeImage}>
        <img src={item.image} alt={item.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentBike}>
          <p>{item.bike}</p>
          <p>
            <MdLocationOn />
            {item.city}
          </p>
          <p>
            <MdAccessTime className={styles.icon} />
            {item.time}
          </p>
          <p>
            <RiMotorbikeFill className={styles.icon} />
            {item.year}
          </p>
          <p>
            <del>Rs.{item.delPrice}</del>
            <span>{","}</span>
            <span>Rs.{item.price}</span>
          </p>
        </div>
        <div className={styles.contentButton}>
          <button>{item.detail}</button>
          <button>{item.whatsup}</button>
          <button>{item.callus}</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./custom.module.css";
import { BsFillPlayFill } from "react-icons/bs";
const quickList = [
  {
    id: "1",
    title: "Taxi Service in Varanasi",
    icon: <BsFillPlayFill />,
    Link: "",
  },
  {
    id: "2",
    title: "Tour Service in Varanasi",
    icon: <BsFillPlayFill />,
    Link: "",
  },
  {
    id: "3",
    title: "Taxi Service in Varanasi",
    icon: <BsFillPlayFill />,
    Link: "",
  },
  {
    id: "4",
    title: "Self Drive car in Varanasi",
    icon: <BsFillPlayFill />,
    Link: "",
  },
  {
    id: "5",
    title: "Tour Service in Varanasi",
    icon: <BsFillPlayFill />,
    Link: "",
  },
];
const CustomLinks = () => {
  return (
    <div className={styles.customLink}>
      <p className={styles.title}>QUICK LINKS</p>
      {quickList &&
        quickList.map((item) => (
          <div className={styles.quickFlex} key={item.id}>
            <a href="#">
              <p>{item.icon}</p>
              <p>{item.title}</p>
            </a>
          </div>
        ))}
    </div>
  );
};

export default CustomLinks;

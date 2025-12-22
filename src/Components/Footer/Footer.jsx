import React from "react";
import styles from "./Footer.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-top"]}>
        <div className={styles["footer-top-left"]}>
          <div className={styles["footer-title"]}>
            <h1>Milos</h1>
            <img src={theme_pattern} alt="" />
          </div>
          <p>
            I am a frontend developer from Banja Luka, RS/BiH with 1 years of
            experience in Racunari.doo
          </p>
        </div>
      </div>
      <hr />
      <div className={styles["footer-bottom"]}>
        <p className={styles["footer-bottom-left"]}>
          © 2025 Milos Klepic. All rights reserved.
        </p>
        <div className={styles["footer-bottom-right"]}>
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

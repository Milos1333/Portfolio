import React from "react";
import styles from "./Footer.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-top"]}>
        <div className={styles["footer-top-left"]}>
          <div className={styles["footer-title"]}>
            <h1>Miloš</h1>
            <img src={theme_pattern} alt="" />
          </div>
          <p>
            Ja sam grafički dizajner i freelancer iz Banje Luke, RS/BiH, sa više
            od 4 godine iskustva u izradi vizuelnih materijala.
          </p>
        </div>
      </div>
      <hr />
      <div className={styles["footer-bottom"]}>
        <p className={styles["footer-bottom-left"]}>
          © 2025 Miloš Klepić. Sva prava zadržana.
        </p>
        <div className={styles["footer-bottom-right"]}>
          <p>Uslovi korišćenja</p>
          <p>Politika privatnosti</p>
          <p>Kontaktirajte me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

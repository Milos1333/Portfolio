import React from "react";
import styles from "./About.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className={styles["about"]}>
      <div className={styles["about-title"]}>
        <h1>O meni</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className={styles["about-sections"]}>
        <div className={styles["about-left"]}>
          <img src={profile_image} alt="" />
        </div>

        <div className={styles["about-right"]}>
          <div className={styles["about-para"]}>
            <p>
              Grafički dizajner sa praktičnim iskustvom stečenim kroz rad na
              različitim projektima. Tokom dosadašnjeg rada imao sam priliku da
              kreiram moderna, funkcionalna i vizuelno privlačna dizajnerska
              rješenja, sarađujući sa različitim klijentima i timovima.
            </p>
            <p>
              Posvećen sam stvaranju kvalitetnog vizuelnog identiteta, stalnom
              usavršavanju i praćenju savremenih dizajnerskih trendova. Svakom
              projektu pristupam sa pažnjom, preciznošću i entuzijazmom, s
              ciljem da klijentima pružim dodatnu vrijednost.
            </p>
          </div>

          <div className={styles["about-skills"]}>
            <div className={styles["about-skill"]}>
              <p>Grafički dizajn</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className={styles["about-skill"]}>
              <p>Branding & identitet</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className={styles["about-skill"]}>
              <p>Social media dizajn</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className={styles["about-skill"]}>
              <p>UI / vizuelni dizajn</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles["about-achievements"]}>
        <div className={styles["about-achievement"]}>
          <h1>4+</h1>
          <p>GODINE ISKUSTVA</p>
        </div>
        <hr />
        <div className={styles["about-achievement"]}>
          <h1>100+</h1>
          <p>ZAVRŠENIH PROJEKATA</p>
        </div>
        <hr />
        <div className={styles["about-achievement"]}>
          <h1>30+</h1>
          <p>ZADOVOLJNIH KLIJENATA</p>
        </div>
      </div>
    </div>
  );
};

export default About;

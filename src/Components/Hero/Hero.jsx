import React from "react";
import styles from "./Hero.module.css";
import profile_img from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";

const Hero = () => {
  return (
    <div id="home" className={styles["hero"]}>
      <img src={profile_img} alt="" />
      <h1>
        <span>Ja sam Miloš Klepić,</span> grafički dizajner iz Banje Luke.
      </h1>
      <p>
        Freelance grafički dizajner iz Banje Luke, RS/BiH sa preko 4 godine
        iskustva.
      </p>

      <div className={styles["hero-action"]}>
        <AnchorLink
          className={styles["anchor-link"]}
          offset={50}
          href="#contact"
        >
          <div className={styles["hero-connect"]}>Kontaktiraj me</div>
        </AnchorLink>
        <div className={styles["hero-resume"]}>
          <a
            href="/MilosKlepicCv.pdf"
            download
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Moj CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

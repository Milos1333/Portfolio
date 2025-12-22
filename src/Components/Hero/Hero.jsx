import React from "react";
import styles from "./Hero.module.css";
import profile_img from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";

const Hero = () => {
  return (
    <div id="home" className={styles["hero"]}>
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Milos Klepic,</span> frontend developer based in Banja Luka.
      </h1>
      <p>
        I am a frontend developer from Banja Luka, RS/BiH with 1 years of
        experience in Racunari.doo
      </p>
      <div className={styles["hero-action"]}>
        <AnchorLink
          className={styles["anchor-link"]}
          offset={50}
          href="#contact"
        >
          <div className={styles["hero-connect"]}>Connect with me</div>
        </AnchorLink>
        <div className={styles["hero-resume"]}>
          <a
            href="/MilosKlepicCv.pdf"
            download
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

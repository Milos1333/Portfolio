import React from "react";
import styles from "./About.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className={styles["about"]}>
      <div className={styles["about-title"]}>
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className={styles["about-sections"]}>
        <div className={styles["about-left"]}>
          <img src={profile_image} alt="" />
        </div>
        <div className={styles["about-right"]}>
          <div className={styles["about-para"]}>
            <p>
              Frontend Developer with hands-on experience gained through working
              on various projects. Throughout my work so far, I have had the
              opportunity to develop modern, functional, and customized web
              applications, collaborating with different teams and clients.
            </p>
            <p>
              I am dedicated to creating high-quality user experiences,
              continuously learning new technologies, and improving my skills.
              With each project, I strive to bring additional value through
              careful planning, precise execution, and the enthusiasm I invest
              in my work.
            </p>
          </div>
          <div className={styles["about-skills"]}>
            <div className={styles["about-skill"]}>
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className={styles["about-skill"]}>
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className={styles["about-skill"]}>
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className={styles["about-skill"]}>
              <p>MySql</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["about-achievements"]}>
        <div className={styles["about-achievement"]}>
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className={styles["about-achievement"]}>
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className={styles["about-achievement"]}>
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;

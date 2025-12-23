import styles from "./Navbar.module.css";
import React, { useEffect, useRef, useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import theme_pattern from "../../assets/theme_pattern.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    if (!menuRef.current) return;
    menuRef.current.style.right = "0px";
  };

  const closeMenu = () => {
    if (!menuRef.current) return;
    menuRef.current.style.right = "-350px";
  };

  useEffect(() => {
    const sections = [
      { id: "home", key: "home" },
      { id: "about", key: "about" },
      { id: "services", key: "services" },
      { id: "work", key: "portfolio" },
      { id: "contact", key: "contact" },
    ];

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const found = sections.find((s) => s.id === visible.target.id);
        if (found) setMenu(found.key);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-80px 0px -60% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles["navbar"]}>
      <AnchorLink className={styles["anchor-link"]} offset={50} href="#home">
        <div className={styles["navbar-title"]}>
          <h1>Miloš</h1>
          <img src={theme_pattern} alt="" />
        </div>
      </AnchorLink>

      <img
        src={menu_open}
        alt=""
        onClick={openMenu}
        className={styles["nav-mob-open"]}
      />

      <ul ref={menuRef} className={styles["nav-menu"]}>
        <img
          className={styles["nav-mob-close"]}
          onClick={closeMenu}
          src={menu_close}
          alt=""
        />

        <li>
          <AnchorLink
            className={styles["anchor-link"]}
            offset={50}
            href="#home"
            onClick={closeMenu}
          >
            <p>Početna</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink
            className={styles["anchor-link"]}
            offset={50}
            href="#about"
            onClick={closeMenu}
          >
            <p>O meni</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink
            className={styles["anchor-link"]}
            offset={50}
            href="#services"
            onClick={closeMenu}
          >
            <p>Usluge</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink
            className={styles["anchor-link"]}
            offset={50}
            href="#work"
            onClick={closeMenu}
          >
            <p>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink
            className={styles["anchor-link"]}
            offset={50}
            href="#contact"
            onClick={closeMenu}
          >
            <p>Kontakt</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      <AnchorLink className={styles["anchor-link"]} offset={50} href="#contact">
        <div className={styles["nav-connect"]}>Kontaktiraj me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;

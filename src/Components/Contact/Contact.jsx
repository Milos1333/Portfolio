import React from "react";
import styles from "./Contact.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { message } from "antd";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const messageText = formData.get("message")?.trim();

    if (!name || !email || !messageText) {
      message.error("Please fill in all fields before submitting.");
      return;
    }

    formData.append("access_key", "896d4b2a-b428-44a7-89d4-5f17eeab8ca7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      message.success("Message sent successfully!");
      event.target.reset();
    }
  };

  return (
    <div id="contact" className={styles["contact"]}>
      <div className={styles["contact-title"]}>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className={styles["contact-section"]}>
        <div className={styles["contact-left"]}>
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className={styles["contact-details"]}>
            <div className={styles["contact-detail"]}>
              <img src={mail_icon} alt="" />
              <p>milosklepic91@gmail.com</p>
            </div>
            <div className={styles["contact-detail"]}>
              <img src={call_icon} alt="" />
              <p>+387 66 466 603</p>
            </div>
            <div className={styles["contact-detail"]}>
              <img src={location_icon} alt="" />
              <p>Jovana Raškovića 16, Banja Luka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className={styles["contact-right"]}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            placeholder="Enter your message"
            name="message"
            rows="8"
            style={{ width: "100%" }}
          />
          <button className={styles["contact-submit"]} type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

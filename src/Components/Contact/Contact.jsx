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
      message.error("Molimo popunite sva polja pre slanja.");
      return;
    }

    formData.append("access_key", "cf9e9a88-b3ab-444d-ac5c-5ff8bd297ebb");

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
      message.success("Poruka je uspešno poslata!");
      event.target.reset();
    }
  };

  return (
    <div id="contact" className={styles["contact"]}>
      <div className={styles["contact-title"]}>
        <h1>Kontaktirajte me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className={styles["contact-section"]}>
        <div className={styles["contact-left"]}>
          <h1>Razgovarajmo</h1>
          <p>
            Trenutno sam dostupan za nove projekte, pa slobodno pošaljite poruku
            o bilo čemu što želite da kreiram. Možete me kontaktirati u bilo
            koje vrijeme.
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
          <label htmlFor="">Vaše ime</label>
          <input type="text" placeholder="Unesite Vaše ime" name="name" />

          <label htmlFor="">Vaš Email</label>
          <input type="email" placeholder="Unesite Vaš email" name="email" />

          <label htmlFor="">Vaša poruka</label>
          <textarea
            placeholder="Unesite Vašu poruku"
            name="message"
            rows="8"
            style={{ width: "100%" }}
          />

          <button className={styles["contact-submit"]} type="submit">
            Pošalji sada
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

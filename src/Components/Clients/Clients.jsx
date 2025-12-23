import styles from "./clients.module.css";
import ms from "../../assets/ms.png";
import pulse from "../../assets/pulse.png";
import blank from "../../assets/blank.png";
import omnia from "../../assets/omnia.png";

const Clients = () => {
  return (
    <div className={styles.container}>
      <img src={ms} alt="MS" className={`${styles.image} ${styles.ms}`} />
      <img
        src={blank}
        alt="Blank"
        className={`${styles.image} ${styles.blank}`}
      />{" "}
      <img
        src={omnia}
        alt="Omnia"
        className={`${styles.image} ${styles.omnia}`}
      />{" "}
      <img
        src={pulse}
        alt="Pulse"
        className={`${styles.image} ${styles.pulse}`}
      />
    </div>
  );
};

export default Clients;

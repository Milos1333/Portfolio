import styles from "./MyWork.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../Data/mywork_data.js";

const MyWork = () => {
  return (
    <div id="work" className={styles["mywork"]}>
      <div className={styles["mywork-title"]}>
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className={styles["mywork-container"]}>
        {mywork_data.map((work, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.inner}>
              <div className={styles.front}>
                <img src={work.w_img} alt="" />
              </div>
              <div className={styles.back}>
                <p>{work.w_desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;

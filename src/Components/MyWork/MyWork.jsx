import styles from "./MyWork.module.css";
import mywork_data from "../../Data/mywork_data.js";
import { useState, useEffect } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";

const MyWork = () => {
  const [items, setItems] = useState([...mywork_data]);
  const visibleCount = window.innerWidth < 500 ? 1 : 5;

  const next = () => {
    const newItems = [...items];
    const first = newItems.shift();
    newItems.push(first);
    setItems(newItems);
  };

  const prev = () => {
    const newItems = [...items];
    const last = newItems.pop();
    newItems.unshift(last);
    setItems(newItems);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div id="work" className={styles.mywork}>
      <div className={styles.myworks}>
        <h1 className={styles.title}>Moji radovi</h1>
        <img className={styles.img} src={theme_pattern} alt="" />
      </div>

      <div className={styles.carouselContainer}>
        <button className={styles.arrow} onClick={prev}>
          &#10094;
        </button>

        <div className={styles.carouselWrapper}>
          <div className={styles.horizontalScroll}>
            {items.slice(0, visibleCount).map((work, index) => (
              <div
                key={index}
                className={`${styles.workItem} ${
                  index === Math.floor(visibleCount / 2) ? "active" : ""
                }`}
              >
                <img src={work.w_img} alt={work.w_name} />
                <p style={{ color: "white" }}>{work.w_desc}</p>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.arrow} onClick={next}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default MyWork;

import React from "react";
import styles from "./McDonaldBanner.module.css";

const McDonaldBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.leftSection}>
          <h3>I'm lovin' it!</h3>
          <h1>McDonald’s East London</h1>
          <div className={styles.orderInfo}>
            <div className={styles.infoBox}>
            <img src="https://img.icons8.com/?size=100&id=65285&format=png&color=FFFFFF" alt="checklist" />
              <p>Minimum Order: 12 GBP</p>
            </div>
            <div className={styles.infoBox}>
                <img src="https://img.icons8.com/?size=100&id=9823&format=png&color=FFFFFF" alt="cycle" />
              <p>Delivery in 20–25 Minutes</p>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.ratingBox}>
            <span className={styles.rating}>3.4</span>
            <p>1,360 reviews</p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="https://curlytales.com/wp-content/uploads/2021/05/e6de389d2316b5ac08fc04c2a96ac6d7_-united-states-texas-tarrant-county-north-richland-hills-northeast-loop-820-6401-mcdonalds-817-656-2862-1.jpg" 
              alt="McDonald's Meal"
            />
          </div>
        </div>
        <div className={styles.openHours}>
            <img src="https://img.icons8.com/?size=100&id=10247&format=png&color=FFFFFF" alt="clock" />
            <p>Open until 3:00 AM</p>
        </div>
      </div>
      <div className={styles.searchBar}>
        <h3>All Offers from McDonald's East London</h3>
        <input type="text" placeholder="Search from menu..." />
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>Offers</li>
          <li>Burgers</li>
          <li>Fries</li>
          <li>Snacks</li>
          <li>Salads</li>
          <li>Cold drinks</li>
          <li>Happy Meal®</li>
          <li>Desserts</li>
          <li>Hot drinks</li>
          <li>Sauces</li>
          <li>Orbit®</li>
        </ul>
      </nav>
      
    </div>
  );
};

export default McDonaldBanner;

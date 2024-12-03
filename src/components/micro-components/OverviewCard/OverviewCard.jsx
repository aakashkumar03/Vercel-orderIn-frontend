// components/Card/Card.jsx
import PlusBtn from '../PlusBtn/PlusBtn';
import styles from './OverviewCard.module.css';

export default function RestaurantCard({ image, discount, type, name, onClick, showBtn = false }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      {discount && (
        <div className={styles.discount}>-{discount}%</div>
      )}
      <div className={styles.content}>
        <span className={styles.type}>{type}</span>
        <h3 className={styles.name}>{name}</h3>
      </div>
      {showBtn && (<PlusBtn onClick = {onClick} />)}
    </div>
  );
}
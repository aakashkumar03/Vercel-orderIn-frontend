import React from 'react';
import styles from './Catagories.module.css';
import { PlusBtn } from '../micro-components';

const Catagories=({data,handleAddToCart})=> {
  
  return (
    <div className={styles.itemContainer}>
      <h2>Cold Drinks</h2>
      <div className={styles.itemFlex}>
        {data?.map((item) => (
          <div className={styles.itemCard} key={item._id}>
            <div className={styles.itemDesc}>
              <h4>{item.name}</h4>
              <p className={styles.itemContent}>{item.desc}</p>
              <p className={styles.price}>₹ {item.price}</p>
            </div>
            <div className={styles.itemImage}>
              <img src={item.productImage} alt={item.name} />
            </div>
            <PlusBtn onClick={()=>handleAddToCart(item)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catagories;
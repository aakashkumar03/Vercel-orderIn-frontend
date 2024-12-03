import { useNavigate } from 'react-router-dom';
import styles from './ShareableCart.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import apiCall from '../../utils/API';

function ShareableCart  ({ items,total})  {

  const [cartItems, setCartItems] = useState(items);
  const [cartTotal, setCartTotal] = useState(0)
  const [newTotal,setNewTotal] = useState(0)
  const handleIncreaseQuantity = (item) => {
    setCartItems(cartItems.map((cartItem) => cartItem.productId === item.productId ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem));
  };

  const handleRemoveFromCart = (item) => {
    if (item.quantity<=1) {
      return setCartItems(cartItems.filter((cartItem) => cartItem.productId !== item.productId));
    }
    setCartItems(cartItems.map((cartItem) => cartItem.productId === item.productId ? {...cartItem, quantity: cartItem.quantity -1} : cartItem));
  };

  const allTotal =cartItems.reduce((acc, item) => acc + (item.price * item.quantity),0)
  
  const discounts=-6.33
  const deliveryFee=6.33 
  useEffect(()=>{
    setNewTotal(allTotal)
    setCartTotal(newTotal)

  },[cartItems,newTotal])

const navigate = useNavigate();

  const handleShareableCheckout = async () => {
    const response = await apiCall(
      import.meta.env.VITE_BACKEND_BASE_URL+'/api/cart/create',
      "POST",
      {},
      {
        items:cartItems,
        totalAmount:cartTotal
      }
    );
    console.log("----",response);
    //Todo redirect to checkout page
    const items=cartItems
    const total=cartTotal
    navigate('/checkout', {
      state: {
        items,
        discounts, 
        deliveryFee,
        total 
      }
    });
    
  };
    
  return (
    <div className={styles.ShareableCartContainer}>
        <div className={styles.comment}><h2>Hey, you have been shared cart of <b>Order.in</b> from your friend..!</h2></div>
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <img src="https://img.icons8.com/?size=100&id=M1H3qACX5y0J&format=png&color=FFFFFF" alt="" />
                <h2 className={styles.header}>My Basket</h2>
            </div>

            <div className={styles.itemsContainer}>
                {cartItems.map((item, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.increment} onClick={()=>handleIncreaseQuantity(item)}>{item.quantity}X</div>
                    <div className={styles.itemDetails}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemPrice}>₹ {item.price}</span>
                    </div>
                    <button className={styles.removeButton}
                    onClick={()=>handleRemoveFromCart(item)}
                    ><img src="https://img.icons8.com/?size=100&id=7837&format=png&color=FA5252" alt="delete" /></button>
                </div>
                ))
                }
            </div>

            <div className={styles.summaryContainer}>
                <div className={styles.subtotalContainer}>
                <b>Sub Total:</b>
                <p>{newTotal}</p>
                </div>
                <div className={styles.discountsContainer}>
                <b>Discounts:</b>
                <p>{discounts}</p>
                </div>
                <div className={styles.deliveryContainer}>
                <b>Delivery Fee:</b>
                <p>{deliveryFee}</p>
                </div>
                <div className={styles.totalContainer}>
                <b>Total to pay</b>
                <p>{newTotal}</p>
                </div>
            </div>

            <div className={styles.actionsContainer}>
                <div className={styles.freeItemButton}>
                    Choose your free item
                    <img src="https://img.icons8.com/?size=100&id=Wpfk0R1JDfty&format=png&color=EBEBEB" alt="down-arrow" />
                </div>
                <div className={styles.coupon}>
                    Apply Coupon code here
                    <img src="https://img.icons8.com/?size=100&id=81136&format=png&color=000000" alt="right arrow" />
                </div>
                <div className={styles.deliveryInfo}>
                <div className={styles.deliveryTime}>
                    <img src="https://img.icons8.com/?size=100&id=9358&format=png&color=40C057" alt="delivery-scooty" />
                    <br /><b>Delivery</b> <br />Starts at 17:50
                    </div>
                <div className={styles.deliveryTime}>
                    <img src="https://img.icons8.com/?size=100&id=60579&format=png&color=40C057" alt="collection" />
                    <br /><b>Collection</b><br /> Starts at 16:50
                    </div>
                </div>
                <button className={styles.checkoutButton} onClick={handleShareableCheckout}> 
                    <img src="https://img.icons8.com/?size=100&id=87725&format=png&color=FFFFFF" 
                    alt="check-out-btn" />Checkout!</button>
            </div>
        </div>
    </div>
  );
};

export default ShareableCart;

ShareableCart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })
  ).isRequired,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

import { IMG_BASE_URL } from "../utils/constants";
import styles from "./Cart.module.css";
import foodPlaceholder from '../assets/restaurant.png';


export default function CartItem({card, quantity, onAdd, onRemove }) {
  
  // const itemImg = cloudinaryImageId ? IMG_BASE_URL + cloudinaryImageId : foodPlaceholder;
  console.log("99999",card)
  const itemImg = card?.info?.imageId  ? IMG_BASE_URL + card?.info?.imageId : foodPlaceholder;
  return (
    <div className={styles.cartDetails}>
      <div className={styles.leftCart}>
        <img src={itemImg} alt="" />
        <h2>{card?.info?.name}</h2>
      </div>
        <div className={styles.quantityContainer}>
          <button onClick={onRemove}>-</button>
          <button>{quantity}</button>
          <button onClick={onAdd}>+</button>
        </div>
      <h4>₹{card?.modifiedPrice / 100* quantity}</h4>
    </div>
  )
}

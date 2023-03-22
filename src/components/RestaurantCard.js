import React from 'react'
import { IMG_BASE_URL } from '../utils/constants'
import styles from "./RestaurantCard.module.css"

function RestaurantCard({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
  minDeliveryTime
}) {

  let random = (Math.random()* (5 - 3)+3 ).toFixed(1);
  return (
   
    <div>
      <img className={styles.image} src={IMG_BASE_URL + cloudinaryImageId} alt="" />
      <div className={styles.details}>
        <h2 className={styles.title}>{name}</h2>
        <h5 className={styles.subtitle}>{cuisines.join(", ")}</h5>
        <h6 className={styles.area}>{area}</h6>
        <div className={styles.info}>
          <h4 className={styles.infoItem}>{costForTwoString}</h4>
          <h5 className={(avgRating>4 || random>4)? styles.infoItemTop : styles.infoItemPoor}><i class="fa-solid fa-star" style={{color:"white",fontSize:".7rem"}}></i> {(avgRating>4)?avgRating:random}</h5>
          <h5 className={styles.infoItem}>{minDeliveryTime} mins</h5>
          <h5>{}</h5>
        </div>
      </div>
    </div>
   
  )
}

export default RestaurantCard


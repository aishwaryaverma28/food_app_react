import React from 'react'
import { IMG_BASE_URL } from '../utils/constants'
import styles from "./RestaurantCard.module.css"

function RestaurantCard(restaurant) {
   let random = (Math.random()* (5 - 3)+3 ).toFixed(1);
  return (
   
    <div>
      <img className={styles.image} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant?.restaurant?.cloudinaryImageId} alt="" />
      <div className={styles.details}>
        <h2 className={styles.title}>{restaurant?.restaurant?.name}</h2>
        <h5 className={styles.subtitle}>{restaurant?.restaurant?.cuisines.join(", ")}</h5>
        <h6 className={styles.area}>{restaurant?.restaurant?.areaName}</h6>
        <div className={styles.info}>
          <h4 className={styles.infoItem}>{restaurant?.restaurant?.costForTwo}</h4>
          <h5 className={(restaurant?.restaurant?.avgRating>4 || random>4)? styles.infoItemTop : styles.infoItemPoor}><i class="fa-solid fa-star" style={{color:"white",fontSize:".7rem"}}></i> {(restaurant?.restaurant?.avgRating>4)?restaurant?.restaurant?.avgRating:random}</h5>
          <h5 className={styles.infoItem}>{restaurant?.restaurant?.isOpen ? "Open": "Closed"} </h5>
          <h5>{}</h5>
        </div>
      </div>
    </div>
   
  )
}

export default RestaurantCard


import React from 'react';
import styles from './LastPage.module.css';
import { AiOutlineDown, AiFillClockCircle } from 'react-icons/ai';
import image from "../assets/foodDelivery.gif";


function LastPage() {
    return (
        <>
            <div className={styles.LastPage_container}>
                <h3 className={styles.LastPage_paymnt}>YOUR ORDER IS PLACED!!!</h3>
                    <h3 className={styles.LastPage_heading}> Your Food is getting prepared!</h3>
                    <div className={styles.LastPage_container1}>
                        <h4 className={styles.LastPage_ontttime}><AiFillClockCircle /> On Time</h4>
                        <h4 className={styles.LastPage_ontttime}> Food is in Kitchen </h4>
                    </div>
               
            </div>

            <div className={styles.LastPage_gif}>
                <img src={image} />
                <h2 className={styles.LastPage_line}>Please wait I will bring your food soon.</h2>
            </div>


        </>
    )
}

export default LastPage;
import React from 'react';
import styles from './ErrorPage.module.css';
import image from '../assets/error_img.jpeg';

export default function Error({error}){
    return(
        <div>
            {/* <h1>Error is {error}</h1> */}
            <h1 className={styles.ErrorPage_heading}>Page not found: The page you are looking for doesn't exsist.</h1>
            <div className={styles.ErrorImageContainer}>
            <img src={image} className={styles.error_image}/>
            </div>
        </div>
    )
}
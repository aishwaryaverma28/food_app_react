import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';
import image from '../assets/error_img.jpeg';

export default function Error({error}){
    return(
        <div>
            <h1 className={styles.ErrorPage_heading}>Page not found: The page you are looking for doesn't exist.</h1>
            <Link to="/" className={styles.ErrorPage_heading}>Go to Home</Link>
            <div className={styles.ErrorImageContainer}>
                <img src={image} className={styles.error_image}/>
            </div>
        </div>
    )
}

import React, { useState } from 'react';
import styles from "./Contact.module.css";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info })  => {
    const [showInfo, setShowInfo] = useState(false);
return (
    <article className={styles.question}>
        <header className={styles.question_header}>
            <h4 className={styles.question_h4}>{title}</h4>
            <button className={styles.btn} onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>

        </header>
        {showInfo && <p className={styles.question_p}>{info}</p>}
    </article>    
)
}

export default Question;
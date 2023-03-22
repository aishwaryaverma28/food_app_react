import React from 'react'
import styles from "./Shimmer.module.css"

function Shimmer() {
    return (

        <div className={styles.shimmerContainer}>
            {Array(15).fill("  ").map((el) => {
                return (

                    <div className={styles.cardShimmer}>
                        <div className={styles.cardShimmerUp}></div>
                        <div className={styles.shimmerLineOne}></div>
                        <div className={styles.shimmerLineTwo}></div>
                        <div className={styles.shimmerLineThree}></div>
                    </div>

                )

            })}
        </div>
    )
}

export default Shimmer
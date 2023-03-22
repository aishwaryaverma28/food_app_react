import styles from "./About.module.css";
import cooking from "../assets/cooking.gif"
import delivery from "../assets/delivery.gif"
import eating from "../assets/eating.gif";
import rigArr from "../assets/rightArr1.png"
import banner from "../assets/banner.png"
import maharaja from "../assets/maharaja.jpg";
import downArrow from "../assets/downArrow.jpg";
export default function About(){
    return(
        <div className={styles.about_us}>
           
            <h1 className={styles.about_heading}>We serve Best Food super Fast</h1>
            <h3 className={styles.about_heading2}>Know About Us</h3>
            <div className={styles.About_box}>
                <p className={styles.about_para}>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
                <img src={banner} alt="banner" className={styles.box1_banner}/>
            </div>
            <h3 className={styles.About_h3}>Service we provide</h3>
            <h4 className={styles.about_content1}>HUNGRY KYA??? Just Munch it! </h4>
                <h4 className={styles.about_content}>We deliver Your favourite food from your favourite restaurants.</h4>
            <div className={styles.about_images}>
                <img src={cooking} alt="cooking"/>
                <img src={rigArr} className={styles.about_arrow}/>
                <img src={downArrow} alt="arrow" className={styles.about_downarrow} />
                <img src={delivery} alt="delivery"/>
                <img src={rigArr} className={styles.about_arrow}/>
                <img src={downArrow} alt="arrow" className={styles.about_downarrow} />
                <img src={eating} alt="eating"/>
            </div>
            <div className={styles.about_ending}>
                 <img src={maharaja} alt="maharaja" className={styles.ending_img}/>
                 <h4 className={styles.about_content}>We are happy to serve with love</h4>
            </div>

        </div>
    )
}
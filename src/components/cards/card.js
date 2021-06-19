import React, {useState} from "react"
import styles from "./cards.module.css"
import logoBrown from "../../assets/cardLogos/logoforbrown.png"
import logoBlue from "../../assets/cardLogos/logoforblue.png"
import logoViolet from "../../assets/cardLogos/logoforviolet.png"

const creditCard = React.forwardRef((props, ref) => {
    
    return(
    props.brown ? <div ref={ref}>
        <div className={props.startAnimation ? `${styles.cardBrown} ${styles.animationBrown}` : styles.cardBrown}>
            <img className={styles.logoBrown} src={logoBrown} alt="master card"></img>
            <p className={styles.cardHolder}>SHIRAAZ &nbsp; AHAMMED</p>
            <p className={styles.cardAmount}>$5,750,20</p>
            <p className={styles.cardNumber}>5282 3456 7890 1289</p>
            <p className={styles.cardDate}>9/25</p>
        </div>
    </div> :
    props.blue ? <div ref={ref}>
        <div className={props.startAnimation ? `${styles.cardBlue} ${styles.animationBlue}` : styles.cardBlue}>
            <img className={styles.logoBrown} src={logoBlue} alt="master card"></img>
            <p className={`${styles.cardHolder} ${styles.textWhite}`}>SHIRAAZ &nbsp; AHAMMED</p>
            <p className={`${styles.cardAmount} ${styles.textWhite}`}>$2,750,20</p>
            <p className={`${styles.cardNumber} ${styles.textWhite}`}>4163 1863 6740 4520</p>
            <p className={`${styles.cardDate} ${styles.textWhite}`}>1/22</p>
        </div>
    </div> : 
    props.violet ? <div ref={ref}>
        <div className={props.startAnimation ? `${styles.cardViolet} ${styles.animationViolet}` : styles.cardViolet}>
            <img className={styles.logoBrown} src={logoViolet} alt="master card"></img>
            <p className={`${styles.cardHolder} ${styles.textWhite}`}>SHIRAAZ &nbsp; AHAMMED</p>
            <p className={`${styles.cardAmount} ${styles.textWhite}`}>$7,750,20</p>
            <p className={`${styles.cardNumber} ${styles.textWhite}`}>6532 1579 3456 5356</p>
            <p className={`${styles.cardDate} ${styles.textWhite}`}>13/27</p>
        </div>
    </div> : null
)})

export default creditCard;
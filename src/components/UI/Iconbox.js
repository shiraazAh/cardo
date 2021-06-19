import React, {useState, useEffect} from "react";
import {motion} from'framer-motion'

import styles from './iconBox.module.css';

const IconBox = (props) => {

    const [styleClass, setStyleClass] = useState('')

    useEffect(() => {
        if(props.selectedCard === 'brown') {
            setStyleClass(styles.iconBoxBrown)
        } else if (props.selectedCard === 'blue') {
            setStyleClass(styles.iconBoxBlue)
        } else if (props.selectedCard === 'violet') {
            setStyleClass(styles.iconBoxViolet)
        }
    }, [props.selectedCard])

    return (
        <motion.div 
            className={styleClass}
            animate={{scale: 0.9}}
            initial={{scale: 0.8}}>
            <img src={props.src}></img>
        </motion.div>
    )
}

export default React.memo(IconBox);
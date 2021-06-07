import React, {useState, useEffect} from "react";

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
        <div className={styleClass}>
            <img src={props.src}></img>
        </div>
    )
}

export default IconBox;
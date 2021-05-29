import React, {useState, useEffect} from "react";

import styles from './iconBox.module.css';

const IconBox = (props) => {

    const [styleClass, setStyleClass] = useState('')

    useEffect(() => {
        if(props.color === 'brown') {
            setStyleClass(styles.iconBoxBrown)
        } else if (props.color === 'blue') {
            setStyleClass(styles.iconBoxBlue)
        } else if (props.color === 'violet') {
            setStyleClass(styles.iconBoxViolet)
        }
    }, [props.color])

    return (
        <div className={styleClass}>
            <img src={props.src} alt="IconBox Logo"></img>
        </div>
    )
}

export default IconBox;
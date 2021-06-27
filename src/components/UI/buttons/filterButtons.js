import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';

const FilterButton = (props) => {

    const [color, setColor] = useState('#C9974E')
    
    useEffect(() => {
        if(props.selectedCard === 'brown') {
            setColor('#C9974E')
        } else if (props.selectedCard === 'blue') {
            setColor('#2E26D9')
        } else if (props.selectedCard === 'violet') {
            setColor('#A136F4')
        }
    }, [color, props.selectedCard])

    return (
        <motion.div className={props.class} 
            initial={{scale: 0.9}} 
            animate={{scale: 1}} 
            style={props.selected && {background: color, color: 'white'}} 
            whileTap={{scale: 1.05}} 
            onTap={props.click}>
                {props.children}
        </motion.div>
    )
}

export default React.memo(FilterButton);
import React from 'react';
import { motion } from 'framer-motion';

const FilterButton = (props) => (
    <motion.div className={props.class} style={props.selected && {background: "#C8964D", color: 'white'}} whileTap={{scale: 1.05}} onTap={props.click}>
        {props.children}
    </motion.div>
)

export default FilterButton;
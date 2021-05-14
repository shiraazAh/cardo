import React, { useState, useEffect } from 'react'
import ExpensesContainer from "./ExpensesContainer";
import { motion } from 'framer-motion'
import useWindowDimensions from '../extras/useWindowDimensions'

const ExpenseMotionContainer = () => {
  const [initial, setInitial] = useState('startPosition');
  const [animate, setAnimate] = useState('startAnimate')
//   const [scrollPos, setScrollPos] = useState(1)
  const { height, width } = useWindowDimensions();

  // useEffect(() => { // Initial Animation is true (should happen), then after 1.5 seconds it should be removed (should'nt happen)
  //   setTimeout(() => {
  //       setInitial('secondPostion')
  //   }, 2000)
  // }, [])
  // let scrollPos = 1;

  // const setScrollPos = (value) => {
  //   scrollPos = (value - 400)/300;
  // }

  const variants = {
    //When Brown Selected
    startAnimate: {
      y: -30,
      transition: { duration: 0.5, delay: 1.5}, //type: 'spring'
    },
    startPosition: {
      y: 0,
    },
    secondPostion: {
      y: 470,
    }
  }

  const MotionComponent = motion(ExpensesContainer)
  return (
    <div>
        <MotionComponent drag="y" 
        initial={initial}
        animate={animate}
        variants={variants}
        transition={{duration: 0.5, delay: 1.5}}
          onDrag={
            (event, info) => {
              console.log(info.point.x, info.point.y, info, height, width)
              if(info.point.y <= 700 && info.point.y >= 400) {
                // setScrollPos((info.point.y - 400)/300)
              }
            }
          }/>
        {/* <motion.div style={{background: 'white', height: '40px',}}drag></motion.div>   */}
    </div>
  );
}

export default ExpenseMotionContainer;

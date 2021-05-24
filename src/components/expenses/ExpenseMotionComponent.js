import React, { useState, useEffect, useRef } from 'react'
import ExpensesContainer from "./ExpensesContainer";
import { motion } from 'framer-motion'
import useWindowDimensions from '../extras/useWindowDimensions'

const ExpenseMotionContainer = () => {
  const [initial, setInitial] = useState('startPosition');
  const [animate, setAnimate] = useState('startAnimate')
//   const [scrollPos, setScrollPos] = useState(1)
  const { height, width } = useWindowDimensions();
  let compHeight = height;
  const compMovePercentage = useRef(100) //The percentage value of how much percentage of the screen size did the component bee dragged 

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
              let move = compHeight;
              console.log(move, event.movementY, height, width)
              compHeight = move + event.movementY;
              compMovePercentage.current = (((compHeight)/height) * 100)
              console.log(compHeight, compMovePercentage)
            }
          }
          // DirectionLock={axis => {
          //   console.log(axis);
          // }}
          />
        {/* <motion.div style={{background: 'white', height: '40px',}}drag></motion.div>   */}
    </div>
  );
}

export default ExpenseMotionContainer;

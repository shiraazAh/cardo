import React, { useState, useEffect, useRef } from 'react'
import ExpensesContainer from "./ExpensesContainer";
import { motion, useMotionValue } from 'framer-motion'
import useWindowDimensions from '../extras/useWindowDimensions'

const ExpenseMotionContainer = (props) => {
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

  const y = useMotionValue(-30);

  useEffect(() => {
    setTimeout(() => {
      setInitial('secondPostion')
      setAnimate('afterFirstAnimate')
    }, 2200)
  }, [])

  const variants = {
    //When Brown Selected
    startAnimate: {
      y: -30,
      transition: { duration: 0.5, delay: 1.5}, //type: 'spring'
    },
    afterFirstAnimate: {
      y: -30,
      transition: { duration: 0.5}, //type: 'spring'
    },
    startPosition: {
      y: 0,
    },
    secondPostion: {
      y: y.get(),
      transition: { duration: 0.5, delay: 0.2},
    }
  }

  const MotionComponent = motion(ExpensesContainer)
  return (
    <div>
        <MotionComponent drag="y" 
        style={{y}}
        selectedCard={props.selectedCard}
        initial={initial}
        animate={animate}
        variants={variants}
        // transition={{duration: 0.5, delay: 1.5}}
          onDrag={
            (event, info) => {
              let move = compHeight;
              compHeight = move + event.movementY;
              compMovePercentage.current = (((compHeight)/height) * 100)
            }
            
          }
          dragConstraints={{bottom: 20, top: -650}}
          />
        {/* <motion.div style={{background: 'white', height: '40px',}}drag></motion.div>   */}
    </div>
  );
}

export default ExpenseMotionContainer;

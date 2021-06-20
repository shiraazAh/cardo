import React, { useState, useEffect } from 'react'
import ExpensesContainer from "./ExpensesContainer";
import { motion, useMotionValue } from 'framer-motion'

const ExpenseMotionContainer = (props) => {
  const [initial, setInitial] = useState('startPosition');
  const [animate, setAnimate] = useState('startAnimate');
  const [showAmount, setShowAmount] = useState(false);
//   const [scrollPos, setScrollPos] = useState(1)

  const y = useMotionValue(-30);

  useEffect(() => {
    setTimeout(() => {
      setInitial('secondPostion')
      setAnimate('afterFirstAnimate')
      setShowAmount(true)
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
        showAmount={showAmount}
        // transition={{duration: 0.5, delay: 1.5}}
        dragConstraints={{bottom: 20, top: -800}}
        dragElastic={0.1}
          />
    </div>
  );
}

export default ExpenseMotionContainer;

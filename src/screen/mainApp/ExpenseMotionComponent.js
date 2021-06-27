import React, { useState, useEffect } from 'react'
import ExpensesContainer from "../../components/Expenses/ExpensesContainer";
import { motion, useMotionValue } from 'framer-motion'

const ExpenseMotionContainer = (props) => {
  const [initial, setInitial] = useState('startPosition');
  const [animate, setAnimate] = useState('startAnimate');
  const [showAmount, setShowAmount] = useState(false);

  const y = useMotionValue(-30);

  useEffect(() => {
    setTimeout(() => {
      setInitial('secondPostion')
      setAnimate('afterFirstAnimate')
      setShowAmount(true)
    }, 3000)
  }, [])

  const variants = {
    //When Brown Selected
    startAnimate: {
      y: -30,
      transition: { duration: 0.5, delay: 2.5},
    },
    afterFirstAnimate: {
      y: -30,
      transition: { duration: 0.5},
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
        dragConstraints={{bottom: 20, top: -800}}
        dragElastic={0.1}
          />
    </div>
  );
}

export default ExpenseMotionContainer;

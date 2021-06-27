import React, {useEffect, useState, useReducer} from 'react'
import CreditCard from '../../components/Cards/card';
import {initialCardPositionReducer, animationReducer} from '../../utils/reducers'
import { motion } from 'framer-motion'

import '../../App.css'

const AllCards = (props) => {

  const MotionComponent = motion(CreditCard)

  const [cardAnimate, dispatchCard] = useReducer(animationReducer, {
    BrownCard: "selectedBrown_brown",  //Current Animation for brown card 
    BlueCard: "selectedBrown_blue",  //Current Animation for blue card
    VioletCard: "selectedBrown_violet", //Current Animation for violet card
  })

  const [initialCardPos, dispatchInitial] = useReducer(initialCardPositionReducer, {
    BrownCard: '', // Initial position for Brown Card
    BlueCard: '', // Initial position for Blue Card
    VioletCard: '', // Initial position for Violet Card
  })

  const [selectedCard, setCard] = useState('brown')

  const [startAnimation, setStartAnimation] = useState(''); // Initial animation for cards (true or false)

  useEffect(() => { // Initial Animation is true in 1s (should happen)
    setTimeout(() => {
      setStartAnimation(true)
  }, 1000)
    setTimeout(() => { // then after 2.5 seconds it should be removed (should'nt happen)
        setStartAnimation(false)
    }, 2500)
  }, [])

  const variants = {
    //When Brown Selected
    selectedBrown_brown: {
      x: 70, y: 20, opacity: 1, scale: 1.1, 
      transition: { duration: 0.5, delay: startAnimation ? 1.5 : 0}, //type: 'spring'
    },
    selectedBrown_blue: {
      x: 35, y: 10, opacity: 0.8, scale: 1 ,
      transition: { duration: 0.5, delay: startAnimation ? 1.5 : 0},
    },
    selectedBrown_violet: {
      x: 2, y: 0, opacity: 0.6, scale: 1,
      transition: { duration: 0.5, delay: startAnimation ? 1.5 : 0},
    },
    //When Blue Selected
    selectedBlue_brown: {
      x: 180, y: 130, opacity: 0.6, scale: 1,
      transition: { duration: 0.5},
    },
    selectedBlue_blue: {
      x: 120, y: 20, opacity: 1, scale: 1.1, 
      transition: { duration: 0.5},
    },
    selectedBlue_violet: {
      x: 55, y: 5, opacity: 0.6, scale: 0.9,
      transition: { duration: 0.5},
    },
    //When Violet Selected
    selectedViolet_brown: {
      x: 220, y: 160, opacity: 0.6, scale: 0.9,
      transition: { duration: 0.5},
    },
    selectedViolet_blue: {
      x: 170, y: 110, opacity: 0.6, scale: 0.9,
      transition: { duration: 0.5},
    },
    selectedViolet_violet: {
      x: 138, y: 0, opacity: 1, scale: 1.1,
      transition: { duration: 0.5},
    },
  }

  const selectBrown = () => {
    if(selectedCard === "brown") {
      dispatchInitial({type: "AllFalse"})
    } else {
      dispatchInitial({type: "Brown", card: cardAnimate.BlueCard })
      dispatchCard({type: "Brown"})
      setCard("brown");
      props.setCardColor('brown')
    }
  }
  
  const selectBlue = () => {

    if(selectedCard === "blue") {
      dispatchInitial({type: "AllFalse"})
    } else {
      dispatchInitial({type: "Blue", card: cardAnimate.BrownCard })
      dispatchCard({type: "Blue"})
      setCard("blue")
      props.setCardColor('blue')
    }
  }


  const selectViolet = () => {

    if(selectedCard === "violet") {
      dispatchInitial({type: "AllFalse"})
    } else {
      dispatchInitial({type: "Violet", card: cardAnimate.BlueCard })
      dispatchCard({type: "Violet"})
      setCard('violet')
      props.setCardColor('violet')
    }
  }


  return (
    <div className="all-cards-container" style={{background: 'black'}}>
        <h3 className="card-heading">Select a card</h3>  
        <p className="card-subheading">Tap to view card payments</p>  
        {/* Violet Card */}
        <MotionComponent
          violet
          startAnimation={startAnimation}
          animate={cardAnimate.VioletCard}
          variants={variants}
          whileTap={selectViolet}
          initial={initialCardPos.VioletCard}
          />
        {/* Blue Card */}  
        <MotionComponent
          blue
          startAnimation={startAnimation}
          animate={cardAnimate.BlueCard}
          variants={variants}
          whileTap={selectBlue}
          initial={initialCardPos.BlueCard}
        />
        {/* Brown Card */}
        <MotionComponent
          brown
          startAnimation={startAnimation}
          animate={cardAnimate.BrownCard}
          variants={variants}
          whileTap={selectBrown}
          initial={initialCardPos.BrownCard}
        />
    </div>
  );
}

export default AllCards;

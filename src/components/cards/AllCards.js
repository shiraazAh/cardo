import React, {useEffect, useState, useReducer} from 'react'
import CreditCard from './card';
import { motion } from 'framer-motion'

import '../../App.css'

const animationReducer = (selectedCard, action) => {
  switch (action.type) {
    case "Brown":
      return {
        BrownCard: "selectedBrown_brown",
        BlueCard: "selectedBrown_blue",
        VioletCard: "selectedBrown_violet",
      }
    case "Blue": 
      return {
        BrownCard: "selectedBlue_brown",
        BlueCard: "selectedBlue_blue",
        VioletCard: "selectedBlue_violet",
      }
    case "Violet":
      return {
        BrownCard: "selectedViolet_brown",
        BlueCard: "selectedViolet_blue",
        VioletCard: "selectedViolet_violet",
      }
    default:
      break;
    }
} 

const initialCardPositionReducer = (initialCard, action) => {
  switch (action.type) {
    case "Brown":
      if(action.card === "selectedBlue_blue") {
        return {
          BrownCard: "selectedBlue_brown",
          BlueCard: "selectedBlue_blue",
          VioletCard: "selectedBlue_violet",
        }
      } else {
        return {
          BrownCard: "selectedViolet_brown",
          BlueCard: "selectedViolet_blue",
          VioletCard: "selectedViolet_violet",
        }
      }
    case "Blue": 
      if(action.card === "selectedBrown_brown") {
        return {
          BrownCard: "selectedBrown_brown",
          BlueCard: "selectedBrown_blue",
          VioletCard: "selectedBrown_violet",
        }
      } else {
        return {
          BrownCard: "selectedViolet_brown",
          BlueCard: "selectedViolet_blue",
          VioletCard: "selectedViolet_violet",
        }
      }
    case "Violet":
      if(action.card === "selectedBlue_blue") {
        return {
          BrownCard: "selectedBlue_brown",
          BlueCard: "selectedBlue_blue",
          VioletCard: "selectedBlue_violet",
        }
      } else {
        return {
          BrownCard: "selectedBrown_brown",
          BlueCard: "selectedBrown_blue",
          VioletCard: "selectedBrown_violet",
        }
      }
    default:
      break;
    }
} 

const AllCards = (props) => {

  const [selectedCard, dispatchCard] = useReducer(animationReducer, {
    BrownCard: "selectedBrown_brown",  //Current Animation for brown card 
    BlueCard: "selectedBrown_blue",  //Current Animation for blue card
    VioletCard: "selectedBrown_violet", //Current Animation for violet card
  })

  const [initialCardPos, dispatchInitial] = useReducer(initialCardPositionReducer, {
    BrownCard: '', // Initial position for Brown Card
    BlueCard: '', // Initial position for Blue Card
    VioletCard: '', // Initial position for Violet Card
  })

  const [initialBrown, setInitialBrown] = useState('') // Initial position for Brown Card
  const [initialBlue, setInitialBlue] = useState('') // Initial position for Blue Card
  const [initialViolet, setInitialViolet] = useState('') // Initial position for Violet Card

  const [startAnimation, setStartAnimation] = useState(''); // Initial animation for cards (true or false)

  const [check, setCheck] = useState(false);
  const MotionComponent = motion(CreditCard)

  useEffect(() => { // Initial Animation is true (should happen), then after 1.5 seconds it should be removed (should'nt happen)
    setStartAnimation(true) 
    setTimeout(() => {
        setStartAnimation(false)
    }, 1500)
  }, [])

  useEffect(() => {
   console.log(check) 
   if(check) {
   setInitialBlue(false)
   setInitialBrown(false)
   setInitialViolet(false)
   }
  }, [check])

  const variants = {
    //When Brown Selected
    selectedBrown_brown: {
      x: 70, y: 20, opacity: check ? 0.2 : 1, scale: 1.1, 
      transition: { duration: 0.5, delay: startAnimation ? 1.5 : 0}, //type: 'spring'
    },
    selectedBrown_blue: {
      x: 35, y: 10, opacity: check ? 0.2 : 0.8, scale: 1 ,
      transition: { duration: 0.5, delay: startAnimation ? 1.5 : 0},
    },
    selectedBrown_violet: {
      x: 2, y: 0, opacity: check ? 0.2 : 0.6, scale: 1,
      transition: { duration: 0.5, delay: startAnimation ? 1.5 : 0},
    },
    //When Blue Selected
    selectedBlue_brown: {
      x: 180, y: 130, opacity: check ? 0.2 : 0.6, scale: 1,
      transition: { duration: 0.5},
    },
    selectedBlue_blue: {
      x: 120, y: 20, opacity: check ? 0.2 : 1, scale: 1.1, 
      transition: { duration: 0.5},
    },
    selectedBlue_violet: {
      x: 55, y: 5, opacity: check ? 0.2 : 0.6, scale: 0.9,
      transition: { duration: 0.5},
    },
    //When Violet Selected
    selectedViolet_brown: {
      x: 220, y: 160, opacity: check ? 0.2 : 0.6, scale: 0.9,
      transition: { duration: 0.5},
    },
    selectedViolet_blue: {
      x: 170, y: 110, opacity: check ? 0.2 : 0.6, scale: 0.9,
      transition: { duration: 0.5},
    },
    selectedViolet_violet: {
      x: 138, y: 0, opacity: check ? 0.2 : 1, scale: 1.1,
      transition: { duration: 0.5},
    },
  }

  const selectBrown = () => {
    dispatchInitial({type: "Brown", card: selectedCard.BlueCard })
    dispatchCard({type: "Brown"})
  }
  
  const selectBlue = () => {
    dispatchInitial({type: "Blue", card: selectedCard.BrownCard })
    dispatchCard({type: "Blue"})
  }


  const selectViolet = () => {
    dispatchInitial({type: "Violet", card: selectedCard.BlueCard })
    dispatchCard({type: "Violet"})
  }

  return (
    <div className="all-cards-container" style={{background: 'black'}}>
        <h3 className="card-heading">Select a card</h3>  
        <p className="card-subheading">Tap to view card payments</p>  
        <button onClick={() => setCheck(!check)}>Just click</button>
        <MotionComponent
          violet
          startAnimation={startAnimation}
          animate={selectedCard.VioletCard}
          variants={variants}
          whileTap={selectViolet}
          initial={initialCardPos.VioletCard}
          />
        <MotionComponent
          blue
          startAnimation={startAnimation}
          animate={selectedCard.BlueCard}
          variants={variants}
          whileTap={selectBlue}
          initial={initialCardPos.BlueCard}
        />
        <MotionComponent
          brown
          startAnimation={startAnimation}
          animate={selectedCard.BrownCard}
          variants={variants}
          whileTap={selectBrown}
          initial={initialCardPos.BrownCard}
        />
    {/* <motion.div 
    style={{background: 'white', width: '40px', height: '40px', position: 'absolute', top: '50%', left: '50%'}}
    animate={{ x: 70, y: 20, scale: 1.1 }}
    whileHover={{
      scale: 3,
      transition: { duration: 1 },
    }}
    whileTap={{ scale: 5 }}/> */}
    </div>
  );
}

export default AllCards;

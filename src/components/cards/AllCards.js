import React, {useEffect, useState} from 'react'
import CreditCard from './card';
import { motion } from 'framer-motion'

import '../../App.css'


const AllCards = (props) => {

  const [brownCard, setBrownCard] = useState('selectedBrown_brown') //Current Animation for brown card
  const [blueCard, setBlueCard] = useState('selectedBrown_blue') //Current Animation for blue card
  const [violetCard, setVioletCard] = useState('selectedBrown_violet') //Current Animation for violet card

  const [initialBrown, setInitialBrown] = useState('') // Initial position for Brown Card
  const [initialBlue, setInitialBlue] = useState('') // Initial position for Blue Card
  const [initialViolet, setInitialViolet] = useState('') // Initial position for Violet Card

  const [startAnimation, setStartAnimation] = useState(''); // Initial animation for cards (true or false)

  const MotionComponent = motion(CreditCard)

  useEffect(() => { // Initial Animation is true (should happen), then after 1.5 seconds it should be removed (should'nt happen)
    setStartAnimation(true) 
    setTimeout(() => {
        setStartAnimation(false)
    }, 1500)
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

  const selectBlue = () => {
    if(brownCard === "selectedBrown_brown") {
      setInitialBrown("selectedBrown_brown")
      setInitialBlue("selectedBrown_blue")
      setInitialViolet("selectedBrown_violet")
    } else {
      setInitialBrown("selectedViolet_brown")
      setInitialBlue("selectedViolet_blue")
      setInitialViolet("selectedViolet_violet")
    }

    setBrownCard("selectedBlue_brown")
    setBlueCard("selectedBlue_blue")
    setVioletCard("selectedBlue_violet")
  }

  const selectBrown = () => {
    if(blueCard === "selectedBlue_blue") {
      setInitialBrown("selectedBlue_brown")
      setInitialBlue("selectedBlue_blue")
      setInitialViolet("selectedBlue_violet")
    } else {
      setInitialBrown("selectedViolet_brown")
      setInitialBlue("selectedViolet_blue")
      setInitialViolet("selectedViolet_violet")
    }
    
    setBrownCard("selectedBrown_brown")
    setBlueCard("selectedBrown_blue")
    setVioletCard("selectedBrown_violet")
  }

  const selectViolet = () => {
    if(blueCard === "selectedBlue_blue") {
      setInitialBrown("selectedBlue_brown")
      setInitialBlue("selectedBlue_blue")
      setInitialViolet("selectedBlue_violet")
    } else {
      setInitialBrown("selectedBrown_brown")
      setInitialBlue("selectedBrown_blue")
      setInitialViolet("selectedBrown_violet")
    }
    
    setBrownCard("selectedViolet_brown")
    setBlueCard("selectedViolet_blue")
    setVioletCard("selectedViolet_violet")
  }

  return (
    <div className="all-cards-container" style={{background: 'black'}}>
        <h3 className="card-heading">Select a card</h3>  
        <p className="card-subheading">Tap to view card payments</p>  
        <MotionComponent
          violet
          startAnimation={startAnimation}
          animate={violetCard}
          variants={variants}
          whileTap={selectViolet}
          initial={initialViolet}
          />
        <MotionComponent
          blue
          startAnimation={startAnimation}
          animate={blueCard}
          variants={variants}
          whileTap={selectBlue}
          initial={initialBlue}
        />
        <MotionComponent
          brown
          startAnimation={startAnimation}
          animate={brownCard}
          variants={variants}
          whileTap={selectBrown}
          initial={initialBrown}
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

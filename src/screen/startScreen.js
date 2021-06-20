import React, { useRef, useEffect, useState } from "react";
import NameContext from "../context/context";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import DesktopVersion from "./DesktopVersion";
import IphoneXLayout from "../assets/iPhone X - Silver.png";
import "../App.css";

const StartScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [themeSelected, setThemeSelected] = useState(false);
  const [userName, setUserName] = useState("");
  const [nameGiven, setNameGiven] = useState("");

  const x = useMotionValue(80);
  const xInput = [-80, 0, 80];
  const constraintsRef = useRef(null);
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #FFFFFF 0%, #bdc3c7 100%)",
    "linear-gradient(180deg, #FFFFFF 0%, #414345 100%)",
    "linear-gradient(180deg, #232526 0%, #000000 100%)",
  ]);
  const border = useTransform(x, xInput, [
    "1px solid #000000",
    "1px solid #000000",
    "1px solid #FFFFFF",
  ]);
  const color = useTransform(x, xInput, ["#000000", "#000000", "#FFFFFF"]);

  const boxVariants = {
    dark: {
      x: 80,
      transition: { duration: 1, type: "spring" },
    },
    light: {
      x: -80,
      transition: { duration: 1, type: "spring" },
    },
  };

  const textVariants = {
    selected: {
      scale: 1.4,
      textShadow: isDarkTheme ? "2px 2px 20px white" : "2px 2px 20px black",
      transition: { duration: 0.5 },
    },
    notSelected: {
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const onChangeTheme = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false);
    } else if (!isDarkTheme) {
      setIsDarkTheme(true);
    }
  };

  const handleInput = (e) => {
    let value = e.target.value;
    setUserName(value);
  };

  const handleName = () => {
    setNameGiven(true);
  };

  return (
    <NameContext.Provider value={userName}>
      <motion.div className="startScreen-container" style={{ background }}>
        <AnimatePresence>
          {!themeSelected && !nameGiven && (
            <motion.div key="select-theme" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
              <motion.div 
                className="startScreen-header" 
                style={{ color }}>
                  Select a theme
              </motion.div>
              <motion.p
                className="startScreen-light"
                style={{ color }}
                animate={isDarkTheme === true ? "notSelected" : "selected"}
                variants={textVariants}
              >
                Light
              </motion.p>
              <motion.div className="drag-area" ref={constraintsRef} />
              <motion.div
                className="box"
                style={{ x }}
                animate={isDarkTheme === true ? "dark" : "light"}
                variants={boxVariants}
                whileTap={{ scale: 1.1 }}
                onTapStart={() => onChangeTheme()}
              />
              <motion.p
                className="startScreen-dark"
                style={{ color }}
                animate={isDarkTheme === true ? "selected" : "notSelected"}
                variants={textVariants}
              >
                Dark
              </motion.p>
              <motion.button
                className="startScreen-button"
                onClick={() => setThemeSelected(true)}
                style={{ border, color }}
              >
                Next
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {themeSelected && !nameGiven && (
              <motion.div key="select-theme" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}} exit={{opacity: 0}}>
              <motion.div 
              className="startScreen-name-header" style={{ color }}>
                Enter the name you want shown on the cards
              </motion.div>
              <motion.input
                className={`startScreen-input ${
                  isDarkTheme ? "input-dark" : "input-light"
                }`}
                onChange={handleInput}
                type="text"
                style={{ border, color }}
              ></motion.input>
              <motion.button
                className="startScreen-name-button"
                onClick={() => handleName()}
                style={{ border, color }}
              >
                Start
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {themeSelected && nameGiven && (
            <motion.div
              className="App example"
              style={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img className="iPhoneX-layout" src={IphoneXLayout}></img>
              <DesktopVersion userName={userName} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </NameContext.Provider>
  );
};

export default StartScreen;

import React, { useRef, useEffect, useState } from "react";
import NameContext from "../context/context";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import App from "./mainApp/mainApp";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import IphoneXLayout from "../assets/iPhone X - Silver.png";
import "../App.css";

// toast.configure();

const StartScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [themeSelected, setThemeSelected] = useState(false);
  const [userName, setUserName] = useState("");
  const [nameGiven, setNameGiven] = useState("");
  const [error, setError] = useState("")

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
      transition: { duration: 0.5},
    },
    light: {
      x: -80,
      transition: { duration: 0.5},
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

  useEffect(() => {
    const errorToaster = () => toast.error(error); toast.clearWaitingQueue();
    if(error) errorToaster(); setError(""); 
  }, [error])

  const handleName = () => {
    if(userName.length >= 18) {
      setError("Name should contain less than 18 characters")
    } else if (userName.length <= 8 || userName.length === 0) {
      setError("Name should contain atleast 8 characters")
    } else {
      setNameGiven(true);
    }
  };

  return (
    <NameContext.Provider value={userName}>
      <ToastContainer limit={1}/>
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
                className={isDarkTheme ? "startScreen-button-dark" : "startScreen-button-light"}
                onClick={() => setThemeSelected(true)}
                style={{ border }}
              >
                Next
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {themeSelected && !nameGiven && (
              <motion.div key="select-theme" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.2}} exit={{opacity: 0}}>
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
                className={isDarkTheme ? "startScreen-name-button-dark" : "startScreen-name-button-light"}
                onClick={() => handleName()}
                style={{ border }}
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
              transition={{ duration: 0.5, delay: 1 }}
            >
              <img className="iPhoneX-layout" src={IphoneXLayout}></img>
              <App userName={userName} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </NameContext.Provider>
  );
};

export default StartScreen;

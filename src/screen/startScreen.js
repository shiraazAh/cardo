import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import DesktopVersion from "./DesktopVersion";
import IphoneXLayout from "../assets/iPhone X - Silver.png";
import "../App.css";

const StartScreen = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [themeSelected, setThemeSelected] = useState(false);

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

  return (
    <motion.div
      className="startScreen-container"
      style={{ background }}
    >
    {!themeSelected ? (
      <>
        <motion.div className="startScreen-header" style={{ color }}>
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
          whileHover={{ scale: 1.1, boxShadow: "1px 1px 10px #aaa" }}
          onClick={() => setThemeSelected(true)}
          style={{ border, color }}
        >
          Select
        </motion.button>
      </>
      ) : (
        <motion.div className="App example" style={{opacity: 0}} animate={{opacity:1}} transition={{duration: 0.5, delay: 0.3}}>
          <img className="iPhoneX-layout" src={IphoneXLayout}></img>
          <DesktopVersion />
        </motion.div>
      )}
    </motion.div>
  );
};

export default StartScreen;

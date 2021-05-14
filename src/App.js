import React, { useState, useEffect } from 'react'
import AllCards from './components/cards/AllCards';
import ExpenseMotionContainer from './components/expenses/ExpenseMotionComponent'
import useWindowDimensions from './components/extras/useWindowDimensions'

import './App.css';

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App example" style={{background: 'black'}}>
        <AllCards/>
        <ExpenseMotionContainer />
    </div>
  );
}

export default App;

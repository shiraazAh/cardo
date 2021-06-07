import React, { useState, useEffect } from 'react'
import AllCards from './components/cards/AllCards';
import ExpenseMotionContainer from './components/expenses/ExpenseMotionComponent'
import useWindowDimensions from './components/extras/useWindowDimensions'

import './App.css';

function App() {
  const { height, width } = useWindowDimensions();
  const [cardColor, setCardColor] = useState('brown');

  return (
    <div className="App example" style={{background: 'black'}}>
        <AllCards setCardColor={setCardColor}/>
        <ExpenseMotionContainer selectedCard={cardColor}/>
    </div>
  );
}

export default App;

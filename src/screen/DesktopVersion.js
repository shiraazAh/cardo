import React, { useState } from 'react'
import AllCards from '../components/cards/AllCards';
import ExpenseMotionContainer from '../components/expenses/ExpenseMotionComponent'

import '../App.css';

function DesktopApp() {
  const [cardColor, setCardColor] = useState('brown');

  return (
    <div className="App-desktop example" style={{background: 'black'}}>
        <AllCards setCardColor={setCardColor}/>
        <ExpenseMotionContainer selectedCard={cardColor}/>
    </div>
  );
}

export default DesktopApp;

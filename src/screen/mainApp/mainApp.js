import React, { useState } from 'react'
import AllCards from './AllCards';
import ExpenseMotionContainer from './ExpenseMotionComponent'

import '../../App.css';

const DesktopApp = (props) => {
  const [cardColor, setCardColor] = useState('brown');

  return (
    <div className="App-desktop example" style={{background: 'black'}}>
        <AllCards setCardColor={setCardColor}/>
        <ExpenseMotionContainer selectedCard={cardColor}/>
    </div>
  );
}

export default DesktopApp;

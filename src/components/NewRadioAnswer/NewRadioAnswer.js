import React, { useState } from 'react';

import classes from './NewRadioAnswer.module.css';

import { PlusButton } from '../UI/PlusButton/PlusButton';
import { MinusButton } from '../UI/MinusButton/MinusButton';


function NewRadioAnswer( props ) {
  const [answerValue, setAnswerValue] = useState( 0 );
  const [answerText, setAnswerText] = useState( '' );

  function typingAnswerValueHandler( event ) {
    if ( isNaN( event.target.value ) !== true )
      setAnswerValue( parseInt( event.target.value ) );
  }

  function increaseAnswerValueHandler() {
    setAnswerValue( answerValue + 1 );
  }

  function decreaseAnswerValueHandler() {
    setAnswerValue( answerValue - 1 );
  }

  function answerInputHandler( event ) {
    setAnswerText( event.target.value );
  }


  return (
    <div className={ classes.NewRadioAnswer }>
      <span>{ answerText }</span>
      <input
        type="text"
        className={ classes.AnswerText }
        value={answerText}
        onChange={ ( event ) => answerInputHandler( event ) }
      />

      <div className={ classes.AnswerValueBlock }>
        <MinusButton clicked={ decreaseAnswerValueHandler } />
        <input className={ classes.AnswerValueField }
          value={ answerValue }
          onChange={ ( event ) => { typingAnswerValueHandler( event ) } }
          type="number" />
        <PlusButton clicked={ increaseAnswerValueHandler } />
      </div>
    </div>
  );
}

export { NewRadioAnswer };


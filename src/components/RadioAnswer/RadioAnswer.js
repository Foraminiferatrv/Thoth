import React, { useState } from 'react';

import classes from './RadioAnswer.module.css';

import { PlusButton } from '../UI/PlusButton/PlusButton';
import { MinusButton } from '../UI/MinusButton/MinusButton';


function NewRadioAnswer( props ) {
  const [answerValue, setAnswerValue] = useState( 0 );

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

  return (
    <div className={ classes.RadioAnswer }>
      <div>
        <span className={ classes.AnswerText }>{ props.answerText } </span>
      </div>

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


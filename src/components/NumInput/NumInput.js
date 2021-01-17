import React from 'react';

import classes from './NumInput.module.css';

import { PlusButton } from '../UI/PlusButton/PlusButton';
import { MinusButton } from '../UI/MinusButton/MinusButton';


function NumInput( props ) {

  function changeValueHandler( event ) {
    if ( isNaN( event.target.value ) !== true ) {
      props.changeAnswerValue( props.questionId, props.answerIndex, props.depIndex, 'set', event.target.value );
    }
  }
  function increaseAnswerValueHandler() {
    props.changeAnswerValue( props.questionId, props.answerIndex, props.depIndex, 'increase' );
  }

  function decreaseAnswerValueHandler() {
    props.changeAnswerValue( props.questionId, props.answerIndex, props.depIndex, 'decrease' );
  }

  return (
    <div className={ classes.NumInput }>
      <PlusButton clicked={ increaseAnswerValueHandler } />
      <input className={ classes.ValueField }
        value={ props.answerValue }
        onChange={ ( event ) => { changeValueHandler( event ) } }
        type="number" />
      <MinusButton clicked={ decreaseAnswerValueHandler } />
    </div>
  )
}

export default NumInput;
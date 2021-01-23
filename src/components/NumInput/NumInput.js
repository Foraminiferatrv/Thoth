import React, { useState, useEffect } from 'react';

import classes from './NumInput.module.css';

import { PlusButton } from '../UI/PlusButton/PlusButton';
import { MinusButton } from '../UI/MinusButton/MinusButton';


function NumInput( { numInputValue, getInputValue } ) {
  const [inputValue, setInputValue] = useState( numInputValue );

  function setValueHandler( value ) {
    if ( isNaN( value ) !== true && value !== '' ) {
      setInputValue( value );
    }
    if ( value === '' ) {
      setInputValue( 0 );
    }
  }

  function increaseInputValueHandler( oldValue ) {
    setInputValue( parseFloat( oldValue ) + 1 );
    // props.changeAnswerValue( props.questionId, props.answerIndex, props.depIndex, 'set', parseFloat( inputValue ) );
    // props.changeAnswerValue( props.questionId, props.answerIndex, props.depIndex, 'increase' );
  }

  function decreaseInputValueHandler( oldValue ) {
    setInputValue( parseFloat( oldValue ) - 1 );
    // props.changeAnswerValue( props.questionId, props.answerIndex, props.depIndex, 'decrease' );
  }

  useEffect( () => {
    // if ( props.changeAnswerValue !== undefined ) {
    //   props.changeAnswerValue( props.questionId, props.answerIndex, props.depIndex, 'set', parseFloat( inputValue ) );
    // }
    if ( getInputValue !== undefined ) {
      getInputValue( inputValue );
    }
  }, [inputValue] );

  return (
    <div className={ classes.NumInput }>
      <PlusButton clicked={ () => increaseInputValueHandler( inputValue ) } />
      <input className={ classes.ValueField }
        value={ inputValue }
        onChange={ ( event ) => { setValueHandler( event.target.value ) } }
        type="input" />
      <MinusButton clicked={ () => decreaseInputValueHandler( inputValue ) } />
    </div>
  )
}

export default NumInput;
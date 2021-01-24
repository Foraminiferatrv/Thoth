import React from 'react';

import classes from './NumInput.module.css';

import { PlusButton } from '../UI/PlusButton/PlusButton';
import { MinusButton } from '../UI/MinusButton/MinusButton';


//FIXME: component makes extra update after typing
//TODO: create individual functions in separated file for handlers
function NumInput( { numInputValue, getInputValue } ) {
  function setValueHandler( value ) {
    if ( isNaN( value ) !== true && value !== '' ) {
      getInputValue( value );
    }
    if ( value === '' ) {
      getInputValue( parseFloat( 0 ) );
    }
    if ( value === '-' ) {
      getInputValue( '-' );
    }
  }

  function increaseInputValueHandler( oldValue ) {
    getInputValue( parseFloat( oldValue ) + 1 );
  }

  function decreaseInputValueHandler( oldValue ) {
    getInputValue( parseFloat( oldValue ) - 1 );
  }

  return (
    <div className={ classes.NumInput }>
      <PlusButton clicked={ () => increaseInputValueHandler( numInputValue ) } />
      <input className={ classes.ValueField }
        value={ numInputValue }
        onChange={ ( event ) => { setValueHandler( event.target.value ) } }
        type="input" />
      <MinusButton clicked={ () => decreaseInputValueHandler( numInputValue ) } />
    </div>
  )
}

export default NumInput;
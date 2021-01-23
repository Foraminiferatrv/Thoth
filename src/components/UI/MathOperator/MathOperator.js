import React from 'react';

import classes from './MathOperator.module.css';

import { Input } from '../Input/Input';


function MathOperator( props ) {
  const operators = ['=', '<', '>', '<=', '>='];

  return <div className={ classes.MathOperator }>
    <Input
      inputtype='select'
      noLabel
      selectOptions={ operators.map( operator => ( { optionValue: operator, optionName: operator } ) ) }
    />
  </div>
}

export default MathOperator;
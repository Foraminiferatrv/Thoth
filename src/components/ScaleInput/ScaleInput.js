import React from 'react';

import { Input } from '../UI/Input/Input';


function ScaleInput( props ) {
 
  return (
    <Input
      inputtype='input'
      defaultValue={ props.defaultValue }
      onChange={ event => props.changed( event.target.value, props.inputId ) }
    />
  );
}

export default ScaleInput;
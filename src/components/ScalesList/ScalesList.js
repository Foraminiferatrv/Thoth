import React from 'react';


import classes from './ScalesList.module.css';

import { Input } from '../UI/Input/Input';

//TODO: create separate file for the .map funtion
//FIXME: two identical scales can't be chosen
function ScalesList( props ) {
  let selectOptions = [];

  if ( props.testScales !== undefined ) {
    selectOptions = Object.entries( props.testScales ).map( ( [scaleId, values] ) => (
      {
        optionName: values.scaleName,
        optionValue: scaleId
      }
    )
    )
  }

  return (
    <div className={ classes.ScalesList }>
      <Input
        inputtype='select'
        selectPlaceholder='Оберіть шкалу...'
        selectDefaultValue={ props.selectedScale }
        selectOptions={ selectOptions }
        onChange={ ( event ) => props.getInputValue( event.target.value ) }
      />
    </div>
  );
}

export default ScalesList;
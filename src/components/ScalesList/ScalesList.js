import React from 'react';


import classes from './ScalesList.module.css';

import { Input } from '../UI/Input/Input';


function ScalesList( props ) {
  let selectOptions = [];

  if ( props.testScales !== undefined ) {
    selectOptions = props.testScales.map( scaleObject => (
      {
        ...selectOptions,
        optionName: scaleObject.scaleName,
        optionValue: scaleObject.scaleId
      }
    )
    )
  }

  return (
    <div className={ classes.ScalesList }>
      <Input
        inputtype='select'
        selectPlaceholder='Оберіть шкалу...'
        selectOptions={ selectOptions }
      />
    </div>
  );
}

export default ScalesList;
import React from 'react';

import classes from './ScalesList.module.css';

import { Input } from '../UI/Input/Input';


function ScalesList( props ) {
  return (
    <div className={ classes.ScalesList }>
      <Input
        required
        noLabel
        inputtype='select'
        selectOptions={
          props.testScales.map( scaleObject => (
            {
              optionName: scaleObject.scaleName,
              optionValue: scaleObject.scaleId,
              defaultSelectValue:  props.selectedScale 
            }
          ) )
        }
      />
    </div>
  )
}

export default ScalesList;
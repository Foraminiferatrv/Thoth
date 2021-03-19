import React from 'react';


import classes from './ScalesList.module.scss';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
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
      {/* <Input
        inputtype='select'
        selectPlaceholder='Оберіть шкалу...'
        selectDefaultValue={ props.selectedScale }
        selectOptions={ selectOptions }
        onChange={ ( event ) => props.getInputValue( event.target.value ) }
      /> */}
      <FormControl variant="outlined" className={ classes.FormControl } >
        <Select
          value={ props.selectedScale }
          className={ classes.MatSelect }
          autoWidth
          displayEmpty
          onChange={ ( event ) => props.getInputValue( event.target.value ) }
        >
          <MenuItem value="" disabled>
            Оберіть шкалу...
          </MenuItem>
          { Object.entries( props.testScales ).map( ( [scaleId, values] ) => (
            <MenuItem key={ 'item' + scaleId } value={ scaleId } >
              { values.scaleName }
            </MenuItem>
          ) ) }
        </Select>
      </FormControl>
    </div>
  );
}

export default ScalesList;
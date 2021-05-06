import React from 'react';


import classes from './ScalesList.module.scss';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

//TODO: create separate file for the .map funtion
//FIXME: two identical scales can't be chosen
function ScalesList( { testScales, selectedScale, getInputValue } ) {

  return (
    <div className={ classes.ScalesList }>
      <FormControl variant="outlined" className={ classes.FormControl } >
        <Select
          value={ selectedScale }
          className={ classes.MatSelect }
          autoWidth
          displayEmpty
          onChange={ ( event ) => getInputValue( event.target.value ) }
        >
          <MenuItem value="" disabled>
            Оберіть шкалу...
          </MenuItem>
          { Object.entries( testScales ).map( ( [scaleId, values] ) => (
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
import React from 'react';

import classes from './Input.module.css';


function Input( { inputtype, noLabel, inputlabel, selectOptions, selectDefaultValue, selectPlaceholder, ...rest } ) {

  let inputElement = null;

  switch ( inputtype ) {
    case 'input':
      inputElement = <input
        className={ classes.InputElement }
        { ...rest } />
      break;

    case 'select':
      inputElement = <select
        className={ classes.SelectElement }
        defaultValue={ selectDefaultValue }
        { ...rest }
      >
        {/* Checking if placeholder is required and adding placeholder */ }
        { selectPlaceholder ? <option className={ classes.SelectPlaceholder } value="" hidden >{ selectPlaceholder }</option> : null }
        { selectOptions !== undefined ? selectOptions.map( ( optionObject, index ) =>
          <option
            key={ 'questionDropdownOption' + index }
            value={ optionObject.optionValue }>
            { optionObject.optionName }
          </option> )
          : null }
      </select>
      break;

    case 'textarea':
      inputElement = <textarea
        className={ classes.TextArea }
        { ...rest }
      ></textarea>
      break;


    default:
      inputElement = <input { ...rest } />
  }

  return (
    <div className={ classes.Input }>
      {!noLabel ? < label className={ classes.Label }>{ inputlabel }</label> : null }
      { inputElement }
    </div >
  );
};

export { Input };
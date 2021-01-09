import React from 'react';

import classes from './Input.module.css';


function Input( { inputtype, noLabel, inputlabel, ...rest } ) {

  let inputElement = null;

  switch ( inputtype ) {
    case 'input':
      inputElement = <input
        className={ classes.InputElement }
        { ...rest } />
      break;

    case 'select':
      inputElement = <select { ...rest } />
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
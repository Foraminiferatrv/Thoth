import React from 'react';

import classes from './Input.module.css';


function Input( props ) {

  let inputElement = null;

  switch ( props.inputtype ) {
    case 'input':
      inputElement = <input
        className={ classes.InputElement }
        { ...props } />
      break;

    case 'select':
      inputElement = <select { ...props } />
      break;

    default:
      inputElement = <input { ...props } />
  }

  return (
    <div className={ classes.Input }>
      {!props.noLabel ? < label className={ classes.Label }>{ props.inputlabel }</label> : null }
      { inputElement }
    </div >
  );
};

export { Input };
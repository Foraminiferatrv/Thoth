import React from 'react';

import classes from './MinusButton.module.scss';

const MinusButton = ( props ) => (

  <button type={ 'button' } className={ classes.MinusButton } onClick={ props.clicked }>
    -
  </button>

);

export { MinusButton };
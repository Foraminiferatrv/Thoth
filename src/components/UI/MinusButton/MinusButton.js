import React from 'react';

import classes from './MinusButton.module.css';

const MinusButton = ( props ) => (

    <button type={'button'} className={ classes.MinusButton } onClick={ props.clicked }>
      -
    </button>

);

export { MinusButton };
import React from 'react';

import classes from './PlusButton.module.css';

const PlusButton = ( props ) => (

    <button type={'button'} className={ classes.PlusButton } onClick={ props.clicked }>
      +
    </button>

);

export { PlusButton };
import React from 'react';

import classes from './PlusButton.module.scss';

const PlusButton = ( props ) => (

    <button type={'button'} className={ classes.PlusButton } onClick={ props.clicked }>
      +
    </button>

);

export { PlusButton };
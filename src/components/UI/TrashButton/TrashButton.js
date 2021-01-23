import React from 'react';

import classes from './TrashButton.module.css';

function TrashButton( props ) {
  return (
    <div className={ classes.TrashButton } onClick={ props.clicked } />
  );
}

export default TrashButton;
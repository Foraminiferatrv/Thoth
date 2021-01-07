import React from 'react';

import classes from './CheckButton.module.css';

function CheckButton( props ) {
  return (
    <div className={ classes.CheckButton } onClick={ props.clicked }> </div>
  );
}

export default CheckButton;
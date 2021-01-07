import React from 'react';

import classes from './XButton.module.css';

function XButton( props ) {
  return (
    <div className={ classes.XButton } onClick={ props.clicked }>
      <div className={ classes.FirstAxis }></div>
      <div className={ classes.SecondAxis }></div>
    </div>
  );
}

export default XButton;
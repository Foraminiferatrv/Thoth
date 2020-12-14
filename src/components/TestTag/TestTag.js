import React from 'react';

import classes from './TestTag.module.css';

function TestTag( props ) {
  return (
    <div className={ classes.TestTag }>
      <span>{ props.testName }</span>
    </div>
  );
}

export { TestTag };
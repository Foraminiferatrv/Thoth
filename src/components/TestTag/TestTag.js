import React from 'react';

import classes from './TestTag.module.css';

import { Link } from 'react-router-dom';

function TestTag( props ) {
  return (
    <Link
    to="/"
    className={ classes.TestTag } 
    >
      { props.testName }
    </Link>
  );
}

export { TestTag };
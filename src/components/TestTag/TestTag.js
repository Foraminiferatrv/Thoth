import React from 'react';

import classes from './TestTag.module.css';

import { Link } from 'react-router-dom';

function TestTag( { testName, testAdress } ) {
  return (
    <Link
      to={ '/test/' + testAdress }
      className={ classes.TestTag }
    >
      { testName }
    </Link>
  );
}

export { TestTag };
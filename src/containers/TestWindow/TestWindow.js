import React from 'react';

import classes from './TestWindow.module.css';

import { withRouter } from 'react-router-dom';


function TestWindow( { testsData, match } ) {
  return (
    <div className={ classes.TestWindow }>
      {testsData[match.params.testId].testName }
    </div>
  );
}

export default withRouter( TestWindow );
import React, { useState } from 'react';

import classes from './TestWindow.module.css';

import { withRouter } from 'react-router-dom';

import QuestionPage from '../../components/QuestionPage/QuestionPage';
import { FormControl } from '@material-ui/core';


function TestWindow( { testsData, match } ) {
  const [testResults, setTestResults] = useState( {} );

  function setResult( questionId, answerId ) {
    setTestResults( {
      ...testResults,
      [questionId]: answerId
    } );
    console.log( testResults );
  }

  return (
    <div className={ classes.TestWindow }>
      <FormControl>
        { testsData[match.params.testId].testName }

        { Object.entries( testsData[match.params.testId].testQuestions ).map( ( [questionId, questionData] ) => <QuestionPage
          key={ questionId }
          questionData={ questionData }
          questionId={ questionId }
          setResult={ setResult }
        /> ) }
      </FormControl>
    </div>
  );
}

export default withRouter( TestWindow );
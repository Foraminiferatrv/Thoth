import React, { useState } from 'react';

import classes from './TestWindow.module.css';

import { withRouter } from 'react-router-dom';

import QuestionPage from '../../components/QuestionPage/QuestionPage';
import { FormControl } from '@material-ui/core';
import AddItemButton from '../../components/UI/AddItemButton/AddItemButton';

import interpretator from './interpretator';


function TestWindow( { testsData, match } ) {
  const [testResults, setTestResults] = useState( {} );

  function setResult( questionId, answerId ) {
    setTestResults( {
      ...testResults,
      [questionId]: answerId
    } );
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
          interpret={ () => console.log( interpretator( testResults, testsData[match.params.testId].testQuestions, testsData[match.params.testId].testScales, testsData[match.params.testId].testInterpretations ) ) }
        /> ) }
      </FormControl>
      <AddItemButton
        buttonText={ 'interpretate!' }
        clicked={ () => console.log( interpretator( testResults, testsData[match.params.testId].testQuestions, testsData[match.params.testId].testScales, testsData[match.params.testId].testInterpretations ) ) }
      />
    </div>
  );
}

export default withRouter( TestWindow );
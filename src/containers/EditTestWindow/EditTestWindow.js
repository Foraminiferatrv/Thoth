import React, { useState } from 'react';

import classes from './EditTestWindow.module.css';

import { v1 as uuidv1 } from 'uuid';

import { connect } from 'react-redux';
import {
  addTestName,
  sendTestData
} from '../../store/actions/index';

import { withRouter } from 'react-router';

import { Input } from '../../components/UI/Input/Input';
import InterpretsContainer from '../InterpretsContainer/InterpretsContainer';
import ScalesEditContainer from '../ScalesEditContainer/ScalesEditContainer';
import QuestionsEditContainer from '../QuestionsEditContainer/QuestionsEditContainer';


//FIXME:input allways updates element - needs fixing
//FIXME: component rerenders on every keystroke
//TODO: create individual component for each test area
//TODO: destructure all props
function EditTestWindow( props ) {
  const [testId] = useState( props.match.params.editTestId === undefined || props.match.params.editTestId === null ? uuidv1() : props.match.params.editTestId );

  return (
    <form className={ classes.EditTestWindow }>
      <Input
        placeholder='Назва методики...'
        inputtype={ 'input' }
        type={ 'text' }
        inputlabel={ "Назва методики" }
        onChange={ ( event ) => props.onAddTestName( event.target.value ) }
        value={ props.testEditorState.testName }
      />
      <ScalesEditContainer
        testScales={ props.testEditorState.testScales }
      />
      <QuestionsEditContainer
        testQuestions={ props.testEditorState.testQuestions }
        testScales={ props.testEditorState.testScales }
      />
      <InterpretsContainer
        interprets={ props.testEditorState.testInterpretations }
        testScales={ props.testEditorState.testScales }
      />
      {/* TODO: Replace the submit button */ }
      <button onClick={ () => props.onSendTestData( props.testEditorState, testId ) } type="button">temp submit'</button>
    </form>
  );
}

function mapStateToProps( state ) {
  return {
    testEditorState: state.testEditorState
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onAddTestName: ( testNameValue ) => dispatch( addTestName( testNameValue ) ),
    onSendTestData: ( testData, testId ) => dispatch( sendTestData( testData, testId ) )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( withRouter( EditTestWindow ) );
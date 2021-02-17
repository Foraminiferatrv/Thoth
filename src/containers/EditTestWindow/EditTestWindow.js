import React, { useState } from 'react';

import classes from './EditTestWindow.module.css';

import { v1 as uuidv1 } from 'uuid';

import { connect } from 'react-redux';

import { withRouter } from 'react-router';

import {
  addTestName,
  changeScaleName,
  createNewScale,
  deleteScale,
  createNewQuestion,
  changeQuestionText,
  deleteQestion,
  addNewRadioAnswer,
  changeRadioAnswerText,
  deleteRadioAnswer,
  addDependency,
  changeAnswerValue,
  changeScaleDependency,
  deleteDependency,
  addInterpret,
  deleteInterpret,
  changeInterpretText,
  changeInterpretValueLimits,
  changeInterpretRequiredScale,
  sendTestData
} from '../../store/actions/index';

import { Input } from '../../components/UI/Input/Input';
import EditableInput from '../../components/UI/EditableInput/EditableInput';
import { NewQuestion } from '../../components/NewQuestion/NewQuestion';
import AddItemButton from '../../components/UI/AddItemButton/AddItemButton';
import InterpretsContainer from '../InterpretsContainer/InterpretsContainer';


//FIXME:input allways updates element - needs fixing
//FIXME: component rerenders on every keystroke
//TODO: create individual component for each test area
//TODO: destructure all props
function EditTestWindow( props ) {
  const [testId] = useState( props.match.params.editTestId === undefined || props.match.params.editTestId === null ? uuidv1() : props.match.params.editTestId );

  function scaleCreator( testScalesArray ) {
    if ( testScalesArray !== undefined ) {
      return Object.entries( testScalesArray ).map( ( [scaleId, values], index ) => (
        <div
          key={ scaleId }
          className={ classes.ScaleField }
        >
          <EditableInput
            inputId={ scaleId }
            inputValue={ values.scaleName }
            changed={ ( event ) => props.onChangeScaleName( event.target.value, scaleId ) }
            deleted={ () => props.onDeleteScale( scaleId ) }
            inputIndex={ index }
          />
        </div >
      )
      );
    }
    return null;
  }

  function qeustionCreator( testQuestionArray ) {
    if ( testQuestionArray !== undefined ) {
      return Object.entries( testQuestionArray ).map( ( [questionId, values], index ) => (
        <NewQuestion
          changeQuestionText={ props.onChangeQuestionText }
          questionText={ values.questionText }
          key={ questionId }
          questionId={ questionId }
          questionIndex={ index }
          deleteQuestion={ props.onDeleteQestion }
          radioAnswers={ values.questionRadioAnswers }
          newRadioAnswer={ props.onAddNewRadioAnswer }
          changeRadioAnswerText={ props.onChangeRadioAnswerText }
          deleteRadioAnswer={ props.onDeleteRadioAnswer }
          testScales={ props.testEditorState.testScales }
          addDependency={ props.onAddDependency }
          changeAnswerValue={ props.onChangeAnswerValue }
          changeScaleDependency={ props.onChangeScaleDependency }
          deleteDependency={ props.onDeleteDependency }
        />
      ) )
    }
    return null;
  }



  return (
    <form className={ classes.CreateTestWindow }>
      <Input
        placeholder='Назва методики...'
        inputtype={ 'input' }
        type={ 'text' }
        inputlabel={ "Назва методики" }
        onChange={ ( event ) => props.onAddTestName( event.target.value ) }
        value={ props.testEditorState.testName }
      />
      <div className={ classes.ScalesBox }>
        { scaleCreator( props.testEditorState.testScales ) }
        <AddItemButton
          buttonText="Додати шкалу"
          clicked={ props.onCreateScale }
        />
      </div>
      <div className={ classes.QuestionsBox }>
        { qeustionCreator( props.testEditorState.testQuestions ) }
        <AddItemButton
          buttonText="Додати запитання"
          clicked={ props.onCreateNewQuestion }
        />
      </div>
      <InterpretsContainer
        interprets={ props.testEditorState.testInterpretations }
        testScales={ props.testEditorState.testScales }
        addInterpret={ props.onAddInterpret }
        deleteInterpret={ props.onDeleteInterpret }
        changeInterpretText={ props.onChangeInterpretText }
        changeInterpretValueLimits={ props.onChangeInterpretValueLimits }
        changeInterpretRequiredScale={ props.onChangeInterpretRequiredScale }
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
    onCreateScale: () => dispatch( createNewScale() ),
    onChangeScaleName: ( scaleNameValue, scaleId ) => dispatch( changeScaleName( scaleNameValue, scaleId ) ),
    onDeleteScale: ( scaleId ) => dispatch( deleteScale( scaleId ) ),
    onCreateNewQuestion: () => dispatch( createNewQuestion() ),
    onChangeQuestionText: ( newQuestionText, targetQuestionId ) => dispatch( changeQuestionText( newQuestionText, targetQuestionId ) ),
    onDeleteQestion: ( targetQuestionId ) => dispatch( deleteQestion( targetQuestionId ) ),
    onAddNewRadioAnswer: ( targetQuestionId ) => dispatch( addNewRadioAnswer( targetQuestionId ) ),
    onChangeRadioAnswerText: ( newAnswerText, targetQuestionId, answerId ) => dispatch( changeRadioAnswerText( newAnswerText, targetQuestionId, answerId ) ),
    onDeleteRadioAnswer: ( targetQuestionId, answerId ) => dispatch( deleteRadioAnswer( targetQuestionId, answerId ) ),
    onAddDependency: ( targetQuestionId, answerId ) => dispatch( addDependency( targetQuestionId, answerId ) ),
    onChangeAnswerValue: ( targetQuestionId, answerId, depIndex, newValue ) => dispatch( changeAnswerValue( targetQuestionId, answerId, depIndex, newValue ) ),
    onChangeScaleDependency: ( ( targetQuestionId, answerId, depIndex, operationType, newValue ) => dispatch( changeScaleDependency( targetQuestionId, answerId, depIndex, operationType, newValue ) ) ),
    onDeleteDependency: ( targetQuestionId, answerId, depIndex ) => dispatch( deleteDependency( targetQuestionId, answerId, depIndex ) ),
    onAddInterpret: () => dispatch( addInterpret() ),
    onDeleteInterpret: ( targetInterpretId ) => dispatch( deleteInterpret( targetInterpretId ) ),
    onChangeInterpretText: ( targetInterpretId, newIntepretText ) => dispatch( changeInterpretText( targetInterpretId, newIntepretText ) ),
    onChangeInterpretValueLimits: ( targetInterpretId, scaleIndex, fromLimit, toLimit ) => dispatch( changeInterpretValueLimits( targetInterpretId, scaleIndex, fromLimit, toLimit ) ),
    onChangeInterpretRequiredScale: ( targetInterpretId, scaleIndex, newScaleId ) => dispatch( changeInterpretRequiredScale( targetInterpretId, scaleIndex, newScaleId ) ),
    onSendTestData: ( testData, testId ) => dispatch( sendTestData( testData, testId ) )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( withRouter( EditTestWindow ) );
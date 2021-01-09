import React from 'react';

import classes from './CreateTestWindow.module.css';

import { connect } from 'react-redux';

import {
  addTestName,
  changeScaleName,
  createNewScale,
  deleteScale,
  createNewQuestion,
  changeQuestionText,
  deleteQestion
} from '../../store/actions/index';

import { Input } from '../../components/UI/Input/Input';
import EditableInput from '../../components/UI/EditableInput/EditableInput';
import { NewQuestion } from '../../components/NewQuestion/NewQuestion';
import AddIttemButton from '../../components/UI/AddIttemButton/AddIttemButton';
// import {NewRadioAnswer} from '../../components/NewRadioAnswer/NewRadioAnswer';


function CreateTestWindow( props ) {

  function scaleCreator( testScalesArray ) {
    if ( testScalesArray !== undefined ) {
      return testScalesArray.map( ( scaleDataObject, index ) => (
        <EditableInput
          inputId={ scaleDataObject.scaleId }
          inputValue={ scaleDataObject.scaleName }
          key={ scaleDataObject.scaleId }
          changed={ props.onChangeScaleName }
          deleted={ props.onDeleteScale }
          inputIndex={ index }
        />
      )
      );
    }
    return null;
  }

  function qeustionCreator( testQuestionArray ) {
    if ( testQuestionArray !== undefined ) {
      return testQuestionArray.map( ( questionObject, index ) => (
        <NewQuestion
          questionText={ questionObject.questionText }
          key={ questionObject.questionId }
          questionId={ questionObject.questionId }
          changed={ props.onChangeQuestionText }
          questionIndex={ index }
          deleted={props.onDeleteQestion}
        />
      ) )
    }
    return null;
  }


  // FIXME:input allways updates element - needs fixing
  return (
    <form className={ classes.CreateTestWindow }>
      <Input
        inputtype={ 'input' }
        type={ 'text' }
        inputlabel={ "Назва тесту" }
        onChange={ ( event ) => props.onAddTestName( event.target.value ) }
      />
      <div className={ classes.ScalesField }>
        <AddIttemButton
          buttonText="Додати шкалу"
          clicked={ props.onCreateScale }
        />
        { scaleCreator( props.newTestData.testScales ) }
      </div>
      <div className={ classes.QuestionsField }>
        <AddIttemButton
          buttonText="Додати запитання"
          clicked={ props.onCreateNewQuestion }
        />
        { qeustionCreator( props.newTestData.testQuestions ) }
        {/* const question = <NewQuestion questionText={ "Запитання?" } />; */ }
      </div>
    </form>
  );
}

function mapStateToProps( state ) {
  return {
    newTestData: state.newTestData
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
    onDeleteQestion: ( targetQuestionId ) => dispatch( deleteQestion(targetQuestionId) )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CreateTestWindow );
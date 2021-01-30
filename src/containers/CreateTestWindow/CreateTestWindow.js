
import classes from './CreateTestWindow.module.css';

import { connect } from 'react-redux';

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


//TODO: destructure all props
function CreateTestWindow( props ) {

  function scaleCreator( testScalesArray ) {
    if ( testScalesArray !== undefined ) {
      return testScalesArray.map( ( scaleDataObject, index ) => (
        <div
          key={ scaleDataObject.scaleId }
          className={ classes.ScaleField }
        >
          <EditableInput
            inputId={ scaleDataObject.scaleId }
            inputValue={ scaleDataObject.scaleName }
            changed={ props.onChangeScaleName }
            deleted={ props.onDeleteScale }
            inputIndex={ index }
          />
        </div>
      )
      );
    }
    return null;
  }

  function qeustionCreator( testQuestionArray ) {
    if ( testQuestionArray !== undefined ) {
      return testQuestionArray.map( ( questionObject, index ) => (
        <NewQuestion
          changed={ props.onChangeQuestionText }
          questionText={ questionObject.questionText }
          key={ questionObject.questionId }
          questionId={ questionObject.questionId }
          questionIndex={ index }
          deleted={ props.onDeleteQestion }
          radioAnswers={ questionObject.questionRadioAnswers }
          newRadioAnswer={ props.onAddNewRadioAnswer }
          changeRadioAnswerText={ props.onChangeRadioAnswerText }
          deleteRadioAnswer={ props.onDeleteRadioAnswer }
          testScales={ props.newTestData.testScales }
          addDependency={ props.onAddDependency }
          changeAnswerValue={ props.onChangeAnswerValue }
          changeScaleDependency={ props.onChangeScaleDependency }
          deleteDependency={ props.onDeleteDependency }
        />
      ) )
    }
    return null;
  }


  // FIXME:input allways updates element - needs fixing
  // TODO: create individual component for each test area
  return (
    <form className={ classes.CreateTestWindow }>
      <Input
        placeholder='Назва методики...'
        inputtype={ 'input' }
        type={ 'text' }
        inputlabel={ "Назва методики" }
        onChange={ ( event ) => props.onAddTestName( event.target.value ) }
      />
      <div className={ classes.ScalesBox }>
        <AddItemButton
          buttonText="Додати шкалу"
          clicked={ props.onCreateScale }
        />
        { scaleCreator( props.newTestData.testScales ) }
      </div>
      <div className={ classes.QuestionsBox }>
        <AddItemButton
          buttonText="Додати запитання"
          clicked={ props.onCreateNewQuestion }
        />
        { qeustionCreator( props.newTestData.testQuestions ) }
      </div>
      <InterpretsContainer
        interprets={ props.newTestData.testInterpretations }
        testScales={ props.newTestData.testScales }
        addInterpret={ props.onAddInterpret }
        deleteInterpret={ props.onDeleteInterpret }
        changeInterpretText={ props.onChangeInterpretText }
        changeInterpretValueLimits={ props.onChangeInterpretValueLimits }
        changeInterpretRequiredScale={ props.onChangeInterpretRequiredScale }
      />
      {/* TODO: Replace the submit button */ }
      <AddItemButton
        buttonText={ 'temp submit' }
        clicked={ () => props.onSendTestData( props.newTestData ) }
      />
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
    onDeleteQestion: ( targetQuestionId ) => dispatch( deleteQestion( targetQuestionId ) ),
    onAddNewRadioAnswer: ( targetQuestionIndex ) => dispatch( addNewRadioAnswer( targetQuestionIndex ) ),
    onChangeRadioAnswerText: ( newAnswerText, targetQuestionId, answerIndex ) => dispatch( changeRadioAnswerText( newAnswerText, targetQuestionId, answerIndex ) ),
    onDeleteRadioAnswer: ( targetQuestionId, answerIndex ) => dispatch( deleteRadioAnswer( targetQuestionId, answerIndex ) ),
    onAddDependency: ( targetQuestionId, answerIndex ) => dispatch( addDependency( targetQuestionId, answerIndex ) ),
    onChangeAnswerValue: ( targetQuestionId, answerIndex, depIndex, newValue ) => dispatch( changeAnswerValue( targetQuestionId, answerIndex, depIndex, newValue ) ),
    onChangeScaleDependency: ( ( targetQuestionId, answerIndex, depIndex, operationType, newValue ) => dispatch( changeScaleDependency( targetQuestionId, answerIndex, depIndex, operationType, newValue ) ) ),
    onDeleteDependency: ( targetQuestionId, answerIndex, depIndex ) => dispatch( deleteDependency( targetQuestionId, answerIndex, depIndex ) ),
    onAddInterpret: () => dispatch( addInterpret() ),
    onDeleteInterpret: ( targetInterpretId ) => dispatch( deleteInterpret( targetInterpretId ) ),
    onChangeInterpretText: ( targetInterpretId, newIntepretText ) => dispatch( changeInterpretText( targetInterpretId, newIntepretText ) ),
    onChangeInterpretValueLimits: ( targetInterpretId, scaleIndex, fromLimit, toLimit ) => dispatch( changeInterpretValueLimits( targetInterpretId, scaleIndex, fromLimit, toLimit ) ),
    onChangeInterpretRequiredScale: ( targetInterpretId, scaleIndex, newScaleId ) => dispatch( changeInterpretRequiredScale( targetInterpretId, scaleIndex, newScaleId ) ),
    onSendTestData: ( testData ) => dispatch( sendTestData( testData ) )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CreateTestWindow );
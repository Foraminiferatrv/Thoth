import React, { useEffect } from 'react';

import classes from './QuestionsEditContainer.module.scss';

import {
  createNewQuestion,
  changeQuestionText,
  changeQuestionNumber,
  deleteQestion,
  addNewRadioAnswer,
  changeRadioAnswerText,
  deleteRadioAnswer,
  addDependency,
  changeAnswerValue,
  changeScaleDependency,
  deleteDependency
} from '../../store/actions/index';

import { connect } from 'react-redux';

import AddItemButton from '../../components/UI/AddItemButton/AddItemButton';
import NewQuestion from '../../components/NewQuestion/NewQuestion';

import comparator from '../../utils/comparator';

import { usePositionReorder } from '../../hooks/usePositionReorder';


function QuestionsEditContainer( { testScales, testQuestions, onCreateNewQuestion, onChangeQuestionText, onDeleteQestion, onAddNewRadioAnswer, onChangeQuestionNumber, onChangeRadioAnswerText, onDeleteRadioAnswer, onAddDependency, onChangeAnswerValue, onChangeScaleDependency, onDeleteDependency } ) {
  const sortedQuestions = Object.entries( testQuestions ).sort( ( elementA, elementB ) => comparator( elementA[1].questionNumber, elementB[1].questionNumber ) );

  const [order, updatePosition, updateOrder, refreshOrder] = usePositionReorder( sortedQuestions, onChangeQuestionNumber );

  useEffect( () => ( refreshOrder( sortedQuestions ) ), [testQuestions] );

  function qeustionCreator( testQuestionsArray ) {
    if ( testQuestionsArray !== undefined ) {
      return testQuestionsArray.map( ( [questionId, values], index ) => (
        <NewQuestion
          updateOrder={ updateOrder }
          updatePosition={ updatePosition }
          changeQuestionText={ onChangeQuestionText }
          questionText={ values.questionText }
          key={ questionId }
          questionId={ questionId }
          questionIndex={ index }
          deleteQuestion={ onDeleteQestion }
          radioAnswers={ values.questionRadioAnswers }
          newRadioAnswer={ onAddNewRadioAnswer }
          changeRadioAnswerText={ onChangeRadioAnswerText }
          deleteRadioAnswer={ onDeleteRadioAnswer }
          testScales={ testScales }
          addDependency={ onAddDependency }
          changeAnswerValue={ onChangeAnswerValue }
          changeScaleDependency={ onChangeScaleDependency }
          deleteDependency={ onDeleteDependency }
        />
      ) )
    }
    return null;
  }

  
  return (
    <div className={ classes.QuestionsEditContainer }>
      <div className={ classes.ContainerHeader }>
        <span>Запитання</span>
      </div>
      <div className={ classes.ContainerBody }>
        { qeustionCreator( order ) }
        <AddItemButton
          externalClasses={ classes.AddButton }
          buttonText="Додати запитання"
          clicked={ onCreateNewQuestion }
        />
      </div>
    </div>
  );
}

function mapStateToProps( state ) {
  return {
    testQuestions: state.testEditorState.testQuestions,
    testScales: state.testEditorState.testScales
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    onCreateNewQuestion: () => dispatch( createNewQuestion() ),
    onChangeQuestionText: ( newQuestionText, targetQuestionId ) => dispatch( changeQuestionText( newQuestionText, targetQuestionId ) ),
    onChangeQuestionNumber: () => dispatch( ( newQuestionsArray ) => changeQuestionNumber( newQuestionsArray ) ),
    onDeleteQestion: ( targetQuestionId ) => dispatch( deleteQestion( targetQuestionId ) ),
    onAddNewRadioAnswer: ( targetQuestionId ) => dispatch( addNewRadioAnswer( targetQuestionId ) ),
    onChangeRadioAnswerText: ( newAnswerText, targetQuestionId, answerId ) => dispatch( changeRadioAnswerText( newAnswerText, targetQuestionId, answerId ) ),
    onDeleteRadioAnswer: ( targetQuestionId, answerId ) => dispatch( deleteRadioAnswer( targetQuestionId, answerId ) ),
    onAddDependency: ( targetQuestionId, answerId ) => dispatch( addDependency( targetQuestionId, answerId ) ),
    onChangeAnswerValue: ( targetQuestionId, answerId, depIndex, newValue ) => dispatch( changeAnswerValue( targetQuestionId, answerId, depIndex, newValue ) ),
    onChangeScaleDependency: ( ( targetQuestionId, answerId, depIndex, operationType, newValue ) => dispatch( changeScaleDependency( targetQuestionId, answerId, depIndex, operationType, newValue ) ) ),
    onDeleteDependency: ( targetQuestionId, answerId, depIndex ) => dispatch( deleteDependency( targetQuestionId, answerId, depIndex ) ),
  };
}

export default connect( mapStateToProps, mapDispatchToProps )( QuestionsEditContainer );
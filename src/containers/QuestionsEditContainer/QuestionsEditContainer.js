import React from 'react';

import classes from './QuestionsEditContainer.module.scss';

import {
  createNewQuestion,
  changeQuestionText,
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
import { NewQuestion } from '../../components/NewQuestion/NewQuestion';


function QuestionsEditContainer( { testScales, testQuestions, onCreateNewQuestion, onChangeQuestionText, onDeleteQestion, onAddNewRadioAnswer, onChangeRadioAnswerText, onDeleteRadioAnswer, onAddDependency, onChangeAnswerValue, onChangeScaleDependency, onDeleteDependency } ) {
  function qeustionCreator( testQuestionsObject ) {
    if ( testQuestionsObject !== undefined ) {
      return Object.entries( testQuestionsObject ).map( ( [questionId, values], index ) => (
        <NewQuestion
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
        { qeustionCreator( testQuestions ) }
        <AddItemButton
          externalClasses={ classes.AddButton }
          buttonText="Додати запитання"
          clicked={ onCreateNewQuestion }
        />
      </div>
    </div>
  );
}



function mapDispatchToProps( dispatch ) {
  return {
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
  };
}

export default connect( null, mapDispatchToProps )( QuestionsEditContainer );
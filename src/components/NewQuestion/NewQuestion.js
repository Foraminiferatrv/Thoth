import React from 'react';

import classes from './NewQuestion.module.css';

import EditableInput from '../UI/EditableInput/EditableInput';
import { NewRadioAnswer } from '../NewRadioAnswer/NewRadioAnswer';
import AddItemButton from '../UI/AddItemButton/AddItemButton';


function NewQuestion( props ) {
  let radioAnswersContent = null;

  if ( props.radioAnswers !== undefined ) {
    radioAnswersContent = Object.entries( props.radioAnswers ).map( ( [answerId, answerValues], index ) => (
      <NewRadioAnswer
        key={ props.questionId.concat( index ) }
        questionId={ props.questionId }
        answerIndex={ index }
        answerId={ answerId }
        answerText={ answerValues.answerText }
        changeRadioAnswerText={ props.changeRadioAnswerText }
        changeAnswerValue={ props.changeAnswerValue }
        deleteRadioAnswer={ props.deleteRadioAnswer }
        scaleDependencies={ answerValues.scaleDependencies }
        testScales={ props.testScales }
        addDependency={ props.addDependency }
        changeScaleDependency={ props.changeScaleDependency }
        deleteDependency={ props.deleteDependency }
      />
    ) );
  }

  return (
    <div className={ classes.NewQuestion }>
      <div className={ classes.QuestionBlock }>
        <EditableInput
          inputValue={ props.questionText }
          inputId={ props.questionId }
          inputIndex={ props.questionIndex }
          changed={ event => props.changeQuestionText( event.target.value, props.questionId ) }
          deleted={ () => props.deleteQuestion( props.questionId ) }
        />
      </div>

      <div className={ classes.AnswerBlock }>
        <AddItemButton
          clicked={ () => props.newRadioAnswer( props.questionId ) }
          buttonText="Додати відповідь"
        />
        { radioAnswersContent }
      </div>
    </div>
  );
}

export { NewQuestion };
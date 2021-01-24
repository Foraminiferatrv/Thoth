import React from 'react';

import classes from './NewQuestion.module.css';

import EditableInput from '../UI/EditableInput/EditableInput';
import { NewRadioAnswer } from '../NewRadioAnswer/NewRadioAnswer';
import AddItemButton from '../UI/AddItemButton/AddItemButton';


function NewQuestion( props ) {
  let radioAnswersContent = null;

  if ( props.radioAnswers !== undefined ) {
    radioAnswersContent = props.radioAnswers.map( ( radioAnswerObject, answerIndex ) => (
      <NewRadioAnswer
        key={ props.questionId.concat( answerIndex ) }
        questionId={ props.questionId }
        changeRadioAnswerText={ props.changeRadioAnswerText }
        answerIndex={ answerIndex }
        answerText={ radioAnswerObject.answerText }
        deleteRadioAnswer={ props.deleteRadioAnswer }
        changeAnswerValue={ props.changeAnswerValue }
        scaleDependencies={ radioAnswerObject.scaleDependencies }
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
          changed={ props.changed }
          deleted={ props.deleted }
        />
      </div>

      <div className={ classes.AnswerBlock }>
        <AddItemButton
          clicked={ () => props.newRadioAnswer( props.questionIndex ) }
          buttonText="Додати відповідь"
        />
        { radioAnswersContent }
      </div>
    </div>
  );
}

export { NewQuestion };
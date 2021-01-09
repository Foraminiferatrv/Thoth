import React from 'react';

import classes from './NewQuestion.module.css';

import EditableInput from '../UI/EditableInput/EditableInput';
import { NewRadioAnswer } from '../NewRadioAnswer/NewRadioAnswer';

function NewQuestion( props ) {
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
        <NewRadioAnswer answerText="How can octopus be so bald? " />
      </div>
    </div>
  );
}

export { NewQuestion };
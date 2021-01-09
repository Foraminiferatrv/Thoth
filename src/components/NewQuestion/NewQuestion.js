import React from 'react';

import classes from './NewQuestion.module.css';

import { NewRadioAnswer } from '../NewRadioAnswer/NewRadioAnswer';

function NewQuestion( props ) {
  return (
    <div className={ classes.NewQuestion }>
      <div className={ classes.QuestionBlock }>
        <span className={ classes.QuestionText } >
          { props.questionText }
        </span>
        <input
          type="text"
          className={ classes.QuestionField }
          onChange={event=>props.changed(event.target.value, props.questionId)}
        />
      </div>

      <div className={ classes.AnswerBlock }>
        <NewRadioAnswer answerText="How can octopus be so bald? " />
      </div>
    </div>
  );
}

export { NewQuestion };
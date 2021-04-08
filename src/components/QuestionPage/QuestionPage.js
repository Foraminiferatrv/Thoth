import React from 'react';

import classes from './QuestionPage.module.css';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function QuestionPage( { questionData, questionId, setResult } ) {
  return (
    <div className={ classes.QuestionPage }>
      <div className={ classes.QuestionText }>
        { questionData.questionText }
      </div>
      <RadioGroup>
        { Object.entries( questionData.questionRadioAnswers ).map( ( [answerId, answerData] ) =>
          <FormControlLabel
            key={ answerId }
            label={ answerData.answerText }
            value={ answerId }
            control={ <Radio /> }
            onChange={ ( event ) => setResult( questionId, event.target.value ) }
          />
        ) }
      </RadioGroup>
    </div>
  );
}

export default React.memo( QuestionPage );
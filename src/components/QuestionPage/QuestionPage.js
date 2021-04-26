import React from 'react';

import classes from './QuestionPage.module.scss';



import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function QuestionPage( { questionData, questionId, setResult, interpret } ) {
  function changed( event ) {
    setResult( questionId, event.target.value );
    interpret();
  }

  return (
    <div className={ classes.QuestionPage }>
      <div className={ classes.QuestionText }>
        { questionData.questionText }
      </div>
      <RadioGroup >
        { Object.entries( questionData.questionRadioAnswers ).map( ( [answerId, answerData] ) =>
          <FormControlLabel
            classes={ { label: classes.RadioAnswer } }
            key={ answerId }
            label={ answerData.answerText }
            value={ answerId }
            control={ <Radio /> }
            onChange={ ( event ) => changed( event ) }
          />
        ) }
      </RadioGroup>
    </div>
  );
}

export default React.memo( QuestionPage );
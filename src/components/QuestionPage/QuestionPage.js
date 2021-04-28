import React from 'react';

import classes from './QuestionPage.module.scss';

import CustomRadio from '../UI/CustomRadio/CustomRadio';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function QuestionPage( { questionData, questionId, setResult, interpret } ) {

  function changed( event ) {
    setResult( questionId, event.target.value );
    interpret();
  }

  return (
    <div className={ classes.QuestionPage }>
      <span className={ classes.QuestionText }>
        { questionData.questionText }
      </span>
      <RadioGroup classes={ { root: classes.AnswersBlock } } onChange={ ( event ) => changed( event ) }>
        { Object.entries( questionData.questionRadioAnswers ).map( ( [answerId, answerData] ) =>
          <FormControlLabel
            classes={ { label: classes.RadioAnswer } }
            key={ answerId }
            label={ answerData.answerText }
            value={ answerId }
            control={ <CustomRadio /> }
          />
        ) }
      </RadioGroup>
    </div>
  );
}


export default React.memo( QuestionPage );
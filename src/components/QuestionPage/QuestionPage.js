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

  let radioAnswers;
  if ( questionData.questionRadioAnswers !== undefined ) {
    radioAnswers = Object.entries( questionData.questionRadioAnswers ).map( ( [answerId, answerData] ) =>
      <FormControlLabel
        classes={ { label: classes.RadioAnswer } }
        key={ answerId }
        label={ answerData.answerText }
        value={ answerId }
        control={ <CustomRadio /> }
      />
    );
  }


  return (
    <div className={ classes.QuestionPage }>
      <div className={ classes.TextContainer }>
        <span className={ classes.QuestionText }>
          { questionData.questionText }
        </span>
      </div>
      <RadioGroup classes={ { root: classes.AnswersBlock } } onChange={ ( event ) => changed( event ) }>

        { radioAnswers }

      </RadioGroup>
    </div>
  );
}


export default React.memo( QuestionPage );
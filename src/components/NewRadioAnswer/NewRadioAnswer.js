import React, { useState } from 'react';

import classes from './NewRadioAnswer.module.css';

import AddItemButton from '../UI/AddItemButton/AddItemButton';
import EditableInput from '../UI/EditableInput/EditableInput';
import ScalesList from '../../components/ScalesList/ScalesList';
import XButton from '../UI/XButton/XButton';
import NumInput from '../NumInput/NumInput';


function NewRadioAnswer( props ) {

  let scaleDependenciesContent = null;

  if ( props.scaleDependencies !== undefined ) {
    scaleDependenciesContent = props.scaleDependencies.map( ( scaleData, index ) =>
      <div
        key={ 'scaleDependencies' + index }
        className={ classes.AnswerValue }
      >
        <ScalesList
          testScales={ props.testScales }
          selectedScale={ scaleData.scaleId }
        />
        <div className={ classes.AnswerValueBlock }>
          <NumInput
            questionId={ props.questionId }
            answerIndex={ props.answerIndex }
            depIndex={ index }
            answerValue={ scaleData.answerValue }
            changeAnswerValue={ props.changeAnswerValue }
          />
        </div>
        <XButton
          clicked={ () => props.deleteDependency( props.questionId, props.answerIndex, index ) }
        />
      </div>
    )
  };

  return (
    <div className={ classes.NewRadioAnswer }>
      <div className={ classes.InputField }>
        <EditableInput
          letterIndex
          changed={ props.changeRadioAnswerText }
          inputId={ props.questionId }
          inputIndex={ props.answerIndex }
          answerIndex={ props.answerIndex }
          inputValue={ props.answerText }
          deleted={ props.deleteRadioAnswer }
        />
      </div>
      <div className={ classes.AnswerValuesBlock }>
        { scaleDependenciesContent }
        <div className={ classes.AddScaleButton }>
          <AddItemButton
            clicked={ () => props.addDependency( props.questionId, props.answerIndex ) }
            buttonText="Додати залежну  шкалу"
          />
        </div>
      </div>
    </div>
  );
}

export { NewRadioAnswer };


import React, { useState } from 'react';

import classes from './NewRadioAnswer.module.css';

import AddItemButton from '../UI/AddItemButton/AddItemButton';
import EditableInput from '../UI/EditableInput/EditableInput';
import ScalesList from '../../components/ScalesList/ScalesList';
import TrashButton from '../UI/TrashButton/TrashButton';
import NumInput from '../NumInput/NumInput';


//TODO: Create individual component for scaleDependencies
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
          getInputValue={ ( value ) => props.changeScaleDependency( props.questionId, props.answerIndex, index, value ) }
          inputIndex={ index }
        />
        <div className={ classes.AnswerValueBlock }>
          <NumInput
            questionId={ props.questionId }
            inputIndex={ index }
            numInputValue={ scaleData.answerValue }
            getInputValue={ ( value ) => props.changeAnswerValue( props.questionId, props.answerIndex, index, value ) }
          />
        </div>
        <TrashButton
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


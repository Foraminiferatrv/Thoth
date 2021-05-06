import React from 'react';

import classes from './NewRadioAnswer.module.scss';

import AddItemButton from '../UI/AddItemButton/AddItemButton';
import EditableInput from '../UI/EditableInput/EditableInput';
import ScalesList from '../../components/ScalesList/ScalesList';
import NumInput from '../NumInput/NumInput';
import DeleteSideButton from '../UI/DeleteSideButton/DeleteSidebutton';



function NewRadioAnswer( props ) {
  let scaleDependenciesContent = null;

  if ( props.scaleDependencies !== undefined ) {
    scaleDependenciesContent = props.scaleDependencies.map( ( scaleData, index ) =>
      <div
        key={ 'scaleDeps' + index }
        className={ classes.AnswerValue }
      >
        <div className={ classes.AnswerValueLeftSide }>
          <ScalesList
            testScales={ props.testScales }
            selectedScale={ scaleData.scaleId }
            getInputValue={ ( value ) => props.changeScaleDependency( props.questionId, props.answerId, index, value ) }
            inputIndex={ index }
          />
          <div className={ classes.AnswerValueBlock }>
            <NumInput
              questionId={ props.questionId }
              inputIndex={ index }
              numInputValue={ scaleData.answerValue }
              getInputValue={ ( value ) => props.changeAnswerValue( props.questionId, props.answerId, index, value ) }
            />
          </div>
        </div>
        <DeleteSideButton
          clicked={ () => props.deleteDependency( props.questionId, props.answerId, index ) }
        />
      </div>
    )
  };

  return (
    <div className={ classes.NewRadioAnswer }>
      <div className={ classes.AnswerLeftSide }>
        <div className={ classes.InputField }>
          <EditableInput
            letterIndex
            changed={ ( event ) => props.changeRadioAnswerText( event.target.value, props.questionId, props.answerId ) }
            inputId={ props.questionId }
            inputIndex={ props.answerIndex }
            answerIndex={ props.answerIndex }
            inputValue={ props.answerText }
          />
        </div>
        <div className={ classes.AnswerValuesBlock }>
          { scaleDependenciesContent }
          <AddItemButton
            externalClasses={ classes.AddButton }
            clicked={ () => props.addDependency( props.questionId, props.answerId ) }
            buttonText="Додати залежну  шкалу"
          />
        </div>
      </div>
      <DeleteSideButton
        clicked={ () => props.deleteRadioAnswer( props.questionId, props.answerId ) }


      />
    </div>
  );
}

export default React.memo( NewRadioAnswer );


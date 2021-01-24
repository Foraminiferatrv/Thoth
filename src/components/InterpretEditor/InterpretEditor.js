import React from 'react';

import classes from './InterpretEditor.module.css';

import { Input } from '../UI/Input/Input';
import NumRange from '../UI/NumRange/NumRange';
import ScalesList from '../ScalesList/ScalesList';
import XButton from '../UI/XButton/XButton';


function InterpretEditor( props ) {
  let scalesContent;

  scalesContent = props.requiredScales.map( ( scale, index ) => (
    <div
      key={ 'reqScale' + index }
      className={ classes.ScalesBlock }
    >
      <ScalesList
        testScales={ props.testScales }
        inputtype='select'
        inputIndex={ index }
        selectPlaceholder={ "Оберіть шкалу..." }
        selectedScale={ scale.requiredScaleId }
        getInputValue={ props.changeInterpretRequiredScale }
      />
      <NumRange
        valueLimits={ scale.requiredValueLimits }
        changeInterpretValueLimits={ props.changeInterpretValueLimits }
        interpretId={ props.interpretId }
        scaleIndex={ index }
      />
    </div> )
  );

  return (
    <div className={ classes.InterpretEditor }>
      {scalesContent }
      <div className={ classes.InterpretText }>
        <Input
          inputtype='textarea'
          placeholder="Введіть текст інтерпретації..."
          defaultValue={ props.interpretText }
          onBlur={ ( event ) => props.changeInterpretText( props.interpretId, event.target.value ) }
        />
        <XButton
          clicked={ () => props.deleteInterpret( props.interpretId ) }
        />
      </div>
    </div>
  );
}

export default InterpretEditor;
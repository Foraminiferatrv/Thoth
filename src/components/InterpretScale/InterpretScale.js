import React from 'react';

import classes from './InterpretScale.module.scss';

import ScalesList from "../ScalesList/ScalesList";
import NumRange from "../UI/NumRange/NumRange";
import DeleteSideButton from "../UI/DeleteSideButton/DeleteSidebutton";


function InterpretScale( { testScales, interpretId, scaleIndex, requiredScaleId, requiredValueLimits, changeInterpretValueLimits, changeInterpretRequiredScale, deleteInterpretRequiredScale } ) {
  return (
    <div className={ classes.InterpretScale }>
      <div className={ classes.LeftSide }>
        <ScalesList
          testScales={ testScales }
          inputtype='select'
          inputIndex={ scaleIndex }
          selectPlaceholder={ "Оберіть шкалу..." }
          selectedScale={ requiredScaleId }
          getInputValue={ scaleId => changeInterpretRequiredScale( interpretId, scaleIndex, scaleId ) }
        />
        <NumRange
          valueLimits={ requiredValueLimits }
          changeInterpretValueLimits={ changeInterpretValueLimits }
          interpretId={ interpretId }
          scaleIndex={ scaleIndex }
        />
      </div>

      <DeleteSideButton
        clicked={ () => deleteInterpretRequiredScale( interpretId, scaleIndex ) }
      />
    </div>
  );
}

export default InterpretScale;
import React from 'react';

import classes from './NumRange.module.css';
import NumInput from '../../NumInput/NumInput';


function NumRange( props ) {
  return (
    <div className={ classes.NumRange }>
      <div className={ classes.NumBlock }>
        <span>Від:</span>
        <NumInput
          getInputValue={ value => props.changeInterpretValueLimits( props.interpretId, props.scaleIndex, value, props.valueLimits.to ) }
          numInputValue={ props.valueLimits.from }
        />
      </div>
      <div className={ classes.NumBlock }>
        <span>До:</span>
        <NumInput
          getInputValue={ value => props.changeInterpretValueLimits( props.interpretId, props.scaleIndex, props.valueLimits.from, value ) }
          numInputValue={ props.valueLimits.to }
        />
      </div>
    </div>
  );
}

export default NumRange;
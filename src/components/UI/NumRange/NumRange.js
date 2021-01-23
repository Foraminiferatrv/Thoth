import React from 'react';

import classes from './NumRange.module.css';
import NumInput from '../../NumInput/NumInput';


function NumRange( props ) {
  return (
    <div className={ classes.NumRange }>
      <div className={ classes.NumBlock }>
        <span>Від:</span>
        <NumInput />
      </div>
      <div className={ classes.NumBlock }>
        <span>До:</span>
        <NumInput />
      </div>
    </div>
  );
}

export default NumRange;
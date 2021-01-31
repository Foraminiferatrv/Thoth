import React from 'react';

import classes from './InterpretsContainer.module.css';

import AddItemButton from '../../components/UI/AddItemButton/AddItemButton';
import InterpretEditor from '../../components/InterpretEditor/InterpretEditor';


function InterpretsContainer( props ) {

  let interpretContent;

  if ( props.interprets !== undefined ) {
    interpretContent = Object.entries( props.interprets ).map(
      ( [interpretId, interpretValues] ) => (
        <InterpretEditor
          key={ interpretId }
          testScales={ props.testScales }
          requiredScales={ interpretValues.requiredScales }
          interpretId={ interpretId }
          interpretText={ interpretValues.interpretText }
          changeInterpretText={ props.changeInterpretText }
          deleteInterpret={ props.deleteInterpret }
          valueLimits={ interpretValues.requiredScales.requiredValueLimits }
          changeInterpretValueLimits={ props.changeInterpretValueLimits }
          changeInterpretRequiredScale={ props.changeInterpretRequiredScale }
        />
      )
    );
  }

  return (
    <div className={ classes.InterpretsContainer }>
      <AddItemButton
        buttonText="Додати інтерпретацію"
        clicked={ props.addInterpret }
      />
      {interpretContent }
    </div>
  );
}


export default InterpretsContainer;
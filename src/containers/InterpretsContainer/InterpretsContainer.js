import React from 'react';

import classes from './InterpretsContainer.module.css';

import AddItemButton from '../../components/UI/AddItemButton/AddItemButton';
import InterpretEditor from '../../components/InterpretEditor/InterpretEditor';


function InterpretsContainer( props ) {
  let interpretContent;

  if ( props.interprets !== undefined ) {
    interpretContent = props.interprets.map(
      ( interpret ) => (
        <InterpretEditor
          key={ interpret.interpretId }
          testScales={ props.testScales }
          requiredScales={ interpret.requiredScales }
          interpretId={ interpret.interpretId }
          interpretText={ interpret.interpretText }
          changeInterpretText={ props.changeInterpretText }
          deleteInterpret={ props.deleteInterpret }
          valueLimits={ interpret.requiredScales.requiredValueLimits }
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
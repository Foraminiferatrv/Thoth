import React from 'react';

import classes from './InterpretsContainer.module.scss';

import { connect } from 'react-redux';
import {
  addInterpret,
  deleteInterpret,
  changeInterpretText,
  changeInterpretValueLimits,
  changeInterpretRequiredScale,
  addInterpretRequiredScale,
  deleteInterpretRequiredScale
} from '../../store/actions/index';

import AddItemButton from '../../components/UI/AddItemButton/AddItemButton';
import InterpretEditor from '../../components/InterpretEditor/InterpretEditor';



function InterpretsContainer( { interprets, testScales, onAddInterpret, onDeleteInterpret, onChangeInterpretText, onChangeInterpretValueLimits, onChangeInterpretRequiredScale, onAddInterpretRequiredScale, onDeleteInterpretRequiredScale } ) {
  let interpretContent;

  if ( interprets !== undefined ) {
    interpretContent = Object.entries( interprets ).map(
      ( [interpretId, interpretValues] ) => (
        <InterpretEditor
          key={ interpretId }
          testScales={ testScales }
          requiredScales={ interpretValues.requiredScales }
          interpretId={ interpretId }
          interpretText={ interpretValues.interpretText }
          changeInterpretText={ onChangeInterpretText }
          deleteInterpret={ onDeleteInterpret }
          valueLimits={ interpretValues.requiredScales.requiredValueLimits }
          changeInterpretValueLimits={ onChangeInterpretValueLimits }
          changeInterpretRequiredScale={ onChangeInterpretRequiredScale }
          deleteInterpretRequiredScale={ onDeleteInterpretRequiredScale }
          addInterpretRequiredScale={ onAddInterpretRequiredScale }
        />
      )
    );
  }

  return (
    <div className={ classes.InterpretsContainer }>
      <div className={ classes.ContainerHeader }>
        <span>Інтерпретації</span>
      </div>
      <div className={ classes.ContainerBody }>
        { interpretContent }
        <AddItemButton
          externalClasses={ classes.AddButton }
          buttonText="Додати інтерпретацію"
          clicked={ onAddInterpret }
        />
      </div>
    </div>
  );
}

function mapDispatchToProps( dispatch ) {
  return {
    onAddInterpret: () => dispatch( addInterpret() ),
    onChangeInterpretText: ( targetInterpretId, newIntepretText ) => dispatch( changeInterpretText( targetInterpretId, newIntepretText ) ),
    onChangeInterpretValueLimits: ( targetInterpretId, scaleIndex, fromLimit, toLimit ) => dispatch( changeInterpretValueLimits( targetInterpretId, scaleIndex, fromLimit, toLimit ) ),
    onChangeInterpretRequiredScale: ( targetInterpretId, scaleIndex, newScaleId ) => dispatch( changeInterpretRequiredScale( targetInterpretId, scaleIndex, newScaleId ) ),
    onAddInterpretRequiredScale: ( targetInterpretId ) => dispatch( addInterpretRequiredScale( targetInterpretId ) ),
    onDeleteInterpretRequiredScale: ( targetInterpretId, scaleIndex ) => dispatch( deleteInterpretRequiredScale( targetInterpretId, scaleIndex ) ),
    onDeleteInterpret: ( targetInterpretId ) => dispatch( deleteInterpret( targetInterpretId ) )
  };
}

export default connect( null, mapDispatchToProps )( InterpretsContainer );
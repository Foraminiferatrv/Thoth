import React from 'react';

import classes from './ScalesEditContainer.module.css';

import {
  changeScaleName,
  createNewScale,
  deleteScale
} from '../../store/actions/index';

import { connect } from 'react-redux';

import EditableInput from '../../components/UI/EditableInput/EditableInput';
import AddItemButton from '../../components/UI/AddItemButton/AddItemButton';

function ScalesEditContainer( { testScales, onCreateScale, onChangeScaleName, onDeleteScale } ) {
  function scaleCreator( testScalesArray ) {
    if ( testScalesArray !== undefined ) {
      return Object.entries( testScalesArray ).map( ( [scaleId, values], index ) => (
        <div
          key={ scaleId }
          className={ classes.ScaleField }
        >
          <EditableInput
            inputId={ scaleId }
            inputValue={ values.scaleName }
            changed={ ( event ) => onChangeScaleName( event.target.value, scaleId ) }
            deleted={ () => onDeleteScale( scaleId ) }
            inputIndex={ index }
          />
        </div >
      )
      );
    }
    return null;
  }

  return (
    <div className={ classes.ScalesEditContainer }>
      <div className={ classes.ContainerHeader }>
        <span>Шкали</span>
      </div>
      <div className={ classes.ContainerBody }>
        { scaleCreator( testScales ) }
        <AddItemButton
          externalClasses={ classes.AddButton }
          buttonText="Додати шкалу"
          clicked={ onCreateScale }
        />
      </div>
    </div>
  );
}


function mapDispatchToProps( dispatch ) {
  return {
    onCreateScale: () => dispatch( createNewScale() ),
    onChangeScaleName: ( scaleNameValue, scaleId ) => dispatch( changeScaleName( scaleNameValue, scaleId ) ),
    onDeleteScale: ( scaleId ) => dispatch( deleteScale( scaleId ) )
  };
}

export default connect( null, mapDispatchToProps )( ScalesEditContainer );
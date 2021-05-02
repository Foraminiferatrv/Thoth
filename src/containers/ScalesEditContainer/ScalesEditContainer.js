import React, { useState, useRef } from 'react';

import classes from './ScalesEditContainer.module.scss';

import {
  changeScaleName,
  createNewScale,
  changeScaleNumber,
  deleteScale
} from '../../store/actions/index';

import { connect } from 'react-redux';

import AddItemButton from '../../components/UI/AddItemButton/AddItemButton';
import ScaleEditor from '../../components/ScaleEditor/ScaleEditor';

import comparator from '../../utils/comparator';
import findIndex from '../../utils/findIndex';

import { PlusButton } from '../../components/UI/PlusButton/PlusButton';
import { MinusButton } from '../../components/UI/MinusButton/MinusButton';


function ScalesEditContainer( { testScales, onCreateScale, onChangeScaleNumber, onChangeScaleName, onDeleteScale } ) {

  const positions = useRef( [] ).current;

  const setPositions = ( index, offset ) => {
    positions[index] = offset;

  }

  const moveScale = ( scaleId, index, dragOffset ) => {
    const targetIndex = findIndex( index, dragOffset, positions );
    if ( targetIndex !== index ) onChangeScaleNumber( scaleId, targetIndex );
  }

  function scaleCreator( scalesObject ) {
    if ( scalesObject !== undefined ) {
      return Object.entries( scalesObject ).sort( ( elementA, elementB ) => comparator( elementA[1].scaleNumber, elementB[1].scaleNumber ) ).map( ( [scaleId, values], index ) => (
        <ScaleEditor
          setPositions={ setPositions }
          moveScale={ moveScale }
          index={ index }
          key={ scaleId }
          scaleNumber={ values.scaleNumber }
          scaleName={ values.scaleName }
          changeScaleName={ onChangeScaleName }
          scaleId={ scaleId }
          deleteScale={ onDeleteScale }
        />
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
      <PlusButton
        clicked={ () => onChangeScaleNumber( "d8fe9bc6-57d7-4b77-904a-157776cbd173" ) }
      />
      <MinusButton
        clicked={ () => onChangeScaleNumber( "d8fe9bc6-57d7-4b77-904a-157776cbd173" ) }
      />
    </div>
  );
}

function mapStateToProps( state ) {
  return {
    testScales: state.testEditorState.testScales
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    onCreateScale: () => dispatch( createNewScale() ),
    onChangeScaleName: ( scaleNameValue, scaleId ) => dispatch( changeScaleName( scaleNameValue, scaleId ) ),
    onChangeScaleNumber: ( targetScaleId, targetScaleNumber ) => dispatch( changeScaleNumber( targetScaleId, targetScaleNumber ) ),
    onDeleteScale: ( scaleId ) => dispatch( deleteScale( scaleId ) )
  };
}

export default connect( mapStateToProps, mapDispatchToProps )( ScalesEditContainer );
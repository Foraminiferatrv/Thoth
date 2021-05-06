import React, { useEffect } from 'react';

import classes from './ScalesEditContainer.module.scss';

import {
  changeScaleName,
  createNewScale,
  changeScaleNumber,
  deleteScale
} from '../../store/actions/index';

import { connect } from 'react-redux';

import { usePositionReorder } from '../../hooks/usePositionReorder';

import AddItemButton from '../../components/UI/AddItemButton/AddItemButton';
import ScaleEditor from '../../components/ScaleEditor/ScaleEditor';

import comparator from '../../utils/comparator';


function ScalesEditContainer( { testScales, onCreateScale, onChangeScaleNumber, onChangeScaleName, onDeleteScale } ) {
  const sortedScales = Object.entries( testScales ).sort( ( elementA, elementB ) => comparator( elementA[1].scaleNumber, elementB[1].scaleNumber ) );

  const [order, updatePosition, updateOrder, refreshOrder] = usePositionReorder( sortedScales, onChangeScaleNumber );

  useEffect( () => ( refreshOrder( sortedScales ) ), [testScales] );

  function scaleCreator( scalesArray ) {
    if ( scalesArray !== undefined ) {
      return order.map( ( [scaleId, values], index ) => (
        <ScaleEditor
          updateOrder={ updateOrder }
          updatePosition={ updatePosition }
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
        { scaleCreator( order ) }
        <AddItemButton
          externalClasses={ classes.AddButton }
          buttonText="Додати шкалу"
          clicked={ onCreateScale }
        />
      </div>
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
    onChangeScaleNumber: ( newScalesArray ) => dispatch( changeScaleNumber( newScalesArray ) ),
    onDeleteScale: ( scaleId ) => dispatch( deleteScale( scaleId ) )
  };
}

export default connect( mapStateToProps, mapDispatchToProps )( ScalesEditContainer );
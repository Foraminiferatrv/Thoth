import {
  updateObject
} from '../utility';

import * as actionTypes from '../actions/actionTypes';

import {
  v4 as uuidv4
} from 'uuid';

const initialState = {

};


function createNewTest( state ) {
  const newTestObject = {
    testName: " ",
    testId: uuidv4(),
    testScales: [],
    testQuestions: [ {
      questionNumber: null,
      questionText: "",
      scaleDependencies: [ {
        scaleId: "",
        questionValue: "-1"
      } ]
    } ]
  };

  return updateObject( state, newTestObject );
}

function addTestName( state, testName ) {
  return updateObject( state, {
    testName: testName
  } )
}

function createNewScale( state ) {
  const updatedScales = [ ...state.testScales ];
  updatedScales.push( {
    scaleId: uuidv4(),
    scaleName: "",
    scaleValue: 0
  } );

  return updateObject( state, {
    testScales: updatedScales
  } );
}

function changeScaleName( state, scaleName, targetScaleId ) {
  const targetScaleIndex = state.testScales.indexOf( state.testScales.filter( ( element ) => element.scaleId === targetScaleId )[ 0 ] );
  const newScalesData = [ ...state.testScales ];

  newScalesData[ targetScaleIndex ] = {
    ...newScalesData[ targetScaleIndex ],
    scaleName: scaleName
  }
  return ( updateObject( state, {
    testScales: newScalesData
  } ) )

}

function deleteScale( state, scaleId ) {
  const targetScaleIndex = state.testScales.indexOf( state.testScales.filter( ( element ) => element.scaleId === scaleId )[ 0 ] );
  const newScalesData = [ ...state.testScales ];
  newScalesData.splice( targetScaleIndex, 1 );

  return ( updateObject( state ), {
    testScales: newScalesData
  } );
}


function testCreator( state = initialState, action ) {
  switch ( action.type ) {
    case actionTypes.CREATE_NEW_TEST:
      return createNewTest( state );

    case actionTypes.ADD_TEST_NAME:
      return addTestName( state, action.testName );

    case actionTypes.CREATE_NEW_SCALE:
      return createNewScale( state );

    case actionTypes.CHANGE_SCALE_NAME:
      return changeScaleName( state, action.scaleName, action.targetScaleId );

    case actionTypes.DELETE_SCALE:
      return deleteScale( state, action.scaleId );

    default:
      return state;
  }
}

export {
  testCreator
};
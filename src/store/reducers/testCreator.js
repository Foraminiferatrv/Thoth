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
    testScales: [ {
        scaleId: uuidv4(),
        scaleName: "someScale",
        scaleValue: 0
      },
      {
        scaleId: uuidv4(),
        scaleName: "anotherScale",
        scaleValue: 0
      }
    ],
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

function changeScaleName( state, scaleName, targetScaleId ) {
  const targetScaleIndex = state.testScales.indexOf( state.testScales.filter( ( element ) => element.scaleId === targetScaleId )[ 0 ] );

  console.log( targetScaleIndex, targetScaleId );
  console.log( state );
  return updateObject( state, {
    testScales: [ ...state.testScales, state.testScales[ targetScaleIndex ] ]
  } )
  return ( state );
}


function testCreator( state = initialState, action ) {
  switch ( action.type ) {
    case actionTypes.CREATE_NEW_TEST:
      return createNewTest( state );

    case actionTypes.ADD_TEST_NAME:
      return addTestName( state, action.testName );

    case actionTypes.CHANGE_SCALE_NAME:
      return changeScaleName( state, action.scaleName, action.targetScaleId );

    default:
      return state;
  }
}

export {
  testCreator
};
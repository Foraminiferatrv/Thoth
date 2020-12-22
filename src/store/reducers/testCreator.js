import {
  updateObject
} from '../utility';

import * as actionTypes from '../actions/actionTypes';


const initialState = {
 
};


function createNewTest( state ) {
  const newTestObject = {
    testName: " ",
    testId: "",
    testScales: {
      "scaleId": {
        scaleName: "",
        scaleValue: 0
      }
    },
    testQuestions: [ {
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


function testCreator( state = initialState, action ) {
  switch ( action.type ) {
    case actionTypes.CREATE_NEW_TEST:
      return createNewTest( state );

    case actionTypes.ADD_TEST_NAME:
      return addTestName( state, action.testName );


    default:
      return state;
  }
}

export {
  testCreator
};
import * as actionTypes from '../actions/actionTypes';

import {
  updateObject
} from '../utility';


const initialState = {
  testsData: {}
};


function setTestsData( state, testsData ) {
  let testsDataCopy = state.testData;
  testsDataCopy = testsData;
  return updateObject( state, {
    testsData: testsDataCopy
  } );
}


function app( state = initialState, action ) {
  switch ( action.type ) {
    case actionTypes.SET_TESTS_DATA:
      return setTestsData( state, action.testsData );


    default:
      return state;
  }
}

export {
  app
}
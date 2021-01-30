import * as actionTypes from '../actions/actionTypes';

import {
  updateObject
} from '../utility';


const initialState = {
  testsData: []
};


function setTestsData( state, testsData ) {
  const testsDataCopy = state.testData;

  testsData.map( data => testsDataCopy.push( data ) );

  return updateObject( state, {
    testsData: testsDataCopy
  } );
}


function app( state = initialState, action ) {
  switch ( action.type ) {
    case actionTypes.SET_TESTS_DATA:
      setTestsData( state, action.testsData );
      break;


    default:
      return state;
  }
}

export {
  app
}
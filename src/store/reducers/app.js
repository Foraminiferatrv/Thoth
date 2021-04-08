import * as actionTypes from '../actions/actionTypes';

const initialState = {
  testsData: {}
};


function setTestsData( state, testsData ) {
  return ( {
    ...state,
    testsData: testsData
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
import ActionTypes from '../actions/actionTypes';
import { AppEditorTypes } from '../actions/AllActionTypes';



const initialState = {
  testsData: {}
};


function setTestsData(state: {}, testsData: {}) {
  return ({
    ...state,
    testsData: testsData
  });
}


function app(state = initialState, action: AppEditorTypes) {
  switch (action.type) {
    case ActionTypes.SET_TESTS_DATA:
      return setTestsData(state, action.testsData);


    default:
      return state;
  }
}

export {
  app
}

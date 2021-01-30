import * as actionTypes from './actionTypes';

import axiosInstance from '../../axios';

export const setTestsData = ( testsData ) => {
  return {
    type: actionTypes.SET_TESTS_DATA,
    testsData
  }
}

export const initTests = () => {
  return dispatch => {
    axiosInstance.get( '/testsData.json' )
      .then( response => dispatch( setTestsData( response.data ) ) )
      .catch( error => console.log( error ) )
  }
}
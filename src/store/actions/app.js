import * as actionTypes from './actionTypes';

import axiosInstance from '../../axios';

export const setTestsData = ( testsData ) => {
  return {
    type: actionTypes.SET_TESTS_DATA,
    testsData
  }
}

export const initTests = () => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  return dispatch => {
    axiosInstance.get( '/testsData' )
      .then( response => dispatch( setTestsData( response.data ) ) )
      .catch( error => console.log( 'SERVER ERROR ' + error ) )
  }
}
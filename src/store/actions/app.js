import * as actionTypes from './actionTypes';

import axiosInstance from '../../axios';
import firebase from '../../firebase/firebase';


export const setTestsData = ( testsData ) => {
  return {
    type: actionTypes.SET_TESTS_DATA,
    testsData
  }
}

export const initTests = () => {
  return ( dispatch, getState, getFirebase ) => {
    firebase.database()
      .ref( 'testsData/' )
      .on( 'value', snapshot => dispatch( setTestsData( snapshot.val() ) ) );

    // axiosInstance.get( '/testsData.json' )
    //   .then( response => dispatch( setTestsData( response.data ) ) )
    //   .catch( error => console.log( error ) )
  }
}
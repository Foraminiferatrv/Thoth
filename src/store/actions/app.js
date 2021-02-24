import * as actionTypes from './actionTypes';

import firebase from '../../firebase/firebase';


export const setTestsData = ( testsData ) => {
  return {
    type: actionTypes.SET_TESTS_DATA,
    testsData
  }
}

export const initTests = () => {
  return ( dispatch ) => {
    firebase.database()
      .ref( 'testsData' )
      .on( 'value', snapshot => dispatch( setTestsData( snapshot.val() ) ) );
  }
}
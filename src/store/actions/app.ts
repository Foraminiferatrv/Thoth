import ActionTypes from './actionTypes';
import * as AllActionTypes from './AllActionTypes'

import firebase from '../../firebase/firebase';
import { AnyAction, Dispatch } from 'redux';


export const setTestsData = (testsData: {}): AllActionTypes.SetTestsData => {
  return {
    type: ActionTypes.SET_TESTS_DATA,
    testsData
  }
}

export const initTests = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    firebase.database()
      .ref('testsData')
      .on('value', snapshot => dispatch(setTestsData(snapshot.val())));
  }
}
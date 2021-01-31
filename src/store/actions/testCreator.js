import * as actionTypes from './actionTypes';

import axios from '../../axios';

export const createNewTest = () => {
  return {
    type: actionTypes.CREATE_NEW_TEST
  }
}

export const addTestName = ( testName ) => {
  return {
    type: actionTypes.ADD_TEST_NAME,
    testName: testName
  }
}

export const createNewScale = () => {
  return {
    type: actionTypes.CREATE_NEW_SCALE
  }
}

export const changeScaleName = ( scaleName, targetScaleId ) => {
  return {
    type: actionTypes.CHANGE_SCALE_NAME,
    scaleName: scaleName,
    targetScaleId: targetScaleId
  }
}

export const deleteScale = ( scaleId ) => {
  return {
    type: actionTypes.DELETE_SCALE,
    scaleId: scaleId
  }
}

export const createNewQuestion = () => {
  return {
    type: actionTypes.CREATE_NEW_QUESTION
  }
}

export const changeQuestionText = ( newQuestionText, targetQuestionId ) => {
  return {
    type: actionTypes.CHANGE_QUESTION_TEXT,
    newQuestionText: newQuestionText,
    targetQuestionId: targetQuestionId
  }
}

export const deleteQestion = ( targetQuestionId ) => {
  return {
    type: actionTypes.DELETE_QUESTION,
    targetQuestionId: targetQuestionId
  }
}

export const addNewRadioAnswer = ( targetQuestionId ) => {
  return {
    type: actionTypes.CREATE_NEW_RADIO_ANSWER,
    targetQuestionId
  }
}

export const changeRadioAnswerText = ( newAnswerText, targetQuestionId, answerId ) => {
  return {
    type: actionTypes.CHANGE_RADIO_ANSWER_TEXT,
    newAnswerText: newAnswerText,
    targetQuestionId: targetQuestionId,
    answerId
  }
}

export const deleteRadioAnswer = ( targetQuestionId, answerId ) => {
  return {
    type: actionTypes.DELETE_RADIO_ANSWER,
    targetQuestionId: targetQuestionId,
    answerId
  }
}

export const addDependency = ( targetQuestionId, answerId ) => {
  return {
    type: actionTypes.ADD_DEPENDENCY,
    targetQuestionId: targetQuestionId,
    answerId
  }
}

export const changeScaleDependency = ( targetQuestionId, answerId, depIndex, newValue ) => {
  return {
    type: actionTypes.CHANGE_SCALE_DEPENDENCY,
    targetQuestionId: targetQuestionId,
    answerId,
    depIndex,
    newValue
  }
}

export const deleteDependency = ( targetQuestionId, answerId, depIndex ) => {
  return {
    type: actionTypes.DELETE_DEPENDENCY,
    targetQuestionId: targetQuestionId,
    answerId,
    depIndex: depIndex
  }
}

export const changeAnswerValue = ( targetQuestionId, answerId, depIndex, newValue ) => {
  return {
    type: actionTypes.CHANGE_ANSWER_VALUE,
    targetQuestionId: targetQuestionId,
    answerId,
    depIndex: depIndex,
    newValue: newValue
  }
}

export const addInterpret = () => {
  return {
    type: actionTypes.ADD_INTERPRET
  }
}

export const deleteInterpret = ( targetInterpretId ) => {
  return {
    type: actionTypes.DELETE_INTERPRET,
    targetInterpretId: targetInterpretId
  }
}

export const changeInterpretText = ( targetInterpretId, newInterpretText ) => {
  return {
    type: actionTypes.CHANGE_INTERPRET_TEXT,
    targetInterpretId: targetInterpretId,
    newInterpretText: newInterpretText
  }
}

export const changeInterpretValueLimits = ( targetInterpretId, scaleIndex, fromLimit, toLimit ) => {
  return {
    type: actionTypes.CHANGE_INTERPRET_VALUE_LIMITS,
    targetInterpretId,
    scaleIndex,
    fromLimit,
    toLimit
  }
}

export const changeInterpretRequiredScale = ( targetInterpretId, scaleIndex, newScaleId ) => {
  return {
    type: actionTypes.CHANGE_INTERPRET_REQUIRED_SCALE,
    targetInterpretId,
    scaleIndex,
    newScaleId
  }
}
//TODO: create separate file for async actions


export const sendTestData = ( testData ) => {
  return dispatch => {
    axios.post( `/testsData.json`, testData )
      .then( response => console.log( response.data ) )
      .catch( error => console.log( 'SERVER ERROR ' + error ) );
  }
}
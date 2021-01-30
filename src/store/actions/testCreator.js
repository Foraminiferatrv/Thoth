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

export const addNewRadioAnswer = ( targetQuestionIndex ) => {
  return {
    type: actionTypes.CREATE_NEW_RADIO_ANSWER,
    targetQuestionIndex: targetQuestionIndex
  }
}

export const changeRadioAnswerText = ( newAnswerText, targetQuestionId, answerIndex ) => {
  return {
    type: actionTypes.CHANGE_RADIO_ANSWER_TEXT,
    newAnswerText: newAnswerText,
    targetQuestionId: targetQuestionId,
    answerIndex: answerIndex
  }
}

export const deleteRadioAnswer = ( targetQuestionId, answerIndex ) => {
  return {
    type: actionTypes.DELETE_RADIO_ANSWER,
    targetQuestionId: targetQuestionId,
    answerIndex: answerIndex
  }
}

export const addDependency = ( targetQuestionId, answerIndex ) => {
  return {
    type: actionTypes.ADD_DEPENDENCY,
    targetQuestionId: targetQuestionId,
    answerIndex: answerIndex
  }
}

export const changeAnswerValue = ( targetQuestionId, answerIndex, depIndex, newValue ) => {
  return {
    type: actionTypes.CHANGE_ANSWER_VALUE,
    targetQuestionId: targetQuestionId,
    answerIndex: answerIndex,
    depIndex: depIndex,
    newValue: newValue
  }
}

export const changeScaleDependency = ( targetQuestionId, answerIndex, depIndex, newValue ) => {
  return {
    type: actionTypes.CHANGE_SCALE_DEPENDENCY,
    targetQuestionId: targetQuestionId,
    answerIndex: answerIndex,
    depIndex: depIndex,
    newValue: newValue
  }
}

export const deleteDependency = ( targetQuestionId, answerIndex, depIndex ) => {
  return {
    type: actionTypes.DELETE_DEPENDENCY,
    targetQuestionId: targetQuestionId,
    answerIndex: answerIndex,
    depIndex: depIndex
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
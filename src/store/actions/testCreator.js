import * as actionTypes from './actionTypes';

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
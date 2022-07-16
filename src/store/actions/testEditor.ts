import * as testEditorTypes from './AllActionTypes'

import ActionTypes from './actionTypes';

import firebase from '../../firebase/firebase';

import { Question } from '../../types/types'


export const createNewTest = () => {
  return {
    type: ActionTypes.CREATE_NEW_TEST
  }
}

export const setTestEditorData = (
  testData: {}
): testEditorTypes.SetTestEditorData => {
  return {
    type: ActionTypes.SET_TEST_EDITOR_DATA,
    testData
  }
};

export const addTestName = (
  testName: string | number
): testEditorTypes.AddTestName => {
  return {
    type: ActionTypes.ADD_TEST_NAME,
    testName: testName
  }
}

export const createNewScale = (): testEditorTypes.CreateNewScale => {
  return {
    type: ActionTypes.CREATE_NEW_SCALE
  }
}

export const changeScaleName = (
  scaleName: string | number,
  targetScaleId: string | number
): testEditorTypes.ChangeScaleName => {
  return {
    type: ActionTypes.CHANGE_SCALE_NAME,
    scaleName: scaleName,
    targetScaleId: targetScaleId
  }
}

export const changeScaleNumber = (
  newScalesArray: { scaleNumber: number }[][]
): testEditorTypes.ChangeScaleNumber => {
  return {
    type: ActionTypes.CHANGE_SCALE_NUMBER,
    newScalesArray
  }
}

export const deleteScale = (
  scaleId: string | number
): testEditorTypes.DeleteScale => {
  return {
    type: ActionTypes.DELETE_SCALE,
    scaleId: scaleId
  }
}

//question actions
export const createNewQuestion = (): testEditorTypes.CreateNewQuestion => {
  return {
    type: ActionTypes.CREATE_NEW_QUESTION
  }
}

export const changeQuestionNumber = (
  newQuestionsArray: { [questionId: string]: Question }[]
): testEditorTypes.ChangeQuestionNumber => {
  return {
    type: ActionTypes.CHANGE_QUESTION_NUMBER,
    newQuestionsArray
  }
}

export const changeQuestionText = (
  newQuestionText: string | number,
  targetQuestionId: string | number
): testEditorTypes.ChangeQuestionText => {
  return {
    type: ActionTypes.CHANGE_QUESTION_TEXT,
    newQuestionText: newQuestionText,
    targetQuestionId: targetQuestionId
  }
}

export const deleteQestion = (
  targetQuestionId: string | number
): testEditorTypes.DeleteQestion => {
  return {
    type: ActionTypes.DELETE_QUESTION,
    targetQuestionId: targetQuestionId
  }
}

export const addNewRadioAnswer = (
  targetQuestionId: string | number
): testEditorTypes.AddNewRadioAnswer => {
  return {
    type: ActionTypes.CREATE_NEW_RADIO_ANSWER,
    targetQuestionId
  }
}

export const changeRadioAnswerText = (
  newAnswerText: string | number,
  targetQuestionId: string | number,
  answerId: string | number
): testEditorTypes.ChangeRadioAnswerText => {
  return {
    type: ActionTypes.CHANGE_RADIO_ANSWER_TEXT,
    newAnswerText: newAnswerText,
    targetQuestionId: targetQuestionId,
    answerId
  }
}

export const deleteRadioAnswer = (
  targetQuestionId: string | number,
  answerId: string | number
): testEditorTypes.DeleteRadioAnswer => {
  return {
    type: ActionTypes.DELETE_RADIO_ANSWER,
    targetQuestionId: targetQuestionId,
    answerId
  }
}

export const addDependency = (
  targetQuestionId: string | number,
  answerId: string | number
): testEditorTypes.AddDependency => {
  return {
    type: ActionTypes.ADD_DEPENDENCY,
    targetQuestionId: targetQuestionId,
    answerId
  }
}

export const changeScaleDependency = (
  targetQuestionId: string | number,
  answerId: string | number,
  newValue: string | number,
  depIndex: number,
): testEditorTypes.ChangeScaleDependency => {
  return {
    type: ActionTypes.CHANGE_SCALE_DEPENDENCY,
    targetQuestionId: targetQuestionId,
    answerId,
    depIndex,
    newValue
  }
}

export const deleteDependency = (
  targetQuestionId: string | number,
  answerId: string | number,
  depIndex: number
): testEditorTypes.DeleteDependency => {
  return {
    type: ActionTypes.DELETE_DEPENDENCY,
    targetQuestionId: targetQuestionId,
    answerId,
    depIndex: depIndex
  }
}

export const changeAnswerValue = (
  targetQuestionId: string | number,
  answerId: string | number,
  newValue: number,
  depIndex: number,
): testEditorTypes.ChangeAnswerValue => {
  return {
    type: ActionTypes.CHANGE_ANSWER_VALUE,
    targetQuestionId: targetQuestionId,
    answerId,
    depIndex: depIndex,
    newValue: newValue
  }
}

export const addInterpret = (): testEditorTypes.AddInterpret => {
  return {
    type: ActionTypes.ADD_INTERPRET
  }
}


export const changeInterpretText = (
  targetInterpretId: string | number,
  newInterpretText: string | number,
): testEditorTypes.ChangeInterpretText => {
  return {
    type: ActionTypes.CHANGE_INTERPRET_TEXT,
    targetInterpretId: targetInterpretId,
    newInterpretText: newInterpretText
  }
}

export const changeInterpretValueLimits = (
  targetInterpretId: string | number,
  scaleIndex: number,
  fromLimit: number,
  toLimit: number,
): testEditorTypes.ChangeInterpretValueLimits => {
  return {
    type: ActionTypes.CHANGE_INTERPRET_VALUE_LIMITS,
    targetInterpretId,
    scaleIndex,
    fromLimit,
    toLimit
  }
}

export const changeInterpretRequiredScale = (
  targetInterpretId: string | number,
  newScaleId: string | number,
  scaleIndex: number,
): testEditorTypes.ChangeInterpretRequiredScale => {
  return {
    type: ActionTypes.CHANGE_INTERPRET_REQUIRED_SCALE,
    targetInterpretId,
    scaleIndex,
    newScaleId
  }
}

export const addInterpretRequiredScale = (
  targetInterpretId: string | number
): testEditorTypes.AddInterpretRequiredScale => {
  return {
    type: ActionTypes.ADD_INTERPRET_REQUIRED_SCALE,
    targetInterpretId
  }
}

export const deleteInterpretRequiredScale = (
  targetInterpretId: string | number,
  scaleIndex: number
): testEditorTypes.DeleteInterpretRequiredScale => {
  return {
    type: ActionTypes.DELETE_INTERPRET_REQUIRED_SCALE,
    targetInterpretId,
    scaleIndex
  }
}

export const deleteInterpret = (
  targetInterpretId: string | number
): testEditorTypes.DeleteInterpret => {
  return {
    type: ActionTypes.DELETE_INTERPRET,
    targetInterpretId
  }
}


//TODO: create separate file for async actions
export const sendTestData = (testData: {}, testId: string | number) => {
  return (_: never) => {
    firebase.database()
      .ref(`testsData/${testId}`).set(testData)
      .catch(error => console.log('SERVER ERROR ' + error));
  }
}
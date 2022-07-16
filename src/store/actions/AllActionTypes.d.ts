import ActionTypes from './actionTypes'
import { Question } from '../../types/types'

// TEST EDITOR ACTIONS
export interface CreateNewTest {
  type: ActionTypes.CREATE_NEW_TEST
}

export interface SetTestEditorData {
  type: ActionTypes.SET_TEST_EDITOR_DATA,
  testData
}

export interface AddTestName {
  type: ActionTypes.ADD_TEST_NAME,
  testName: string | number
}

export interface CreateNewScale {
  type: ActionTypes.CREATE_NEW_SCALE
}

export interface ChangeScaleNumber {
  type: ActionTypes.CHANGE_SCALE_NUMBER,
  newScalesArray: { scaleNumber: number }[][]
}

export interface ChangeScaleName {
  type: ActionTypes.CHANGE_SCALE_NAME,
  scaleName: string | number,
  targetScaleId: string | number
}

export interface DeleteScale {
  type: ActionTypes.DELETE_SCALE,
  scaleId: string | number
}

//question actions
export interface CreateNewQuestion {
  type: ActionTypes.CREATE_NEW_QUESTION
}

export interface ChangeQuestionNumber {
  type: ActionTypes.CHANGE_QUESTION_NUMBER,
  newQuestionsArray: { [questionId: string]: Question }[]
}

export interface ChangeQuestionText {
  type: ActionTypes.CHANGE_QUESTION_TEXT,
  newQuestionText: string | number,
  targetQuestionId: string | number
}

export interface DeleteQestion {
  type: ActionTypes.DELETE_QUESTION,
  targetQuestionId: string | number
}

export interface AddNewRadioAnswer {
  type: ActionTypes.CREATE_NEW_RADIO_ANSWER,
  targetQuestionId: string | number
}

export interface ChangeRadioAnswerText {
  type: ActionTypes.CHANGE_RADIO_ANSWER_TEXT,
  newAnswerText: string | number,
  targetQuestionId: string | number,
  answerId: string | number,
}

export interface DeleteRadioAnswer {
  type: ActionTypes.DELETE_RADIO_ANSWER,
  targetQuestionId: string | number,
  answerId: string | number,
}

export interface AddDependency {
  type: ActionTypes.ADD_DEPENDENCY,
  targetQuestionId: string | number,
  answerId: string | number,
}

export interface ChangeScaleDependency {
  type: ActionTypes.CHANGE_SCALE_DEPENDENCY,
  targetQuestionId: string | number,
  answerId: string | number,
  newValue: string | number,
  depIndex: number,
}

export interface DeleteDependency {
  type: ActionTypes.DELETE_DEPENDENCY,
  targetQuestionId: string | number,
  answerId: string | number,
  depIndex: number
}

export interface ChangeAnswerValue {
  type: ActionTypes.CHANGE_ANSWER_VALUE,
  targetQuestionId: string | number,
  answerId: string | number,
  newValue: number,
  depIndex: number,
}

export interface AddInterpret {
  type: ActionTypes.ADD_INTERPRET
}


export interface ChangeInterpretText {
  type: ActionTypes.CHANGE_INTERPRET_TEXT,
  targetInterpretId: string | number,
  newInterpretText: string | number,
}

export interface ChangeInterpretValueLimits {
  type: ActionTypes.CHANGE_INTERPRET_VALUE_LIMITS,
  targetInterpretId: string | number,
  scaleIndex: number,
  fromLimit: number,
  toLimit: number,
}

export interface ChangeInterpretRequiredScale {
  type: ActionTypes.CHANGE_INTERPRET_REQUIRED_SCALE,
  targetInterpretId: string | number,
  newScaleId: string | number,
  scaleIndex: number,
}

export interface AddInterpretRequiredScale {
  type: ActionTypes.ADD_INTERPRET_REQUIRED_SCALE,
  targetInterpretId: string | number
}

export interface DeleteInterpretRequiredScale {
  type: ActionTypes.DELETE_INTERPRET_REQUIRED_SCALE,
  targetInterpretId: string | number,
  scaleIndex: number
}

export interface DeleteInterpret {
  type: ActionTypes.DELETE_INTERPRET,
  targetInterpretId: string | number
}


export type TestEditorTypes =
  | CreateNewTest
  | SetTestEditorData
  | AddTestName
  | CreateNewScale
  | ChangeScaleNumber
  | ChangeScaleName
  | DeleteScale
  | CreateNewQuestion
  | ChangeQuestionNumber
  | ChangeQuestionText
  | DeleteQestion
  | AddNewRadioAnswer
  | ChangeRadioAnswerText
  | DeleteRadioAnswer
  | AddDependency
  | ChangeScaleDependency
  | DeleteDependency
  | ChangeAnswerValue
  | AddInterpret
  | ChangeInterpretText
  | ChangeInterpretValueLimits
  | ChangeInterpretRequiredScale
  | AddInterpretRequiredScale
  | DeleteInterpretRequiredScale
  | DeleteInterpret

// APP ACTIONS
export interface SetTestsData {
  type: ActionTypes.SET_TESTS_DATA,
  testsData: {}
}


export type AppEditorTypes =
  |SetTestsData
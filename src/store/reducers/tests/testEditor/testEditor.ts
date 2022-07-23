import { createSlice } from "@reduxjs/toolkit"

import {
  createNewScale,
  changeScaleName,
  changeScaleNumber,
  deleteScale
} from "./scaleReducer"
import {
  createNewQuestion,
  changeQuestionNumber,
  changeQuestionText,
  deleteQestion,
  addNewRadioAnswer,
  changeRadioAnswerText,
  deleteRadioAnswer,
  addDependency,
  changeScaleDependency,
  deleteDependency,
  changeAnswerValue
} from './questionReducer'
import {
  addInterpret,
  changeInterpretText,
  changeInterpretValueLimits,
  addInterpretRequiredScale,
  changeInterpretRequiredScale,
  deleteInterpretRequiredScale,
  deleteInterpret
} from './interpretReducer'

import { CompleteTest, Test } from "../../../../types/types"


const testEditorSlice = createSlice({
  name: "testEditor",
  initialState: {
    testName: "",
    testScales: {},
    testQuestions: {},
    testInterpretations: {}
  } as CompleteTest,
  reducers: {
    setTestEditorData: (_state, { payload }: { payload: Test }) => {
      _state = payload
    },
    createNewTest: (_state) => {
      _state = {
        testName: "",
        testScales: {},
        testQuestions: {},
        testInterpretations: {}
      }
    },
    changeTestName: (state, { payload }: { payload: string }) => {
      state.testName = payload
    },
    //scales functions
    changeScaleName,
    createNewScale,
    changeScaleNumber,
    deleteScale,
    //questions functions
    createNewQuestion,
    changeQuestionNumber,
    changeQuestionText,
    deleteQestion,
    addNewRadioAnswer,
    changeRadioAnswerText,
    deleteRadioAnswer,
    addDependency,
    changeScaleDependency,
    deleteDependency,
    changeAnswerValue,
    //interpretations functions
    addInterpret,
    changeInterpretText,
    changeInterpretValueLimits,
    addInterpretRequiredScale,
    changeInterpretRequiredScale,
    deleteInterpretRequiredScale,
    deleteInterpret
  }
})


export const testEditorActions = testEditorSlice.actions

export const testEditorReducer = testEditorSlice.reducer
// export { testEditorActions, testEditorReducer }
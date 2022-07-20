import { createSlice } from "@reduxjs/toolkit"

import { createNewScale, changeScaleName, changeScaleNumber, deleteScale } from "./scaleReducer"
import { Test } from "../../../../types/types"


const testEditorSlice = createSlice({
  name: "testEditor",
  initialState: {
    testName: "",
    testScales: {},
    testQuestions: {},
    testInterpretations: {}
  } as Test,
  reducers: {
    setTestEditorData: (state, { payload: { testData } }: { payload: { testData: Test } }) => {
      state = testData
    },
    createNewTest: (state) => {
      state = {
        testName: "",
        testScales: {},
        testQuestions: {},
        testInterpretations: {}
      }
    },
    changeTestName: (state, { payload: { testName } }: { payload: { testName: string } }) => {
      state.testName = testName
    },

    //scales functions
    createNewScale,
    changeScaleName,
    changeScaleNumber,
    deleteScale,

    //questions functions
  }
})


export const {
  changeTestName,
  setTestEditorData,
  createNewTest,
} = testEditorSlice.actions

export const testEditorReducer = testEditorSlice.reducer
// export { testEditorActions, testEditorReducer }
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
    setTestEditorData: (state, { payload }: { payload: Test }) => {
      state = payload
    },
    createNewTest: (state) => {
      state = {
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
  }
})


export const {
  changeTestName,
  setTestEditorData,
  createNewTest,
} = testEditorSlice.actions

export const testEditorReducer = testEditorSlice.reducer
// export { testEditorActions, testEditorReducer }
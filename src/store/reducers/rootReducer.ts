import { combineReducers } from "redux"


import { app } from "./app"
import { testEditor } from "./testEditor/testEditor"
import { testsReducer } from "./tests"


const rootReducer = combineReducers({
  // appState: app,
  testEditorState: testEditor,
  tests: testsReducer
})


export default rootReducer



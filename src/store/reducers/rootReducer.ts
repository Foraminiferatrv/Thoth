import { combineReducers } from "redux"

// import { app } from "./app"
import { testsReducer } from "./tests/tests"

const rootReducer = combineReducers({
  // appState: app,
  tests: testsReducer
})

console.log(rootReducer)

export default rootReducer



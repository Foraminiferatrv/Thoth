import { combineReducers } from "redux"

import { scaleReducer } from "./scaleReducer"


const testEditor = combineReducers({
  scaleState: scaleReducer
})

export { testEditor }
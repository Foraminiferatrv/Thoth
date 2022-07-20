import { createSlice } from "@reduxjs/toolkit"

import {
  v1 as uuidv1
} from 'uuid'

import { Interprets } from "../../../../types/types"


function addInterpret(state: Interprets) {
  state = {
    ...state,
    [uuidv1()]: {
      interpretNumber: Object.keys(state).length + 1,
      interpretText: "",
      requiredScales: [{
        requiredScaleId: '',
        requiredValueLimits: {
          from: 0,
          to: 0
        }
      }]
    }
  }
}

function changeInterpretText(
  state: Interprets,
  targetInterpretId: string | number,
  newInterpretText: string | number
) {
  state[targetInterpretId].interpretText = newInterpretText
}

function changeInterpretValueLimits(
  state: Interprets,
  targetInterpretId: string | number,
  scaleIndex: number,
  fromLimit: number,
  toLimit: number
) {

  state[targetInterpretId].requiredScales[scaleIndex].requiredValueLimits = {
    from: fromLimit,
    to: toLimit
  }
}

function addInterpretRequiredScale(
  state: Interprets,
  targetInterpretId: string | number
) {
  state[targetInterpretId].requiredScales.push({
    requiredScaleId: '',
    requiredValueLimits: {
      from: 0,
      to: 0
    }
  })
}

function changeInterpretRequiredScale(
  state: Interprets,
  targetInterpretId: string | number,
  scaleIndex: number,
  newScaleId: string | number
) {
  state[targetInterpretId].requiredScales[scaleIndex].requiredScaleId = newScaleId
}

function deleteInterpretRequiredScale(
  state: Interprets,
  targetInterpretId: string | number,
  scaleIndex: number
) {
  state[targetInterpretId].requiredScales.splice(scaleIndex, 1)
}

function deleteInterpret(
  state: Interprets,
  targetInterpretId: string | number
) {
  delete state[targetInterpretId]
}



const testInterprets = createSlice({
  name: "testInterprets",
  initialState: {} as Interprets,
  reducers: {
    addInterpret: (state) => addInterpret(state),
    changeInterpretText: (state, { payload: { targetInterpretId, newInterpretText } }) => changeInterpretText(state, targetInterpretId, newInterpretText),
    changeInterpretValueLimits: (state, { payload: { targetInterpretId, scaleIndex, fromLimit, toLimit } }) => changeInterpretValueLimits(state, targetInterpretId, scaleIndex, fromLimit, toLimit),
    addInterpretRequiredScale: (state, { payload: { targetInterpretId } }) => addInterpretRequiredScale(state, targetInterpretId),
    changeInterpretRequiredScale: (state, { payload: { targetInterpretId, scaleIndex, newScaleId } }) => changeInterpretRequiredScale(state, targetInterpretId, scaleIndex, newScaleId),
    deleteInterpretRequiredScale: (state, { payload: { targetInterpretId, scaleIndex } }) => deleteInterpretRequiredScale(state, targetInterpretId, scaleIndex),
    deleteInterpret: (state, { payload: { targetInterpretId } }) => deleteInterpret(state, targetInterpretId),
  }
})

const { actions, reducer } = testInterprets

export { actions as interpretsAntions }
export { reducer as interpretsReducer }
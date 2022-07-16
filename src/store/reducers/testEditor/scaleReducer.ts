import {
  v1 as uuidv1
} from 'uuid'

import comparator from '../../../utils/comparator'

import { createSlice } from "@reduxjs/toolkit"
// import { StateWithScales } from "../types"

//Temoprary types:
interface Scale {
  [scaleId: string]: {
    scaleNumber: number,
    scaleName: string | number,
  }
}


function createNewScale(state: Scale) {
  state = {
    [uuidv1()]: {
      scaleNumber: Object.keys(state.testScales).length,
      scaleName: ""
    }
  }
}

function changeScaleName(
  state: Scale,
  scaleName: string | number,
  targetScaleId: string | number
) {
  state[targetScaleId].scaleName = scaleName
}

function changeScaleNumber(
  state: Scale,
  newScalesArray: { scaleNumber: number }[][]
) {
  let scalesArray = [...newScalesArray]
  scalesArray.forEach((_, index: number) => scalesArray[index][1].scaleNumber = index)

  state = Object.fromEntries(scalesArray)
}

function deleteScale(
  state: Scale,
  targetScaleId: string | number
) {
  let scalesCopy = JSON.parse(JSON.stringify(state.testScales))

  delete scalesCopy[targetScaleId]

  //After deleting a scale, we should reasign scale numbers to all scales.
  scalesCopy = Object.entries(scalesCopy as Scale)
    .sort((elementA, elementB) => (
      comparator(elementA[1].scaleNumber, elementB[1].scaleNumber)
    ))
  scalesCopy.forEach((_: never, index: number) => scalesCopy[index][1].scaleNumber = index)
  scalesCopy = Object.fromEntries(scalesCopy)

  state = scalesCopy
}


const testScales = createSlice({
  name: "testScales",
  initialState: {} as Scale,
  reducers: {
    createNewScale: (state) => createNewScale(state),
    changeScaleName: (state, { payload: { scaleName, targetScaleId } }) => changeScaleName(state, scaleName, targetScaleId),
    changeScaleNumber: (state, { payload: { newScalesArray } }) => changeScaleNumber(state, newScalesArray),
    deleteScale: (state, { payload: { scaleId } }) => deleteScale(state, scaleId)
  }
})

const { actions, reducer } = testScales

export { actions as scaleAntions }
export { reducer as scaleReducer }
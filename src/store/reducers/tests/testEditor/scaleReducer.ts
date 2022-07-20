import { v1 as uuidv1 } from 'uuid'

import comparator from '../../../../utils/comparator'

import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { CompleteTest, Scales, Test } from "../../../../types/types"


export const createNewScale: CaseReducer<Test> = (state: CompleteTest) => {
  state.testScales = {
    [uuidv1()]: {
      scaleNumber: Object.keys(state.testScales).length,
      scaleName: ""
    }
  }
}

export const changeScaleName:
  CaseReducer<CompleteTest, PayloadAction<{
    scaleName: string | number,
    targetScaleId: string | number
  }>> = (
    state,
    { payload: {
      scaleName,
      targetScaleId
    } }
  ) => {
    state.testScales[targetScaleId].scaleName = scaleName
  }

export const changeScaleNumber:
  CaseReducer<CompleteTest, PayloadAction<{
    newScalesArray: { scaleNumber: number }[][],
  }>> = (
    state,
    { payload: { newScalesArray } }
  ) => {
    let scalesArray = [...newScalesArray]
    scalesArray.forEach((_, index: number) => scalesArray[index][1].scaleNumber = index)

    state.testScales = Object.fromEntries(scalesArray)
  }

export const deleteScale:
  CaseReducer<CompleteTest, PayloadAction<{
    targetScaleId: string | number
  }>> = (
    state,
    { payload: {
      targetScaleId
    } }
  ) => {
    let scalesCopy = JSON.parse(JSON.stringify(state.testScales))

    delete scalesCopy[targetScaleId]

    //After deleting a scale, we should reasign scale numbers to all scales.
    scalesCopy = Object.entries(scalesCopy as Scales)
      .sort((elementA, elementB) => (
        comparator(elementA[1].scaleNumber, elementB[1].scaleNumber)
      ))
    scalesCopy.forEach((_: never, index: number) => scalesCopy[index][1].scaleNumber = index)
    scalesCopy = Object.fromEntries(scalesCopy)

    state.testScales = scalesCopy
  }

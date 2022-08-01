import { v1 as uuidv1 } from 'uuid'

import comparator from '../../../../utils/comparator'

import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { CompleteTest, Scales, Test, Scale } from "../../../../types/types"


export const createNewScale: CaseReducer<Test> = (state: CompleteTest) => {
  state.testScales = {
    ...state.testScales,
    [uuidv1()]: {
      scaleNumber: Object.keys(state.testScales).length,
      scaleName: ""
    }
  }
}

export const changeScaleName:
  CaseReducer<CompleteTest, PayloadAction<{
    scaleName: string,
    targetScaleId: string
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
    newScalesArray: Scale[][],
  }>> = (
    state,
    { payload: { newScalesArray } }
  ) => {
    console.log(newScalesArray)
    let scalesArray = [...newScalesArray]
    scalesArray.forEach((_, index: number) => { // We have to coppy scales object, since immer freezes all numerable values
      let scaleCopy = JSON.parse(JSON.stringify(scalesArray[index][1]))
      scaleCopy.scaleNumber = index
      scalesArray[index][1] = scaleCopy
    })
    state.testScales = Object.fromEntries(scalesArray)
  }

export const deleteScale:
  CaseReducer<CompleteTest, PayloadAction<{
    targetScaleId: string
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

import {
  v1 as uuidv1
} from 'uuid'

import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { CompleteTest, Test } from "../../../../types/types"


export const addInterpret: CaseReducer<Test> = (state) => {
  state.testInterpretations = {
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

export const changeInterpretText:
  CaseReducer<CompleteTest, PayloadAction<{
    targetInterpretId: string | number,
    newInterpretText: string | number
  }>> = (
    state,
    { payload: {
      targetInterpretId,
      newInterpretText
    } }
  ) => {
    state.testInterpretations[targetInterpretId].interpretText = newInterpretText
  }

export const changeInterpretValueLimits:
  CaseReducer<CompleteTest, PayloadAction<{
    targetInterpretId: string | number,
    scaleIndex: number,
    fromLimit: number,
    toLimit: number
  }>> = (
    state,
    { payload: {
      targetInterpretId,
      scaleIndex,
      fromLimit,
      toLimit
    } }
  ) => {

    state.testInterpretations[targetInterpretId].requiredScales[scaleIndex].requiredValueLimits = {
      from: fromLimit,
      to: toLimit
    }
  }

export const addInterpretRequiredScale:
  CaseReducer<CompleteTest, PayloadAction<{
    targetInterpretId: string | number
  }>> = (
    state,
    { payload: {
      targetInterpretId
    } }
  ) => {
    state.testInterpretations[targetInterpretId].requiredScales.push({
      requiredScaleId: '',
      requiredValueLimits: {
        from: 0,
        to: 0
      }
    })
  }

export const changeInterpretRequiredScale:
  CaseReducer<CompleteTest, PayloadAction<{
    targetInterpretId: string | number,
    scaleIndex: number,
    newScaleId: string | number
  }>> = (
    state,
    { payload: { targetInterpretId,
      scaleIndex,
      newScaleId
    } }) => {
    state.testInterpretations[targetInterpretId].requiredScales[scaleIndex].requiredScaleId = newScaleId
  }

export const deleteInterpretRequiredScale:
  CaseReducer<CompleteTest, PayloadAction<{
    targetInterpretId: string | number,
    scaleIndex: number
  }>> = (
    state,
    { payload: {
      targetInterpretId,
      scaleIndex
    } }
  ) => {
    state.testInterpretations[targetInterpretId].requiredScales.splice(scaleIndex, 1)
  }

export const deleteInterpret:
  CaseReducer<CompleteTest, PayloadAction<{
    targetInterpretId: string | number
  }>> = (
    state,
    { payload: {
      targetInterpretId
    }
    }
  ) => {
    delete state.testInterpretations[targetInterpretId]
  }
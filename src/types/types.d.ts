//app

import { RouteComponentProps } from "react-router-dom"

export interface Question {
  questionNumber: number,
  questionText: string | number,
  questionRadioAnswers: {}
}

export interface Test {
  testName: string | number,
  testScales: {},
  testQuestions: {},
  testInterpretations: {},
}
//TODO: add Scale type
//TODO: change all types to redux toolkit pattern
export interface StateWithScales extends Test {
  testScales: {
    [scaleId: string]: {
      scaleNumber: number,
      scaleName: string | number,
    }
  }
}


export interface StateWithQuestions extends Test {
  testQuestions: {
    [questionId: string | number]: {
      questionRadioAnswers: {
        answerNumber: number,
        answerText: string | number,
        scaleDependencies: {
          scaleId: string | number,
          answerValue: number
        }[],
      }
    }
  }
}

export interface StateWithInterprets extends Test {
  testInterpretations: {
    [interpretId: string | number]: {
      interpretNumber: number,
      interpretText: string | number,
      requiredScales: {
        requiredScaleId: string | number,
        requiredValueLimits: {
          from: number,
          to: number
        }
      }[]
    }
  }
}

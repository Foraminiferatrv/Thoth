export interface Question {
  questionNumber: number,
  questionText: string | number,
  questionRadioAnswers: {}
}

export interface TestState {
  testName: string | number,
  testScales: {
    [scaleId: string]: {
      scaleNumber: number,
      scaleName: string | number,
    }
  },
  testQuestions: {},
  testInterpretations: {},
}

export interface StateWithQuestions extends TestState {
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

export interface StateWithInterprets extends TestState {
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
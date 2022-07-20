//app
//Test Type
export interface Test {
  testName: string | number,
  testScales: {},
  testQuestions: {},
  testInterpretations: {},
}

export interface Scale {
  scaleNumber: number,
  scaleName: string | number,
}

export interface Scales {
  [scaleId: string]: {
    scaleNumber: number,
    scaleName: string | number,
  }
}

export interface StateWithScales extends Test {
  testScales: {
    [scaleId: string]: {
      scaleNumber: number,
      scaleName: string | number,
    }
  }
}

//Questions Types
export interface Question {
  questionNumber: number,
  questionText: string | number,
  questionRadioAnswers: {
    [answerId: string | number]: {
      answerNumber: number,
      answerText: string | number,
      scaleDependencies: {
        scaleId: string | number,
        answerValue: number
      }[]
    }
  }
}

export interface TestQuestions {
  [questionId: string | number]: Question
}

export interface StateWithQuestions extends Test {
  testQuestions: { [questionId: string | number]: Question }
}


//Test Interpretations
export interface Interpret {
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

export interface Interprets {
  [interpretId: string | number]: Interpret
}

export interface StateWithInterprets extends Test {
  testInterpretations: {
    [interpretId: string | number]: Interpret
  }
}

//comlete Test

export interface CompleteTest {
  testName: string | number,
  testScales: Scales,
  testQuestions: Questions,
  testInterpretations: Interprets,
}
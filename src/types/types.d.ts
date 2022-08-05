//app
//Test Type
export interface Test {
  testName: string,
  testScales: {},
  testQuestions: {},
  testInterpretations: {},
}

export interface Tests {
  [testId: string]: Test
}

export interface Scale {
  scaleNumber: number,
  scaleName: string,
}

export interface Scales {
  [scaleId: string]: {
    scaleNumber: number,
    scaleName: string,
  }
}

export interface StateWithScales extends Test {
  testScales: {
    [scaleId: string]: {
      scaleNumber: number,
      scaleName: string,
    }
  }
}

//Questions Types
export interface QuestionRadioAnswers {
  [answerId: string]: {
    answerNumber: number,
    answerText: string,
    scaleDependencies: {
      scaleId: string,
      answerValue: number
    }[]
  }
}

export interface Question {
  questionNumber: number,
  questionText: string,
  questionRadioAnswers: QuestionRadioAnswers
}

export interface Questions {
  [questionId: string]: Question
}

export interface StateWithQuestions extends Test {
  testQuestions: { [questionId: string]: Question }
}


//Test Interpretations
export interface Interpret {
  interpretNumber: number,
  interpretText: string,
  requiredScales: {
    requiredScaleId: string,
    requiredValueLimits: {
      from: number,
      to: number
    }
  }[]
}

export interface Interprets {
  [interpretId: string]: Interpret
}

export interface StateWithInterprets extends Test {
  testInterpretations: {
    [interpretId: string]: Interpret
  }
}

//comlete Test

export interface CompleteTest {
  testName: string,
  testScales: Scales,
  testQuestions: Questions,
  testInterpretations: Interprets,
}

//UsePositionReorder hook
type Offset = {
  top: number,
  height: number
}
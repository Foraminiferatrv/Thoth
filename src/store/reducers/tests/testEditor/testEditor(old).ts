// @ts-nocheck

import {
  updateObject
} from '../../../../utils/utility'

import ActionTypes from '../../../actions/actionTypes'

import {
  v1 as uuidv1
} from 'uuid'

import comparator from '../../../../utils/comparator'

import {
  Question,
  Test,
  StateWithInterprets,
  StateWithQuestions,
  StateWithScales
} from "../../../../types/types"
import { TestEditorTypes } from '../../../actions/AllActionTypes'


const initialState = {}


function createNewTest(state: {}) {
  const newTestObject = {
    testName: "",
    testScales: {},
    testQuestions: {},
    testInterpretations: {}
  }

  return updateObject(state, newTestObject)
}

function setTestEditorData(
  state: Test,
  testData: {}
) {
  return updateObject(state, testData)
}

function addTestName(
  state: Test,
  testName: string | number
) {
  return updateObject(state, {
    testName: testName
  })
}

// scale functions
function createNewScale(
  state: StateWithScales
) {
  let scalesCopy = {
    ...state.testScales
  }
  scalesCopy = {
    ...scalesCopy,
    [uuidv1()]: {
      scaleNumber: Object.keys(state.testScales).length,
      scaleName: ""
    }
  }

  return ({
    ...state,
    testScales: {
      ...scalesCopy
    }
  })
}

function changeScaleName(
  state: StateWithScales,
  scaleName: string | number,
  targetScaleId: string | number
) {
  const scalesCopy = JSON.parse(JSON.stringify(state.testScales))

  scalesCopy[targetScaleId] = {
    ...scalesCopy[targetScaleId],
    scaleName: scaleName
  }
  return ({
    ...state,
    testScales: {
      ...state.testScales,
      [targetScaleId]: {
        ...scalesCopy[targetScaleId]
      }
    }
  })

}

function changeScaleNumber(
  state: StateWithScales,
  newScalesArray: { scaleNumber: number }[][]
) {
  let scalesArray = [...newScalesArray]

  scalesArray.forEach((_, index: number) => scalesArray[index][1].scaleNumber = index)

  let updatedScales = Object.fromEntries(scalesArray)


  return ({
    ...state,
    testScales: {
      ...updatedScales
    }
  })
}

function deleteScale(
  state: StateWithScales,
  targetScaleId: string | number
) {
  let scalesCopy = JSON.parse(JSON.stringify(state.testScales))

  delete scalesCopy[targetScaleId]

  //After deleting a scale, we should reasign scale numbers to all scales.
  scalesCopy = Object
    .entries(scalesCopy as StateWithScales["testScales"])
    .sort((elementA, elementB) => (
      comparator(elementA[1].scaleNumber, elementB[1].scaleNumber)
    ))
  scalesCopy.forEach((_: never, index: number) => scalesCopy[index][1].scaleNumber = index)

  scalesCopy = Object.fromEntries(scalesCopy)

  return ({
    ...state,
    testScales: {
      ...scalesCopy
    }
  })
}
//end scale functions


// questions functions
function createNewQuestion(state: Test) {
  return ({
    ...state,
    testQuestions: {
      ...state.testQuestions,
      [uuidv1()]: {
        questionNumber: [Object.keys(state.testQuestions).length + 1],
        questionText: "",
        questionRadioAnswers: {}
      }
    }
  })
}

function changeQuestionNumber(
  state: Test,
  newQuestionsArray: { [questionId: string]: Question }[]
) {
  let questionsArray = [...newQuestionsArray]

  questionsArray.forEach((_, index) => questionsArray[index][1].questionNumber = index)

  let updatedQuestions = Object.fromEntries(questionsArray as [])


  return ({
    ...state,
    testQuestions: {
      ...updatedQuestions,
    }
  })
}

function changeQuestionText(
  state: Test,
  newQuestionText: string | number,
  targetQuestionId: string | number
) {
  const questionsCopy = JSON.parse(JSON.stringify(state.testQuestions))

  questionsCopy[targetQuestionId] = {
    ...questionsCopy[targetQuestionId],
    questionText: newQuestionText
  }

  return {
    ...state,
    testQuestions: {
      ...state.testQuestions,
      [targetQuestionId]: {
        ...questionsCopy[targetQuestionId]
      }
    }
  }
}

function deleteQestion(state: Test, targetQuestionId: string | number) {

  const questionsCopy = JSON.parse(JSON.stringify(state.testQuestions))

  delete questionsCopy[targetQuestionId]

  return updateObject(state, {
    testQuestions: questionsCopy
  })
}
//end question functions


//answer functions
function addNewRadioAnswer(state: StateWithQuestions, targetQuestionId: string | number) {

  return ({
    ...state,
    testQuestions: {
      ...state.testQuestions,
      [targetQuestionId]: {
        ...state.testQuestions[targetQuestionId],
        questionRadioAnswers: {
          ...state.testQuestions[targetQuestionId].questionRadioAnswers,
          [uuidv1()]: {
            answerNumber: [Object.keys(state.testQuestions[targetQuestionId].questionRadioAnswers).length + 1],
            answerText: "",
            scaleDependencies: [{
              scaleId: "",
              answerValue: 0
            }]
          }
        }
      }
    }
  })
}

function changeRadioAnswerText(
  state: StateWithQuestions,
  newAnswerText: string | number,
  targetQuestionId: string | number,
  answerId: string | number
) {
  const questionsCopy = JSON.parse(JSON.stringify(state.testQuestions))

  questionsCopy[targetQuestionId].questionRadioAnswers[answerId] = {
    ...questionsCopy[targetQuestionId].questionRadioAnswers[answerId],
    answerText: newAnswerText
  }

  return ({
    ...state,
    testQuestions: {
      ...state.testQuestions,
      [targetQuestionId]: {
        ...state.testQuestions[targetQuestionId],
        questionRadioAnswers: {
          ...state.testQuestions[targetQuestionId].questionRadioAnswers,
          [answerId]: {
            ...questionsCopy[targetQuestionId].questionRadioAnswers[answerId],
          }
        }
      }
    }
  })
}

function deleteRadioAnswer(
  state: StateWithQuestions,
  targetQuestionId: string | number,
  answerId: string | number
) {
  const questionsCopy = JSON.parse(JSON.stringify(state.testQuestions))
  delete questionsCopy[targetQuestionId].questionRadioAnswers[answerId]

  return ({
    ...state,
    testQuestions: {
      ...state.testQuestions,
      [targetQuestionId]: {
        ...state.testQuestions[targetQuestionId],
        questionRadioAnswers: {
          ...questionsCopy[targetQuestionId].questionRadioAnswers
        }
      }
    }
  })
}

function addDependency(
  state: StateWithQuestions,
  targetQuestionId: string | number,
  answerId: string | number) {
  const questionsCopy = JSON.parse(JSON.stringify(state.testQuestions))

  questionsCopy[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies.push({
    scaleId: "",
    answerValue: 0
  })

  return ({
    ...state,
    testQuestions: {
      ...state.testQuestions,
      [targetQuestionId]: {
        ...state.testQuestions[targetQuestionId],
        questionRadioAnswers: {
          ...state.testQuestions[targetQuestionId].questionRadioAnswers,
          [answerId]: {
            ...questionsCopy[targetQuestionId].questionRadioAnswers[answerId],
          }
        }
      }
    }
  })
}


function changeScaleDependency(
  state: StateWithQuestions,
  targetQuestionId: string | number,
  answerId: string | number,
  depIndex: string | number,
  newValue: string | number
) {
  const questionsCopy = JSON.parse(JSON.stringify(state.testQuestions))

  questionsCopy[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies[depIndex].scaleId = newValue

  return ({
    ...state,
    testQuestions: {
      ...state.testQuestions,
      [targetQuestionId]: {
        ...state.testQuestions[targetQuestionId],
        questionRadioAnswers: {
          ...state.testQuestions[targetQuestionId].questionRadioAnswers,
          [answerId]: {
            ...questionsCopy[targetQuestionId].questionRadioAnswers[answerId],
          }
        }
      }
    }
  })
}

function deleteDependency(
  state: StateWithQuestions,
  targetQuestionId: string | number,
  answerId: string | number,
  depIndex: number
) {
  const questionsCopy = JSON.parse(JSON.stringify(state.testQuestions))

  questionsCopy[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies.splice(depIndex, 1)

  if (questionsCopy[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies.length === 0) {
    questionsCopy[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies.push({
      scaleId: "",
      answerValue: 0
    })
  };

  return ({
    ...state,
    testQuestions: {
      ...state.testQuestions,
      [targetQuestionId]: {
        ...state.testQuestions[targetQuestionId],
        questionRadioAnswers: {
          ...state.testQuestions[targetQuestionId].questionRadioAnswers,
          [answerId]: {
            ...questionsCopy[targetQuestionId].questionRadioAnswers[answerId],
          }
        }
      }
    }
  })
}

function changeAnswerValue(
  state: StateWithQuestions,
  targetQuestionId: string | number,
  answerId: string | number,
  depIndex: number,
  newValue: number) {
  const questionsCopy = JSON.parse(JSON.stringify(state.testQuestions))

  questionsCopy[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies[depIndex].answerValue = newValue
  return ({
    ...state,
    testQuestions: {
      ...state.testQuestions,
      [targetQuestionId]: {
        ...state.testQuestions[targetQuestionId],
        questionRadioAnswers: {
          ...state.testQuestions[targetQuestionId].questionRadioAnswers,
          [answerId]: {
            ...questionsCopy[targetQuestionId].questionRadioAnswers[answerId],
          }
        }
      }
    }
  })
}
//end answer functions


//interpret functions
function addInterpret(state: Test) {
  let interpretCopy = {
    ...state.testInterpretations
  }

  interpretCopy = {
    ...interpretCopy,
    [uuidv1()]: {
      interpretNumber: [Object.keys(interpretCopy).length + 1],
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

  return ({
    ...state,
    testInterpretations: {
      ...interpretCopy
    }
  })
}

function changeInterpretText(
  state: StateWithInterprets,
  targetInterpretId: string | number,
  newInterpretText: string | number
) {
  const interpretCopy = {
    ...state.testInterpretations
  }


  interpretCopy[targetInterpretId] = {
    ...interpretCopy[targetInterpretId],
    interpretText: newInterpretText
  }

  return ({
    ...state,
    testInterpretations: {
      ...state.testInterpretations,
      [targetInterpretId]: {
        ...interpretCopy[targetInterpretId]
      }
    }
  })
}

function changeInterpretValueLimits(
  state: StateWithInterprets,
  targetInterpretId: string | number,
  scaleIndex: number,
  fromLimit: number,
  toLimit: number
) {
  const interpretCopy = {
    ...state.testInterpretations
  }


  interpretCopy[targetInterpretId].requiredScales[scaleIndex].requiredValueLimits = {
    from: fromLimit,
    to: toLimit
  }

  return ({
    ...state,
    testInterpretations: {
      ...state.testInterpretations,
      [targetInterpretId]: {
        ...interpretCopy[targetInterpretId]
      }
    }
  })
}

function addInterpretRequiredScale(
  state: StateWithInterprets,
  targetInterpretId: string | number
) {
  const interpretCopy = {
    ...state.testInterpretations
  }

  interpretCopy[targetInterpretId].requiredScales.push({
    requiredScaleId: '',
    requiredValueLimits: {
      from: 0,
      to: 0
    }
  })

  return ({
    ...state,
    testInterpretations: {
      ...state.testInterpretations,
      [targetInterpretId]: {
        ...interpretCopy[targetInterpretId]
      }
    }
  })
}

function changeInterpretRequiredScale(
  state: StateWithInterprets,
  targetInterpretId: string | number,
  scaleIndex: number,
  newScaleId: string | number
) {
  const interpretCopy = {
    ...state.testInterpretations
  }

  interpretCopy[targetInterpretId].requiredScales[scaleIndex].requiredScaleId = newScaleId

  return ({
    ...state,
    testInterpretations: {
      ...state.testInterpretations,
      [targetInterpretId]: {
        ...interpretCopy[targetInterpretId]
      }
    }
  })
}

function deleteInterpretRequiredScale(
  state: StateWithInterprets,
  targetInterpretId: string | number,
  scaleIndex: number
) {
  const interpretCopy = {
    ...state.testInterpretations
  }
  interpretCopy[targetInterpretId].requiredScales.splice(scaleIndex, 1)

  return ({
    ...state,
    testInterpretations: {
      ...state.testInterpretations,
      [targetInterpretId]: {
        ...interpretCopy[targetInterpretId]
      }
    }
  })
}

function deleteInterpret(
  state: StateWithInterprets,
  targetInterpretId: string | number
) {
  const interpretCopy = {
    ...state.testInterpretations
  }

  delete interpretCopy[targetInterpretId]

  return ({
    ...state,
    testInterpretations: {
      ...interpretCopy
    }
  })
}



//end interpret functions


// TODO: Create function for element searching
//TODO: Apply deep cloning for objects
function testEditor(state = initialState, action: TestEditorTypes) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_TEST:
      return createNewTest(state)

    case ActionTypes.SET_TEST_EDITOR_DATA:
      return setTestEditorData(state as Test, action.testData)

    case ActionTypes.ADD_TEST_NAME:
      return addTestName(state as Test, action.testName)

    //scales reducers
    case ActionTypes.CREATE_NEW_SCALE:
      return createNewScale(state as Test)

    case ActionTypes.CHANGE_SCALE_NAME:
      return changeScaleName(state as Test, action.scaleName, action.targetScaleId)

    case ActionTypes.CHANGE_SCALE_NUMBER:
      return changeScaleNumber(state as Test, action.newScalesArray)

    case ActionTypes.DELETE_SCALE:
      return deleteScale(state as Test, action.scaleId)

    //question reducers
    case ActionTypes.CREATE_NEW_QUESTION:
      return createNewQuestion(state as Test)

    case ActionTypes.CHANGE_QUESTION_NUMBER:
      return changeQuestionNumber(state as StateWithQuestions, action.newQuestionsArray)

    case ActionTypes.CHANGE_QUESTION_TEXT:
      return changeQuestionText(state as StateWithQuestions, action.newQuestionText, action.targetQuestionId)

    case ActionTypes.DELETE_QUESTION:
      return deleteQestion(state as StateWithQuestions, action.targetQuestionId)

    case ActionTypes.CREATE_NEW_RADIO_ANSWER:
      return addNewRadioAnswer(state as StateWithQuestions, action.targetQuestionId)

    case ActionTypes.CHANGE_RADIO_ANSWER_TEXT:
      return changeRadioAnswerText(state as StateWithQuestions, action.newAnswerText, action.targetQuestionId, action.answerId)

    case ActionTypes.DELETE_RADIO_ANSWER:
      return deleteRadioAnswer(state as StateWithQuestions, action.targetQuestionId, action.answerId)

    case ActionTypes.ADD_DEPENDENCY:
      return addDependency(state as StateWithQuestions, action.targetQuestionId, action.answerId)

    case ActionTypes.CHANGE_SCALE_DEPENDENCY:
      return changeScaleDependency(state as StateWithQuestions, action.targetQuestionId, action.answerId, action.depIndex, action.newValue)

    case ActionTypes.DELETE_DEPENDENCY:
      return deleteDependency(state as StateWithQuestions, action.targetQuestionId, action.answerId, action.depIndex)

    case ActionTypes.CHANGE_ANSWER_VALUE:
      return changeAnswerValue(state as StateWithQuestions, action.targetQuestionId, action.answerId, action.depIndex, action.newValue)

    case ActionTypes.ADD_INTERPRET:
      return addInterpret(state as StateWithQuestions)

    //interprets reducers
    case ActionTypes.CHANGE_INTERPRET_TEXT:
      return changeInterpretText(state as StateWithInterprets, action.targetInterpretId, action.newInterpretText)

    case ActionTypes.CHANGE_INTERPRET_VALUE_LIMITS:
      return changeInterpretValueLimits(state as StateWithInterprets, action.targetInterpretId, action.scaleIndex, action.fromLimit, action.toLimit)

    case ActionTypes.CHANGE_INTERPRET_REQUIRED_SCALE:
      return changeInterpretRequiredScale(state as StateWithInterprets, action.targetInterpretId, action.scaleIndex, action.newScaleId)

    case ActionTypes.ADD_INTERPRET_REQUIRED_SCALE:
      return addInterpretRequiredScale(state as StateWithInterprets, action.targetInterpretId)

    case ActionTypes.DELETE_INTERPRET_REQUIRED_SCALE:
      return deleteInterpretRequiredScale(state as StateWithInterprets, action.targetInterpretId, action.scaleIndex)

    case ActionTypes.DELETE_INTERPRET:
      return deleteInterpret(state as StateWithInterprets, action.targetInterpretId)


    default:
      return state
  }
}

export {
  testEditor
}
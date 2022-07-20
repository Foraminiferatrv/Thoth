import { createSlice } from "@reduxjs/toolkit"
import {
  v1 as uuidv1
} from 'uuid'

import { Question, TestQuestions } from "../../../../types/types"


function createNewQuestion(state: TestQuestions) {
  state = {
    ...state,
    [uuidv1()]: {
      questionNumber: Object.keys(state).length + 1,
      questionText: "",
      questionRadioAnswers: {}
    }
  }
}


function changeQuestionNumber(
  _state: TestQuestions,
  newQuestionsArray: { [questionId: string]: Question }[]
) {
  let questionsArray = [...newQuestionsArray]

  questionsArray.forEach((_, index) => questionsArray[index][1].questionNumber = index)

  _state = Object.fromEntries(questionsArray as [])
}

function changeQuestionText(
  state: TestQuestions,
  newQuestionText: string | number,
  targetQuestionId: string | number
) {
  state[targetQuestionId].questionText = newQuestionText
}

function deleteQestion(
  state: TestQuestions,
  targetQuestionId: string | number
) {
  delete state[targetQuestionId]
}
//end question functions


//answer functions
function addNewRadioAnswer(
  state: TestQuestions,
  targetQuestionId: string | number
) {
  state[targetQuestionId].questionRadioAnswers = {
    ...state[targetQuestionId].questionRadioAnswers,
    [uuidv1()]: {
      answerNumber: Object.keys(state[targetQuestionId].questionRadioAnswers).length + 1,
      answerText: "",
      scaleDependencies: [{
        scaleId: "",
        answerValue: 0
      }]
    }
  }
}

function changeRadioAnswerText(
  state: TestQuestions,
  newAnswerText: string | number,
  targetQuestionId: string | number,
  answerId: string | number
) {
  state[targetQuestionId].questionRadioAnswers[answerId].answerText = newAnswerText
}

function deleteRadioAnswer(
  state: TestQuestions,
  targetQuestionId: string | number,
  answerId: string | number
) {
  delete state[targetQuestionId].questionRadioAnswers[answerId]
}

function addDependency(
  state: TestQuestions,
  targetQuestionId: string | number,
  answerId: string | number) {
  state[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies.push({
    scaleId: "",
    answerValue: 0
  })
}


function changeScaleDependency(
  state: TestQuestions,
  targetQuestionId: string | number,
  answerId: string | number,
  depIndex: number,
  newValue: string | number
) {

  state[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies[depIndex].scaleId = newValue
}

function deleteDependency(
  state: TestQuestions,
  targetQuestionId: string | number,
  answerId: string | number,
  depIndex: number
) {
  state[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies.splice(depIndex, 1)
}

function changeAnswerValue(
  state: TestQuestions,
  targetQuestionId: string | number,
  answerId: string | number,
  depIndex: number,
  newValue: number
) {
  state[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies[depIndex].answerValue = newValue
}
//end answer functions


const testQuestions = createSlice({
  name: "testQuestions",
  initialState: {} as TestQuestions,
  reducers: {
    createNewQuestion: (state) => createNewQuestion(state),
    changeQuestionNumber: (state, { payload: { newQuestionsArray } }) => changeQuestionNumber(state, newQuestionsArray),
    changeQuestionText: (state, { payload: { newQuestionText, targetQuestionId } }) => changeQuestionText(state, newQuestionText, targetQuestionId),
    deleteQestion: (state, { payload: { targetQuestionId } }) => deleteQestion(state, targetQuestionId),
    addNewRadioAnswer: (state, { payload: { targetQuestionId } }) => addNewRadioAnswer(state, targetQuestionId),
    changeRadioAnswerText: (state, { payload: { newAnswerText, targetInterpretId, answerId } }) => changeRadioAnswerText(state, newAnswerText, targetInterpretId, answerId),
    deleteRadioAnswer: (state, { payload: { targetQuestionId, answerId } }) => deleteRadioAnswer(state, targetQuestionId, answerId),
    addDependency: (state, { payload: { targetQuestionId, answerId } }) => addDependency(state, targetQuestionId, answerId),
    changeScaleDependency: (state, { payload: { targetQuestionId, answerId, depIndex, newValue } }) => changeScaleDependency(state, targetQuestionId, answerId, depIndex, newValue),
    deleteDependency: (state, { payload: { targetQuestionId, answerId, depIndex } }) => deleteDependency(state, targetQuestionId, answerId, depIndex),
    changeAnswerValue: (state, { payload: { targetQuestionId, answerId, depIndex, newValue } }) => changeAnswerValue(state, targetQuestionId, answerId, depIndex, newValue),
  }
})

const { actions, reducer } = testQuestions

export { actions as questionsAntions }
export { reducer as questionsReducer }
import {
  v1 as uuidv1
} from 'uuid'


import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"
import { CompleteTest, Question, Test } from "../../../../types/types"


export const createNewQuestion: CaseReducer<Test> = (state) => {
  state.testQuestions = {
    ...state.testQuestions,
    [uuidv1()]: {
      questionNumber: Object.keys(state).length + 1,
      questionText: "",
      questionRadioAnswers: {}
    }
  }
}


export const changeQuestionNumber:
  CaseReducer<CompleteTest, PayloadAction<{
    newQuestionsArray: { [questionId: string]: Question }[]
  }>> = (
    state,
    { payload: {
      newQuestionsArray
    } }
  ) => {
    let questionsArray = [...newQuestionsArray]

    questionsArray.forEach((_, index) => questionsArray[index][1].questionNumber = index)

    state.testQuestions = Object.fromEntries(questionsArray as [])
  }

export const changeQuestionText:
  CaseReducer<CompleteTest, PayloadAction<{
    newQuestionText: string,
    targetQuestionId: string
  }>> = (
    state,
    { payload: {
      newQuestionText,
      targetQuestionId
    } }
  ) => {
    state.testQuestions[targetQuestionId].questionText = newQuestionText
  }

export const deleteQestion:
  CaseReducer<CompleteTest, PayloadAction<{
    targetQuestionId: string
  }>> = (
    state,
    { payload: {
      targetQuestionId
    } }
  ) => {
    delete state.testQuestions[targetQuestionId]
  }
//end question export consts


//answer export consts
export const addNewRadioAnswer:
  CaseReducer<CompleteTest, PayloadAction<{
    targetQuestionId: string
  }>> = (
    state,
    { payload: {
      targetQuestionId
    }
    }) => {
    state.testQuestions[targetQuestionId].questionRadioAnswers = {
      ...state.testQuestions[targetQuestionId].questionRadioAnswers,
      [uuidv1()]: {
        answerNumber: Object.keys(state.testQuestions[targetQuestionId].questionRadioAnswers).length + 1,
        answerText: "",
        scaleDependencies: [{
          scaleId: "",
          answerValue: 0
        }]
      }
    }
  }

export const changeRadioAnswerText:
  CaseReducer<CompleteTest, PayloadAction<{
    newAnswerText: string,
    targetQuestionId: string,
    answerId: string
  }>> = (
    state,
    { payload: {
      newAnswerText,
      targetQuestionId,
      answerId
    } }
  ) => {
    state.testQuestions[targetQuestionId].questionRadioAnswers[answerId].answerText = newAnswerText
  }

export const deleteRadioAnswer:
  CaseReducer<CompleteTest, PayloadAction<{
    targetQuestionId: string,
    answerId: string
  }>> = (
    state,
    { payload: {
      targetQuestionId,
      answerId
    } }
  ) => {
    delete state.testQuestions[targetQuestionId].questionRadioAnswers[answerId]
  }

export const addDependency:
  CaseReducer<CompleteTest, PayloadAction<{
    targetQuestionId: string,
    answerId: string
  }>> = (
    state,
    { payload: {
      targetQuestionId,
      answerId
    } }
  ) => {
    state.testQuestions[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies.push({
      scaleId: "",
      answerValue: 0
    })
  }


export const changeScaleDependency:
  CaseReducer<CompleteTest, PayloadAction<{
    targetQuestionId: string,
    answerId: string,
    depIndex: number,
    newValue: string
  }>> = (
    state,
    { payload: {
      targetQuestionId,
      answerId,
      depIndex,
      newValue,
    } }
  ) => {

    state.testQuestions[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies[depIndex].scaleId = newValue
  }

export const deleteDependency:
  CaseReducer<CompleteTest, PayloadAction<{
    targetQuestionId: string,
    answerId: string,
    depIndex: number
  }>> = (
    state,
    { payload: {
      targetQuestionId,
      answerId,
      depIndex
    } }
  ) => {
    state.testQuestions[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies.splice(depIndex, 1)
  }

export const changeAnswerValue:
  CaseReducer<CompleteTest, PayloadAction<{
    targetQuestionId: string,
    answerId: string,
    depIndex: number,
    newValue: number
  }>> = (
    state,
    { payload: {
      targetQuestionId,
      answerId,
      depIndex,
      newValue,
    } }
  ) => {
    state.testQuestions[targetQuestionId].questionRadioAnswers[answerId].scaleDependencies[depIndex].answerValue = newValue
  }

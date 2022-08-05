import React from 'react'

import classes from './NewQuestion.module.scss'

import EditableInput from '../UI/EditableInput/EditableInput'
import NewRadioAnswer from '../NewRadioAnswer/NewRadioAnswer'
import AddItemButton from '../UI/AddItemButton/AddItemButton'
import DeleteSideButton from '../UI/DeleteSideButton/DeleteSidebutton'

import comparator from '../../utils/comparator'

import { DragControls, motion } from 'framer-motion'

import DragButton from '../UI/DragButton/DragButton'
import { QuestionRadioAnswers, Scales } from '../../types/types'


interface Props {
  dragControls?: DragControls,
  questionIndex: number,
  questionText: string,
  questionId: string,
  radioAnswers: QuestionRadioAnswers,
  testScales: Scales,
  changeQuestionText: (newQuestionText: string, targetQuestionId: string) => void,
  deleteQuestion: (targetQuestionId: string) => void,
  newRadioAnswer: (targetQuestionId: string) => void,
  changeRadioAnswerText: (newAnswerText: string, targetQuestionId: string, answerId: string) => void,
  deleteRadioAnswer: (targetQuestionId: string, answerId: string) => void,
  addDependency: (targetQuestionId: string, answerId: string) => void,
  changeAnswerValue: (targetQuestionId: string, answerId: string, depIndex: number, newValue: number) => void,
  changeScaleDependency: (targetQuestionId: string, answerId: string, depIndex: number, newValue: string) => void,
  deleteDependency: (targetQuestionId: string, answerId: string, depIndex: number) => void,
}


function NewQuestion({
  dragControls,
  questionIndex,
  questionText,
  questionId,
  radioAnswers,
  testScales,
  changeQuestionText,
  deleteQuestion,
  newRadioAnswer,
  changeRadioAnswerText,
  deleteRadioAnswer,
  addDependency,
  changeAnswerValue,
  changeScaleDependency,
  deleteDependency,
}: Props) {
  let radioAnswersContent = null

  if (radioAnswers !== undefined) {
    radioAnswersContent = Object.entries(radioAnswers).sort((elementA, elementB) => comparator(elementA[1].answerNumber, elementB[1].answerNumber)).map(([answerId, answerValues], index) => (
      <NewRadioAnswer
        key={questionId.concat(`${index}`)}
        questionId={questionId}
        answerIndex={index}
        answerId={answerId}
        answerText={answerValues.answerText}
        changeRadioAnswerText={changeRadioAnswerText}
        changeAnswerValue={changeAnswerValue}
        deleteRadioAnswer={deleteRadioAnswer}
        scaleDependencies={answerValues.scaleDependencies}
        testScales={testScales}
        addDependency={addDependency}
        changeScaleDependency={changeScaleDependency}
        deleteDependency={deleteDependency}
      />
    ))
  }


  return (
    < motion.div
      layout
      className={classes.NewQuestion}
    >
      <div className={classes.QuestionBlock}>
        <div className={classes.LeftSide}>
          {dragControls && <DragButton onPointerDown={(e) => dragControls.start(e)} />}
          <EditableInput
            inputValue={questionText}
            inputId={questionId}
            inputIndex={questionIndex}
            changed={(event: React.ChangeEvent<HTMLInputElement>) => changeQuestionText(event.target.value, questionId)}
          />
        </div>
        <DeleteSideButton
          externalClasses={classes.DeleteButton}
          clicked={() => deleteQuestion(questionId)}
        />
      </div>

      <div className={classes.AnswerBlock}>
        {/* TODO:create separate component for answer block */}
        {radioAnswersContent}
        <AddItemButton
          externalClasses={classes.AddButton}
          clicked={() => newRadioAnswer(questionId)}
          buttonText="Додати відповідь"
        />
      </div>
    </motion.div >
  )
}

export default React.memo(NewQuestion)
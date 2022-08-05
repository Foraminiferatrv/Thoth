import classes from './QuestionsEditContainer.module.scss'

import AddItemButton from '../../components/UI/AddItemButton/AddItemButton'
import NewQuestion from '../../components/NewQuestion/NewQuestion'

import comparator from '../../utils/comparator'

import { testEditorActions } from '../../store/reducers/tests/testEditor/testEditor'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { Question } from '../../types/types'
import { Reorder } from 'framer-motion'
import { ReorderItem } from '../../hoc/ReorderItem/ReorderItem'



function QuestionsEditContainer() {
  const { testQuestions, testScales } = useAppSelector((globalState) => globalState.tests.testEditorState)
  const dispatch = useAppDispatch()
  const {
    createNewQuestion,
    changeQuestionText,
    deleteQestion,
    addNewRadioAnswer,
    changeQuestionNumber,
    changeRadioAnswerText,
    deleteRadioAnswer,
    addDependency,
    changeAnswerValue,
    changeScaleDependency,
    deleteDependency,
  } = testEditorActions


  const dispatchWithAction = {  //creating dispatch functions with actions
    onCreateNewQuestion: () => dispatch(createNewQuestion()),
    onChangeQuestionText: (newQuestionText: string, targetQuestionId: string) => dispatch(changeQuestionText({ newQuestionText, targetQuestionId })),
    onChangeQuestionNumber: (newQuestionsArray: { [questionId: string]: Question }[]) => dispatch(changeQuestionNumber({ newQuestionsArray })),
    onDeleteQestion: (targetQuestionId: string) => dispatch(deleteQestion({ targetQuestionId })),
    onAddNewRadioAnswer: (targetQuestionId: string) => dispatch(addNewRadioAnswer({ targetQuestionId })),
    onChangeRadioAnswerText: (newAnswerText: string, targetQuestionId: string, answerId: string) => dispatch(changeRadioAnswerText({ newAnswerText, targetQuestionId, answerId })),
    onDeleteRadioAnswer: (targetQuestionId: string, answerId: string) => dispatch(deleteRadioAnswer({ targetQuestionId, answerId })),
    onAddDependency: (targetQuestionId: string, answerId: string) => dispatch(addDependency({ targetQuestionId, answerId })),
    onChangeAnswerValue: (targetQuestionId: string, answerId: string, depIndex: number, newValue: number) => dispatch(changeAnswerValue({ targetQuestionId, answerId, depIndex, newValue })),
    onChangeScaleDependency: ((targetQuestionId: string, answerId: string, depIndex: number, newValue: string) => dispatch(changeScaleDependency({ targetQuestionId, answerId, depIndex, newValue }))),
    onDeleteDependency: (targetQuestionId: string, answerId: string, depIndex: number) => dispatch(deleteDependency({ targetQuestionId, answerId, depIndex })),
  }

  const sortedQuestions = Object.entries(testQuestions).sort((elementA, elementB) => comparator(elementA[1].questionNumber, elementB[1].questionNumber))

  function qeustionCreator(testQuestionsArray: typeof sortedQuestions) { //create questions from sorted array
    if (testQuestionsArray !== undefined) {
      return (
        <Reorder.Group
          values={sortedQuestions}
          onReorder={(newOrder) => dispatchWithAction.onChangeQuestionNumber(newOrder)}
        >
          {testQuestionsArray.map((values, index) => {
            const [questionId, questionValues] = values // extracting scale id and scale data from the array

            return <ReorderItem
              value={values}
              key={questionId}
              as={'div'}
            >
              <NewQuestion
                questionIndex={index}
                changeQuestionText={dispatchWithAction.onChangeQuestionText}
                questionText={questionValues.questionText}
                questionId={questionId}
                deleteQuestion={dispatchWithAction.onDeleteQestion}
                radioAnswers={questionValues.questionRadioAnswers}
                newRadioAnswer={dispatchWithAction.onAddNewRadioAnswer}
                changeRadioAnswerText={dispatchWithAction.onChangeRadioAnswerText}
                deleteRadioAnswer={dispatchWithAction.onDeleteRadioAnswer}
                testScales={testScales}
                addDependency={dispatchWithAction.onAddDependency}
                changeAnswerValue={dispatchWithAction.onChangeAnswerValue}
                changeScaleDependency={dispatchWithAction.onChangeScaleDependency}
                deleteDependency={dispatchWithAction.onDeleteDependency}
              />
            </ReorderItem>
          })}
        </Reorder.Group>
      )

    }
    return null
  }


  return (
    <div className={classes.QuestionsEditContainer}>
      <div className={classes.ContainerHeader}>
        <span>Запитання</span>
      </div>
      <div className={classes.ContainerBody}>
        {qeustionCreator(sortedQuestions)}
        <AddItemButton
          externalClasses={classes.AddButton}
          buttonText="Додати запитання"
          clicked={dispatchWithAction.onCreateNewQuestion}
        />
      </div>
    </div>
  )
}

export default QuestionsEditContainer
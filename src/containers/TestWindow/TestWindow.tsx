import { useState } from 'react'

import classes from './TestWindow.module.scss'

import { withRouter, RouteComponentProps } from 'react-router-dom'

import QuestionPage from '../../components/QuestionPage/QuestionPage'
import { FormControl } from '@material-ui/core'
import Button from '@material-ui/core/Button'
// import AddItemButton from '../../components/UI/AddItemButton/AddItemButton'

import interpretator from './interpretator'

import { Test } from "../../types/types"

type PathParamsType = {
  testId: string,
}

type RouteProps = RouteComponentProps<PathParamsType> & { testsData: { [testId: string]: Test } }

function TestWindow({ testsData, match }: RouteProps) {
  const [testResults, setTestResults] = useState({})
  const [testCardIndex, setTestCardIndex] = useState(0)

  function setResult(questionId: string | number, answerId: string | number) {
    setTestResults({
      ...testResults,
      [questionId]: answerId
    })
  }

  function nextTextCard() {
    setTestCardIndex(testCardIndex + 1)
  }
  function prevTextCard() {
    setTestCardIndex(testCardIndex - 1)
  }

  const testsCards = Object.entries(testsData[match.params.testId].testQuestions).map(([questionId, questionData]) => <QuestionPage
    key={questionId}
    questionData={questionData}
    questionId={questionId}
    setResult={setResult}
    interpret={() => console.log(interpretator(testResults, testsData[match.params.testId].testQuestions, testsData[match.params.testId].testScales, testsData[match.params.testId].testInterpretations))}
  />)

  const nextButton = (testCardIndex === testsCards.length - 1 ?
    <Button onClick={() => console.log(interpretator(testResults, testsData[match.params.testId].testQuestions, testsData[match.params.testId].testScales, testsData[match.params.testId].testInterpretations))} color="primary" variant="contained">
      {"Завершити тест"}
    </Button>
    :
    <Button onClick={nextTextCard} color="primary" variant="contained">
      {"Далі >"}
    </Button>)

  const prevButton = (testCardIndex !== 0 ?
    <Button onClick={prevTextCard} variant={"contained"}>
      {"< Назад"}
    </Button>
    :
    <div></div>)


  return (
    <div className={classes.TestWindow}>
      <FormControl className={classes.FormControl}>
        {testsCards[testCardIndex]}
      </FormControl>
      <div className={classes.ButtonBlock}>
        {prevButton}
        {nextButton}
      </div>
    </div >
  )
}

export default withRouter(TestWindow)
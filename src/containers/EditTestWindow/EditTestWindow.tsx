import React, { useState } from 'react'

import classes from './EditTestWindow.module.scss'

import { v1 as uuidv1 } from 'uuid'

import { connect } from 'react-redux'
import {
  addTestName,
  sendTestData
} from '../../store/actions/index'

import { withRouter } from 'react-router'

import EditableInput from '../../components/UI/EditableInput/EditableInput'
import InterpretsContainer from '../InterpretsContainer/InterpretsContainer'
import ScalesEditContainer from '../ScalesEditContainer/ScalesEditContainer'
import QuestionsEditContainer from '../QuestionsEditContainer/QuestionsEditContainer'
import { BrowserRouterProps } from 'react-router-dom'
import { Test } from '../../types/types'

type Props = {
  match: BrowserRouterProps,
  testEditorState: Test,

}


//TODO: destructure all props

function EditTestWindow(props) {
  const [testId] = useState(props.match.params.editTestId === undefined || props.match.params.editTestId === null ? uuidv1() : props.match.params.editTestId)
  return (
    <form className={classes.EditTestWindow}>

      <div className={classes.TestName}>
        <div className={classes.ContainerHeader}>
          <span > Назва методики:</span>
        </div>
        <div className={classes.ContainerBody}>
          <EditableInput
            inputValue={props.testEditorState.testName}
            changed={(event) => props.onAddTestName(event.target.value)}
          />
        </div>
      </div>
      <ScalesEditContainer />
      <QuestionsEditContainer />
      <InterpretsContainer
        interprets={props.testEditorState.testInterpretations}
        testScales={props.testEditorState.testScales}
      />

      {/* TODO: Replace the submit button */}
      <button onClick={() => props.onSendTestData({ testData: props.testEditorState, testId })} type="button">temp submit'</button>
    </form>
  )
}

function mapStateToProps(state) {
  return {
    testEditorState: state.testEditorState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTestName: (testNameValue) => dispatch(addTestName(testNameValue)),
    onSendTestData: (testData, testId) => dispatch(sendTestData(testData, testId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(React.memo(EditTestWindow)))
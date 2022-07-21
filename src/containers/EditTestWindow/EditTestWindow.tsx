import React, { ChangeEvent, SyntheticEvent, useState } from 'react'

import classes from './EditTestWindow.module.scss'

import { v1 as uuidv1 } from 'uuid'

import { addTestName, sendTestData } from '../../store/actions/index'

import { withRouter } from 'react-router'

import EditableInput from '../../components/UI/EditableInput/EditableInput'
import InterpretsContainer from '../InterpretsContainer/InterpretsContainer'
import ScalesEditContainer from '../ScalesEditContainer/ScalesEditContainer'
import QuestionsEditContainer from '../QuestionsEditContainer/QuestionsEditContainer'

import { RouteComponentProps } from 'react-router'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'

import { postTest } from '../../store/reducers/tests/tests'
import { changeTestName } from '../../store/reducers/tests/testEditor/testEditor'

interface MatchParams {
  editTestId: string
}

interface Props extends RouteComponentProps<MatchParams> {

}


//FIXME: storage updates with every single keystroke

function EditTestWindow({ match }: Props) {
  const testEditorState = useAppSelector((globalState) => globalState.tests.testEdiorState)
  const dispatch = useAppDispatch()

  const [testId] = useState(match.params.editTestId === undefined || match.params.editTestId === null ? uuidv1() : match.params.editTestId)
  return (
    <form className={classes.EditTestWindow}>

      <div className={classes.TestName}>
        <div className={classes.ContainerHeader}>
          <span > Назва методики:</span>
        </div>
        <div className={classes.ContainerBody}>
          <EditableInput
            inputValue={testEditorState.testName}
            changed={(event: ChangeEvent<HTMLInputElement>) => changeTestName(event.target.value)}
          />
        </div>
      </div>
      <ScalesEditContainer />
      <QuestionsEditContainer />
      <InterpretsContainer
        interprets={testEditorState.testInterpretations}
        testScales={testEditorState.testScales}
      />

      {/* TODO: Replace the submit button */}
      <button onClick={() => dispatch(postTest({ testData: testEditorState, testId }))} type="button">temp submit'</button>
    </form>
  )
}

export default withRouter(React.memo(EditTestWindow))
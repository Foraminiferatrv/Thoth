import classes from './TestEditSelector.module.css'

import TestCard from '../../components/TestCard/TestCard'
import NewTestCard from '../../components/NewTestCard/NewTestCard'

import { useAppDispatch } from '../../hooks/reduxHooks'
import { setTestEditorData, createNewTest } from '../../store/reducers/tests/testEditor/testEditor'

import { Tests } from '../../types/types'


function TestEditSelector({ testsData }: { testsData: Tests }) {
  const dispatch = useAppDispatch()

  return (
    <div className={classes.TestEditSelector}>
      < NewTestCard
        clicked={() => dispatch(createNewTest)}
      />
      {
        Object.entries(testsData).map(([testId, testData], index) => <TestCard
          key={'testTag' + index}
          testName={testData.testName}
          testAdress={`/testEdit/${testId}`}
          clicked={() => dispatch(setTestEditorData(testData))}
        />)
      }
    </div>
  )
}


export default TestEditSelector
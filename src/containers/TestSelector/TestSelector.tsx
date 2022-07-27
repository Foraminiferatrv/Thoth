import classes from './TestSelector.module.css'

import TestCard from '../../components/TestCard/TestCard'
import EditTag from '../../components/UI/EditTag/EditTag'
import { Tests } from '../../types/types'


function TestSelector({ testsData }: { testsData: Tests }) {

  return (
    <div className={classes.TestSelector}>
      {
        Object.entries(testsData).map(([testId, testData], index) => <TestCard
          key={'testTag' + index}
          testName={testData.testName}
          testAdress={`/test/${testId}`}
        />)
      }
      <EditTag />
    </div>
  )
}

export default TestSelector
import { useEffect } from 'react'

import classes from './App.module.css'

import { Route, Switch } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks"

import EditTestWindow from './containers/EditTestWindow/EditTestWindow'
import TestWindow from './containers/TestWindow/TestWindow'
import TestSelector from './containers/TestSelector/TestSelector'
import TestEditSelector from './containers/TestEditSelector/TestEditSelector'

import { fetchTests } from './store/reducers/tests/tests'


function App() {
  const testsData = useAppSelector((globalState) => globalState.tests.testsData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTests())
  }, [dispatch])

  return (
    <div className={classes.App}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <TestSelector testsData={testsData} />}
        />
        <Route
          exact
          path="/selectTestsEdit"
          component={() => <TestEditSelector testsData={testsData} />}
        />
        <Route
          exact
          path="/testEdit/newTest"
          component={() => <EditTestWindow />}
        />
        <Route
          exact
          path="/testEdit/:editTestId"
          component={() => <EditTestWindow />}
        />
        <Route
          exact
          path="/test/:testId"
          component={() => <TestWindow testsData={testsData} />}
        />
        {/* <Redirect from="/" to="/" /> */}
      </Switch>
    </div>
  )
}


export default App

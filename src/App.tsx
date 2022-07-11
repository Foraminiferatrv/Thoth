import { useEffect } from 'react';

import classes from './App.module.css';

import { Route, Switch } from 'react-router-dom';

import { connect, ConnectedProps } from 'react-redux';

import EditTestWindow from './containers/EditTestWindow/EditTestWindow';
import TestWindow from './containers/TestWindow/TestWindow';
import TestSelector from './containers/TestSelector/TestSelector';
import TestEditSelector from './containers/TestEditSelector/TestEditSelector';

import { initTests } from './store/actions/app';
import { Dispatch } from 'redux';


type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps & {
  appState: {},
  onInitTests: () => {}
}


function mapStateToProps(state: { appState: {} }) {
  return {
    appState: state.appState
  }
}

function mapDispatchToProps(dispatch: Dispatch<>) {
  return {
    onInitTests: () => dispatch(initTests())
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)



function App({ appState, onInitTests }: Props) {

  useEffect(() => {
    onInitTests();
  }, [onInitTests]);

  return (
    <div className={classes.App}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <TestSelector testsData={appState.testsData} />}
        />
        <Route
          exact
          path="/selectTestsEdit"
          component={() => <TestEditSelector testsData={appState.testsData} />}
        />
        <Route
          exact
          path="/testEdit/newTest"
          component={() => <EditTestWindow />}
        />
        <Route
          exact
          path='/testEdit/:editTestId'
          component={() => <EditTestWindow />}
        />
        <Route
          exact
          path="/test/:testId"
          component={() => <TestWindow testsData={appState.testsData} />}
        />
        {/* <Redirect from="/" to="/" /> */}
      </Switch>
    </div>
  );
}


export default connector(App);

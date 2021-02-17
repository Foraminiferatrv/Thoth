import { useEffect } from 'react';

import classes from './App.module.css';

import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import EditTestWindow from './containers/EditTestWindow/EditTestWindow';
import TestWindow from './containers/TestWindow/TestWindow';
import TestSelector from './containers/TestSelector/TestSelector';
import TestEditSelector from './containers/TestEditSelector/TestEditSelector';

import { initTests } from './store/actions/app';


function App( { appState, onInitTests } ) {

  useEffect( () => {
    onInitTests();
  }, [onInitTests] );

  return (
    <div className={ classes.App }>
      <Switch>
        <Route
          exact
          path="/"
          component={ () => <TestSelector testsData={ appState.testsData } /> }
        />
        <Route
          exact
          path="/selectTestsEdit"
          component={ () => <TestEditSelector testsData={ appState.testsData } /> }
        />
        <Route
          exact
          path="/testEdit/newTest"
          component={ () => <EditTestWindow /> }
        />
        <Route
          exact
          path='/testEdit/:editTestId'
          component={ () => <EditTestWindow/> }
        />
        <Route
          exact
          path="/test/:testId"
          component={ () => <TestWindow testsData={ appState.testsData } /> }
        />
        {/* <Redirect from="/" to="/" /> */ }
      </Switch>
    </div>
  );
}

function mapStateToProps( state ) {
  return {
    appState: state.appState
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onInitTests: () => dispatch( initTests() )
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( App  );

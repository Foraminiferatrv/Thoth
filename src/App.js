import { useEffect } from 'react';

import classes from './App.module.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Sidebar from './containers/Sidebar/Sidebar';
import CreateTestWindow from './containers/CreateTestWindow/CreateTestWindow';
import TestWindow from './containers/TestWindow/TestWindow';

import { initTests } from './store/actions/app';


function App( { appState, onInitTests, match, ...rest } ) {
  console.log( match );

  useEffect( () => {
    onInitTests();
  }, [onInitTests] );

  return (
    <div className={ classes.App }>
      <Sidebar
        testsData={ appState.testsData }
      />

      <Switch>
        <Route
          exact
          path="/createNewTest"
          component={ () => <CreateTestWindow /> }
        />

        <Route
          path={ '/test/:testId' }
          component={ () => <TestWindow testsData={ appState.testsData } /> }
        />
        <Redirect  from="/" to="/" />
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


export default connect( mapStateToProps, mapDispatchToProps )( App );

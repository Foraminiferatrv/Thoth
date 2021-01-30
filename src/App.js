import { useEffect } from 'react';

import classes from './App.module.css';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Sidebar from './containers/Sidebar/Sidebar';
import CreateTestWindow from './containers/CreateTestWindow/CreateTestWindow';

import { initTests } from './store/actions/app';


function App( props ) {
  console.log( props.appState )

  useEffect( () => {
    props.onInitTests();
  } );

  return (
    <div className={ classes.App }>
      <Sidebar />

      <Switch>
        <Route
          exact
          path="/createNewTest"
          component={ () => <CreateTestWindow /> }
        />
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

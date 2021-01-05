import classes from './App.module.css';

import Sidebar from './containers/Sidebar/Sidebar';
import CreateTestWindow from './containers/CreateTestWindow/CreateTestWindow';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className={ classes.App }>
      <Sidebar />

      {/*
      <TestWindow >
        <TestName/>

        <QuestionContainer>
          <QuestionTitle/>
          <Answer/>
          <Answer/>
          <Answer/>
          <Answer/>
        </QuestionContainer>

        <ButtonBack/>
        <ButtonNext/>
      </TestWindow> 
    */}

      <Switch>
        <Route
          exact
          path="/createNewTest"
          component={ () => <CreateTestWindow /> }
        >

        </Route>
      </Switch>

    </div>
  );
}

export default App;

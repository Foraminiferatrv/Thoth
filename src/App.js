import classes from './App.module.css';

import { Sidebar } from './containers/Sidebar/Sidebar';
import {CreateTestWindow} from './containers/CreateTestWindow/CreateTestWindow';

function App() {
  return (
    <div className={classes.App}>

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
      <CreateTestWindow />


    </div>
  );
}

export default App;

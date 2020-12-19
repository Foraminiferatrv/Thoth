import React, { useState } from 'react';

import classes from './CreateTestWindow.module.css';

import { Input } from '../../components/UI/Input/Input';
import { NewQuestion } from '../../components/NewQuestion/NewQuestion';

function CreateTestWindow( props ) {

  const [testData, setTestData] = useState( {
    testName: "",
    testId: "",
    testScales: {
      "scaleId": {
        scaleName: "",
        scaleValue: 0
      }
    },
    testQuestions: [{
      questionText: "",
      scaleDependencies: [
        {
          scaleId: "",
          questionValue: "-1"
        }
      ]
    }]
  } );

  return (
    <div className={ classes.CreateTestWindow }>
      <Input inputtype={ 'input' } type={ 'text' } inputlabel={ "Назва тесту" } />
      <Input inputtype={ 'input' } inputlabel={ "Назва шкали" } />

      <NewQuestion questionText={"Запитання?"} />


    </div>
  );
}

export { CreateTestWindow };
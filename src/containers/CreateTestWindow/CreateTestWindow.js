import React from 'react';

import classes from './CreateTestWindow.module.css';

import { connect } from 'react-redux';

import {
  addTestName,
  changeScaleName,
  createNewScale,
  deleteScale
} from '../../store/actions/index';

import { Input } from '../../components/UI/Input/Input';
import ScaleInput from '../../components/ScaleInput/ScaleInput';
// import { NewQuestion } from '../../components/NewQuestion/NewQuestion';
import AddIttemButton from '../../components/UI/AddIttemButton/AddIttemButton';
// import {NewRadioAnswer} from '../../components/NewRadioAnswer/NewRadioAnswer';

// // {
//     testName: " ",
//     testId: uuidv4(),
//     testScales: [ {
//       scaleId: '',
//       scaleName: "",
//       scaleValue: 0
//     } ],
//     testQuestions: [ {
//       questionNumber: null,
//       questionText: "",
//       scaleDependencies: [ {
//         scaleId: "",
//         questionValue: "-1"
//       } ]
//     } ]
//   }


function CreateTestWindow( props ) {

  function scaleCreator( testScalesArray ) {
    if ( testScalesArray !== undefined ) {
      return testScalesArray.map( ( scaleDataObject) => (

        <ScaleInput
          inputId={ scaleDataObject.scaleId }
          scaleName={ scaleDataObject.scaleName }
          key={ scaleDataObject.scaleId }
          changed={ props.onChangeScaleName }
          deleted={ props.onDeleteScale }
        />
      )
      );
    }
    return null;
  }


  // input allways updates element - needs fixing
  return (
    <form className={ classes.CreateTestWindow }>
      <span>{ props.newTestData.testName }</span>
      <Input
        inputtype={ 'input' }
        type={ 'text' }
        inputlabel={ "Назва тесту" }
        onChange={ ( event ) => props.onAddTestName( event.target.value ) }
      />
      <div className={ classes.ScalesField }>
        <AddIttemButton buttonText="Додати шкалу" clicked={ props.onCreateScale } />
        { scaleCreator( props.newTestData.testScales ) }
      </div>
      <div className={ classes.QuestionsField }>
        <AddIttemButton buttonText="Додати запитання" />
        {/* const question = <NewQuestion questionText={ "Запитання?" } />; */ }
      </div>
    </form>
  );
}

function mapStateToProps( state ) {
  return {
    newTestData: state.newTestData
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onAddTestName: ( testNameValue ) => dispatch( addTestName( testNameValue ) ),
    onCreateScale: () => dispatch( createNewScale() ),
    onChangeScaleName: ( scaleNameValue, scaleId ) => dispatch( changeScaleName( scaleNameValue, scaleId ) ),
    onDeleteScale: ( scaleId ) => dispatch( deleteScale( scaleId ) )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CreateTestWindow );
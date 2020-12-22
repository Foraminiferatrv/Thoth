import React from 'react';

import classes from './CreateTestWindow.module.css';

import { connect } from 'react-redux';

import { addTestName } from '../../store/actions/index';

import { Input } from '../../components/UI/Input/Input';
import { NewQuestion } from '../../components/NewQuestion/NewQuestion';

function CreateTestWindow( props ) {
  console.log( props )
  return (
    <div className={ classes.CreateTestWindow }>
      <span>{ props.newTestData.testName }</span>
      <Input
        inputtype={ 'input' }
        type={ 'text' }
        inputlabel={ "Назва тесту"
        } onChange={ ( event ) => props.onAddTestName( event.target.value ) }
      />
      <Input inputtype={ 'input' } inputlabel={ "Назва шкали" } />

      <NewQuestion questionText={ "Запитання?" } />
    </div>
  );
}

function mapStateToProps( state ) {
  return {
    newTestData: state.newTestData
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onAddTestName: ( testNameValue ) => dispatch( addTestName( testNameValue ) )
  }
}
export default connect( mapStateToProps, mapDispatchToProps )( CreateTestWindow );
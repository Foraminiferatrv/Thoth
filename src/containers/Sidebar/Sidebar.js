import React from 'react';

import classes from './Sidebar.module.css';

import { connect } from 'react-redux';

import { createNewTest } from '../../store/actions/index';

import { TestTag } from '../../components/TestTag/TestTag';
import NewTestTag from '../../components/NewTestTag/NewTestTag';

// import { Link } from 'react-router-dom';

function Sidebar( props ) {
  return (
    <div className={ classes.Sidebar }>

      <NewTestTag addNewTest={ props.onCreateNewTest } />
      <TestTag testName='Test 1' />
    </div>
  );
}

function mapStateToProps( state ) {
  return {
    newTestObject: state.testCreator
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onCreateNewTest: () => dispatch( createNewTest() )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Sidebar );
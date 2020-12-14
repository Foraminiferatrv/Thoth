import React from 'react';

import classes from './Sidebar.module.css';

import { TestTag } from '../../components/TestTag/TestTag';
import { NewTestTag } from '../../components/NewTestTag/NewTestTag';

function Sidebar() {
  return (
    <div className={ classes.Sidebar }>
      <NewTestTag addNewTest={ () => { console.log('new test')} } />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 1' />
      <TestTag testName='Test 2' />
    </div>
  );
}

export {
  Sidebar
};
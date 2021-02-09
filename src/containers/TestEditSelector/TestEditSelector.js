import classes from './TestEditSelector.module.css';

import { connect } from 'react-redux';
import { createNewTest } from '../../store/actions/index';

import TestCard from '../../components/TestCard/TestCard';


function TestEditSelector( { testsData, onCreateNewTest } ) {
  return (
    <div className={ classes.TestEditSelector }>
      <TestCard testName='+Додати нову методику+'
        clicked={ onCreateNewTest }
      />
      {
        Object.entries( testsData ).map( ( [testId, testData], index ) => <TestCard
          key={ 'testTag' + index }
          testName={ testData.testName }
          testAdress={ testId }
        /> )
      }
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

export default connect( mapStateToProps, mapDispatchToProps )( TestEditSelector );
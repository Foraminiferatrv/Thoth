import classes from './TestEditSelector.module.css';

import { connect } from 'react-redux';
import { createNewTest } from '../../store/actions/testEditor';
import { setTestEditorData } from '../../store/actions/index';

import TestCard from '../../components/TestCard/TestCard';
import NewTestCard from '../../components/NewTestCard/NewTestCard';


function TestEditSelector( { testsData, onCreateNewTest, onSetTestEditorData } ) {
  return (
    <div className={ classes.TestEditSelector }>
      < NewTestCard
        clicked={ onCreateNewTest }
      />
      {
        Object.entries( testsData ).map( ( [testId, testData], index ) => <TestCard
          key={ 'testTag' + index }
          testName={ testData.testName }
          testAdress={ `/testEdit/${testId}` }
          clicked={ () => onSetTestEditorData( testData ) }
        /> )
      }
    </div>
  );
}

function mapStateToProps( state ) {
  return {
    newTestObject: state.testCreator,
    appState: state.appState
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onCreateNewTest: () => dispatch( createNewTest() ),
    onSetTestEditorData: ( testData ) => dispatch( setTestEditorData( testData ) )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( TestEditSelector );
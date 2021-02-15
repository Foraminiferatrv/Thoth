import classes from './TestSelector.module.css';

import TestCard from '../../components/TestCard/TestCard';
import EditTag from '../../components/UI/EditTag/EditTag';


function TestSelector( { testsData } ) {
  return (
    <div className={ classes.TestSelector }>
      {
        Object.entries( testsData ).map( ( [testId, testData], index ) => <TestCard
          key={ 'testTag' + index }
          testName={ testData.testName }
          testAdress={ testId }
        /> )
      }
      <EditTag />
    </div>
  );
}

export default TestSelector;
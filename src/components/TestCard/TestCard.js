import classes from './TestCard.module.css';

import { Link } from 'react-router-dom';


function TestCard( { testAdress, testName } ) {
  return (
    <Link
      to={ '/test/' + testAdress }
      className={ classes.TestCard }
    >
      { testName }
    </Link>
  );
}

export default TestCard;
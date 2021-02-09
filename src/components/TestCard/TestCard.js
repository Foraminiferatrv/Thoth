import classes from './TestCard.module.css';

import { Link } from 'react-router-dom';


function TestCard( { testAdress, testName, clicked } ) {
  return (
    <Link
      to={ '/test/' + testAdress }
      className={ classes.TestCard }
      onClick={ clicked }
    >
      { testName }
    </Link>
  );
}

export default TestCard;
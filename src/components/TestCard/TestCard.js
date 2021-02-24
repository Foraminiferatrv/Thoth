import classes from './TestCard.module.css';

import { Link } from 'react-router-dom';


function TestCard({ testAdress, testName, clicked }) {
  return (
    <div
      className={classes.Container}
      onClick={clicked}
    >
      <Link
        to={testAdress}
        className={classes.TestCard}
      >
        {testName}
      </Link>
    </div>
  );
}

export default TestCard;
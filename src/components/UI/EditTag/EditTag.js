import classes from './EditTag.module.css';

import { Link } from 'react-router-dom';


function EditTag( { clicked } ) {
  return (
    <Link
      className={ classes.EditTag }
      to="/selectTestsEdit"
    >
    </Link>
  );
}

export default EditTag;
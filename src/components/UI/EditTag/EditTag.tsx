import classes from './EditTag.module.scss';

import { Link } from 'react-router-dom';


function EditTag() {
  return (
    <Link
      className={classes.EditTag}
      to="/selectTestsEdit"
    >
    </Link>
  );
}

export default EditTag;
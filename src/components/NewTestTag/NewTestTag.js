import React from 'react';

import classes from './NewTestTag.module.css';

import { Link } from 'react-router-dom'

function NewTestTag( props ) {
  return (
    <Link to="/createNewTest"
      className={ classes.NewTestTag }
      onClick={ props.addNewTest }
    >
      Додати Методику
    </Link>
  );
}

export default NewTestTag;
import React from 'react';

import classes from './NewTestTag.module.css';

function NewTestTag( props ) {
  return (
    <div
      className={ classes.NewTestTag }
      onClick={ props.addNewTest }
    >
      <span >Додати Методику</span>
    </div>
  );
}

export default NewTestTag;
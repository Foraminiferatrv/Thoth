import React from 'react';

import classes from './EditButton.module.css';

function EditButton( props ) {
  return (
    <div className={ classes.EditButton } onClick={ props.clicked }> </div>
  );
}

export default EditButton;
import React from 'react';

import classes from './EditButton.module.css';
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";


function EditButton( { clicked } ) {
  return (
    <Fab
      onClick={ clicked }
      size='small'
      className={ classes.EditButton }
    >
      <EditIcon />
    </Fab >
  );
}

export default EditButton;
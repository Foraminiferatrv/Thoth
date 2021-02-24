import React from 'react';

import classes from './EditButton.module.css';
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";


function EditButton( props ) {
  return (
    // <div className={ classes.EditButton } onClick={ props.clicked }> </div>
    <Fab
      onClick={ props.clicked }
      size='small'
      className={ classes.EditButton }
    >
      <EditIcon />
    </Fab >
  );
}

export default EditButton;
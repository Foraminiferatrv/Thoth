import React from "react";

import classes from './DeleteSideButton.module.scss';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function DeleteSideButton( { clicked } ) {
  return (
    <div
      className={ classes.DeleteSideButton }
      onClick={ clicked }
    >
      <DeleteForeverIcon
        fontSize='large'
      />
    </div>
  );
}


export default DeleteSideButton;
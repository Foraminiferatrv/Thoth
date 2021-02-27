import React from "react";

import classes from './DeleteSideButton.module.scss';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function DeleteSideButton( { clicked, externalClasses } ) {
  const combinedClasses = [classes.DeleteSideButton, externalClasses];

  return (
    <div
      className={ combinedClasses.join( ' ' ) }
      onClick={ clicked }
    >
      <DeleteForeverIcon
        fontSize='large'
      />
    </div>
  );
}


export default DeleteSideButton;
import React from "react";

import classes from './AddItemButton.module.scss';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function AddIttemButton( { clicked, buttonText, externalClasses } ) {
  const combinedClasses = [classes.AddItemButton, externalClasses];
  return (
    <div
      className={ combinedClasses.join( ' ' ) }
      onClick={ clicked }
    >
      <AddCircleIcon />
      <span className={ classes.ButtonText }>{ buttonText }</span>
    </div  >
  );
}

export default AddIttemButton;
import { React } from "react";

import classes from './AddItemButton.module.css';


function AddIttemButton( { clicked, buttonText, externalClasses } ) {
  const combinedClasses = [classes.AddItemButton, externalClasses];
  return (
    <button
      type='button'
      className={ combinedClasses.join(' ') }
      onClick={ clicked }
    >
      <span>{ buttonText }</span>
    </button  >
  );
}

export default AddIttemButton;
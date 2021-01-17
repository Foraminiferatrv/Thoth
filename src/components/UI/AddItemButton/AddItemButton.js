import { React } from "react";

import classes from './AddItemButton.module.css';


function addIttemButton( props ) {
  return (
    <button
      type='button'
      className={ classes.AddItemButton }
      onClick={ props.clicked }
    >
      <span>{ props.buttonText }</span>
    </button  >
  );
}

export default addIttemButton;
import { React } from "react";

import classes from './AddIttemButton.module.css';


function addIttemButton( props ) {
  return (
    <button
      type='button'
      className={ classes.AddIttemButton }
      onClick={ props.cliked }
    >
      <span>{ props.buttonText }</span>
    </button  >
  );
}

export default addIttemButton;
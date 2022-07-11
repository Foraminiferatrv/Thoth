import React from 'react';

import classes from './CheckButton.module.scss';

import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Check";

interface Props {
  clicked: React.MouseEventHandler
}


function CheckButton({ clicked }: Props): JSX.Element {
  return (
    // <div className={ classes.CheckButton } onClick={ props.clicked }> </div>
    <Fab
      onClick={clicked}
      size='small'
      className={classes.CheckButton}
    >
      <EditIcon />
    </Fab >
  );
}

export default CheckButton;
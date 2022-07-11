import React from "react";

import classes from './DeleteSideButton.module.scss';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

interface Props {
  externalClasses: string,
  clicked: React.MouseEventHandler
}

function DeleteSideButton({ clicked, externalClasses }: Props) {
  const combinedClasses = [classes.DeleteSideButton, externalClasses];

  return (
    <div
      className={combinedClasses.join(' ')}
      onClick={clicked}
    >
      <DeleteForeverIcon
        fontSize='large'
      />
    </div>
  );
}


export default DeleteSideButton;
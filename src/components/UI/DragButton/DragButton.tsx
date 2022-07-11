import classes from './DragButton.module.scss';

import MoreVertIcon from '@material-ui/icons/MoreVert';


function DragButton() {
  return (
    <div className={classes.DragButton}>
      <MoreVertIcon fontSize='large' />
    </div>
  );
}

export default DragButton;
import classes from './EditButton.module.scss';
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

interface Props {
  clicked: React.MouseEventHandler
}

function EditButton({ clicked }: Props): JSX.Element {
  return (
    <Fab
      onClick={clicked}
      size='small'
      className={classes.EditButton}
    >
      <EditIcon />
    </Fab >
  );
}

export default EditButton;
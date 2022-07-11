import classes from './AddItemButton.module.scss';
import AddCircleIcon from '@material-ui/icons/AddCircle';


interface Props {
  clicked: React.MouseEventHandler,
  buttonText: string,
  externalClasses: string
}

function AddIttemButton({ clicked, buttonText, externalClasses }: Props): JSX.Element {
  const combinedClasses = [classes.AddItemButton, externalClasses];
  return (
    <div
      className={combinedClasses.join(' ')}
      onClick={clicked}
    >
      <AddCircleIcon />
      <span className={classes.ButtonText}>{buttonText}</span>
    </div  >
  );
}

export default AddIttemButton;
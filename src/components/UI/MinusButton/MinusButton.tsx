import classes from './MinusButton.module.scss';


interface Props {
  clicked: React.MouseEventHandler
}


const MinusButton = ({ clicked }: Props) => (

  <button type={'button'} className={classes.MinusButton} onClick={clicked}>
    -
  </button>

);

export { MinusButton };
import classes from './PlusButton.module.scss';

interface Props {
  testAdress: string,
  testName: string,
  clicked: React.MouseEventHandler
}

const PlusButton = ({ clicked }: Props) => (

  <button type={'button'} className={classes.PlusButton} onClick={clicked}>
    +
  </button>

);

export { PlusButton };
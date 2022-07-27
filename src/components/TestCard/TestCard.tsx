import classes from './TestCard.module.scss'

import { Link } from 'react-router-dom'


interface Props {
  testAdress: string,
  testName: string | number,
  clicked?: React.MouseEventHandler
}


function TestCard({ testAdress, testName, clicked }: Props): JSX.Element {
  return (
    <div
      className={classes.Container}
      onClick={clicked}
    >
      <Link
        to={testAdress}
        className={classes.TestCard}
      >
        {testName}
      </Link>
    </div>
  )
}

export default TestCard
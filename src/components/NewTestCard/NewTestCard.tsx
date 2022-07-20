import classes from './NewTestCard.module.css'

import { Link } from 'react-router-dom'

function NewTestCard({ clicked }: { clicked: () => {} }) {
  return (
    <Link className={classes.NewTestCard}
      onClick={clicked}
      to={'/testEdit/newTest'}
    >
      <div className={classes.PlusButton}></div>
    </Link>
  )
}

export default NewTestCard
import classes from './DragButton.module.scss'

import React from 'react'


function DragButton({ onPointerDown }: { onPointerDown: React.PointerEventHandler }) {
  return (
    <div className={classes.DragButton} onPointerDown={onPointerDown}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="29px"
        height="35px" viewBox="0 0 29 62.09">
        <defs>
        </defs>
        <g>
          <g>
            <circle cx="5.5" cy="5" r="5" />
          </g>
          <g>
            <circle cx="24" cy="5.09" r="5" />
          </g>
          <g>
            <circle cx="24" cy="30.09" r="5" />
          </g>
          <g>
            <circle cx="24" cy="57.09" r="5" />
          </g>
          <g>
            <circle cx="5" cy="57.09" r="5" />
          </g>
          <g>
            <circle cx="5" cy="30.09" r="5" />
          </g>
        </g>
      </svg>


    </div >
  )
}

export default DragButton
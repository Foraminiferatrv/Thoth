import React, { ReactHTML } from 'react'
import { Reorder, useDragControls } from 'framer-motion'

interface Props {
  children: JSX.Element,
  value: any,
  as: keyof ReactHTML | undefined
}

function ReorderItem({ children, value, as }: Props) {
  const controls = useDragControls()
  const clonedChildren = React.cloneElement(children, { dragControls: controls })

  return (
    <Reorder.Item
      value={value}
      as={as}
      dragControls={controls}
      dragListener={false}
    >
      {clonedChildren}
    </Reorder.Item>
  )
}

export { ReorderItem }
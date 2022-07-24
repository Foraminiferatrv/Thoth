import {
  useState,
  useRef
} from "react"

import {
  clamp,
  distance
} from "popmotion"

import arrayMove from "array-move"

type Offset = {
  top: number,
  height: number
}


export function usePositionReorder<T>(initialState: T[], storeUpdate: (order: any[]) => void):
  [
    T[],
    (i: number, offset: Offset) => void,
    (i: number, dragOffset: number) => void,
    (newOrder: T[]) => void
  ] {
  const [order, setOrder] = useState(initialState)

  const refreshOrder = (newOrder: T[]) => (
    setOrder(newOrder)
  )

  // We need to collect an array of height and position data for all of this component's
  // `Item` children, so we can later us that in calculations to decide when a dragging
  // `Item` should swap places with its siblings.
  const positions = useRef<{ top: number, height: number }[]>([]).current
  const updatePosition = (i: number, offset: Offset) => (positions[i] = offset)

  // Find the ideal index for a dragging item based on its position in the array, and its
  // current drag offset. If it's different to its current index, we swap this item with that
  // sibling.
  const updateOrder = (i: number, dragOffset: number) => {
    const targetIndex = findIndex(i, dragOffset, positions)
    if (targetIndex !== i) {
      storeUpdate(arrayMove<T>(order, i, targetIndex))
      setOrder(arrayMove<T>(order, i, targetIndex))
    };
  }
  return [order, updatePosition, updateOrder, refreshOrder]
}

const buffer = 30

export const findIndex = (i: number, yOffset: number, positions: Offset[]) => {
  let target = i
  const {
    top,
    height
  } = positions[i]
  const bottom = top + height

  // If moving down
  if (yOffset > 0) {
    const nextItem = positions[i + 1]
    if (nextItem === undefined) return i

    const swapOffset =
      distance(bottom, nextItem.top + nextItem.height / 2) + buffer
    if (yOffset > swapOffset) target = i + 1

    // If moving up
  } else if (yOffset < 0) {
    const prevItem = positions[i - 1]
    if (prevItem === undefined) return i

    const prevBottom = prevItem.top + prevItem.height
    const swapOffset = distance(top, prevBottom - prevItem.height / 2) + buffer
    if (yOffset < -swapOffset) target = i - 1
  }

  return clamp(0, positions.length, target)
}
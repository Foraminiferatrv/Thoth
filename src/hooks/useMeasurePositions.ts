import {
  useEffect,
  useRef
} from "react"

type Offset = {
  top: number,
  height: number
}

type RefOffset = {
  offsetHeight: number,
  offsetTop: number
}

export function useMeasurePositions(update: (offset: Offset) => void) {
  const ref = useRef<RefOffset>(null)

  useEffect(() => {
    update({
      height: ref.current!.offsetHeight,
      top: ref.current!.offsetTop
    })
  })

  return ref
}
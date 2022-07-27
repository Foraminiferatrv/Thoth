import { useCallback, useEffect, useMemo } from 'react'

import classes from './ScalesEditContainer.module.scss'

import { usePositionReorder } from '../../hooks/usePositionReorder'

import AddItemButton from '../../components/UI/AddItemButton/AddItemButton'
import ScaleEditor from '../../components/ScaleEditor/ScaleEditor'

import comparator from '../../utils/comparator'

import { testEditorActions } from '../../store/reducers/tests/testEditor/testEditor'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'


function ScalesEditContainer() {
  const testScales = useAppSelector((globalState) => globalState.tests.testEditorState.testScales)
  const dispatch = useAppDispatch()
  const {
    changeScaleName,
    createNewScale,
    changeScaleNumber,
    deleteScale
  } = testEditorActions

  const dispatchWithAction = {  //creating dispatch functions with actions
    onCreateScale: () => dispatch(createNewScale()),
    onChangeScaleName: (scaleName: string, targetScaleId: string) => dispatch(changeScaleName({ scaleName, targetScaleId })),
    onChangeScaleNumber: (newScalesArray: any[]) => dispatch(changeScaleNumber({ newScalesArray })),
    onDeleteScale: (targetScaleId: string) => dispatch(deleteScale({ targetScaleId }))
  }

  const sortedScales = useMemo(() => Object.entries(testScales).sort((elementA, elementB) => comparator(elementA[1].scaleNumber, elementB[1].scaleNumber)), [testScales])

  const [order, updatePosition, updateOrder, refreshOrder] = usePositionReorder(sortedScales, (newScalesArray) => dispatchWithAction.onChangeScaleNumber(newScalesArray))
  const memoizedRefreshOrder = useCallback((sortedScales: any[]) => refreshOrder(sortedScales), [refreshOrder])

  useEffect(() => (memoizedRefreshOrder(sortedScales)), [testScales, memoizedRefreshOrder, sortedScales])

  function scaleCreator(scalesArray: typeof order) {
    if (scalesArray !== undefined) {
      return order.map(([scaleId, values], index) => (
        <ScaleEditor
          updateOrder={updateOrder}
          updatePosition={updatePosition}
          index={index}
          key={scaleId}
          scaleNumber={values.scaleNumber}
          scaleName={values.scaleName}
          changeScaleName={dispatchWithAction.onChangeScaleName}
          scaleId={scaleId}
          deleteScale={dispatchWithAction.onDeleteScale}
        />
      ))
    }
    return null
  }

  return (
    <div className={classes.ScalesEditContainer}>
      <div className={classes.ContainerHeader}>
        <span>Шкали</span>
      </div>
      <div className={classes.ContainerBody}>
        {scaleCreator(order)}
        <AddItemButton
          externalClasses={classes.AddButton}
          buttonText="Додати шкалу"
          clicked={dispatchWithAction.onCreateScale}
        />
      </div>
    </div>
  )
}


export default ScalesEditContainer
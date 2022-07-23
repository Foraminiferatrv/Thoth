import { useEffect } from 'react'

import classes from './ScalesEditContainer.module.scss'

import { usePositionReorder } from '../../hooks/usePositionReorder'

import AddItemButton from '../../components/UI/AddItemButton/AddItemButton'
import ScaleEditor from '../../components/ScaleEditor/ScaleEditor'

import comparator from '../../utils/comparator'

import { testEditorActions } from '../../store/reducers/tests/testEditor/testEditor'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { Scale } from '../../types/types'


function ScalesEditContainer() {
  const testScales = useAppSelector((globalState) => globalState.tests.testEdiorState.testScales)
  const dispatch = useAppDispatch()
  const { changeScaleName, createNewScale, changeScaleNumber, deleteScale } = testEditorActions

  const sortedScales = Object.entries(testScales).sort((elementA, elementB) => comparator(elementA[1].scaleNumber, elementB[1].scaleNumber))

  const [order, updatePosition, updateOrder, refreshOrder] = usePositionReorder(sortedScales, (newScalesArray) => changeScaleNumber({ newScalesArray }))

  useEffect(() => (refreshOrder(sortedScales)), [testScales, refreshOrder, sortedScales])

  function scaleCreator(scalesArray: []) {
    if (scalesArray !== undefined) {
      return order.map(([scaleId, values], index) => (
        <ScaleEditor
          updateOrder={updateOrder}
          updatePosition={updatePosition}
          index={index}
          key={scaleId}
          scaleNumber={values.scaleNumber}
          scaleName={values.scaleName}
          changeScaleName={(scaleName: string, targetScaleId: string) => dispatch(changeScaleName({ scaleName, targetScaleId }))}
          scaleId={scaleId}
          deleteScale={(targetScaleId: string) => dispatch(deleteScale({ targetScaleId }))}
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
          clicked={() => dispatch(createNewScale())}
        />
      </div>
    </div>
  )
}


export default ScalesEditContainer
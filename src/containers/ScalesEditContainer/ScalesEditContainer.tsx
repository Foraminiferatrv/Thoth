import classes from './ScalesEditContainer.module.scss'

import AddItemButton from '../../components/UI/AddItemButton/AddItemButton'
import ScaleEditor from '../../components/ScaleEditor/ScaleEditor'

import comparator from '../../utils/comparator'

import { testEditorActions } from '../../store/reducers/tests/testEditor/testEditor'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { Reorder, useDragControls } from 'framer-motion'
import DragButton from '../../components/UI/DragButton/DragButton'

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

  const sortedScales = Object.entries(testScales).sort((elementA, elementB) => comparator(elementA[1].scaleNumber, elementB[1].scaleNumber))

  const controls = useDragControls() // creating controls for draggable component

  function scaleCreator(scalesArray: typeof sortedScales) {
    if (scalesArray !== undefined) {
      return (
        <Reorder.Group
          values={sortedScales}
          onReorder={(newOrder) => dispatchWithAction.onChangeScaleNumber(newOrder)}
        >
          {sortedScales.map((values) => {
            const [scaleId, scaleValues] = values // extracting scale id and scale data from the array
            return <Reorder.Item
              dragControls={controls}
              dragListener={false}
              value={values}
              key={scaleId}
              as={'div'}
            >
              {/* <DragButton /> */}
              <ScaleEditor
                scaleId={scaleId}
                scaleName={scaleValues.scaleName}
                changeScaleName={dispatchWithAction.onChangeScaleName}
                scaleNumber={scaleValues.scaleNumber}
                deleteScale={dispatchWithAction.onDeleteScale}
                dragControls={controls}
              />
            </Reorder.Item>
          })}
        </Reorder.Group>
      )
    }
    return null
  }

  return (
    <div className={classes.ScalesEditContainer}>
      <div className={classes.ContainerHeader}>
        <span>Шкали</span>
      </div>
      <div className={classes.ContainerBody}>
        {scaleCreator(sortedScales)}
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
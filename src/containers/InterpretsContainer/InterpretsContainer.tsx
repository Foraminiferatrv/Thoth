import classes from './InterpretsContainer.module.scss'

import AddItemButton from '../../components/UI/AddItemButton/AddItemButton'
import InterpretEditor from '../../components/InterpretEditor/InterpretEditor'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { testEditorActions } from '../../store/reducers/tests/testEditor/testEditor'



function InterpretsContainer() {
  const { testInterpretations, testScales } = useAppSelector((globalState) => globalState.tests.testEditorState)
  const dispatch = useAppDispatch()
  const {
    addInterpret,
    changeInterpretText,
    changeInterpretValueLimits,
    changeInterpretRequiredScale,
    deleteInterpretRequiredScale,
    addInterpretRequiredScale,
    deleteInterpret,
  } = testEditorActions
  const dispatchWithAction = {  //creating dispatch functions with actions
    onAddInterpret: () => dispatch(addInterpret()),
    onChangeInterpretText: (targetInterpretId: string, newInterpretText: string) => dispatch(changeInterpretText({ targetInterpretId, newInterpretText })),
    onChangeInterpretValueLimits: (targetInterpretId: string, scaleIndex: number, fromLimit: number, toLimit: number) => dispatch(changeInterpretValueLimits({ targetInterpretId, scaleIndex, fromLimit, toLimit })),
    onChangeInterpretRequiredScale: (targetInterpretId: string, scaleIndex: number, newScaleId: string) => dispatch(changeInterpretRequiredScale({ targetInterpretId, scaleIndex, newScaleId })),
    onAddInterpretRequiredScale: (targetInterpretId: string) => dispatch(addInterpretRequiredScale({ targetInterpretId })),
    onDeleteInterpretRequiredScale: (targetInterpretId: string, scaleIndex: number) => dispatch(deleteInterpretRequiredScale({ targetInterpretId, scaleIndex })),
    onDeleteInterpret: (targetInterpretId: string) => dispatch(deleteInterpret({ targetInterpretId }))

  }

  let interpretContent

  if (testInterpretations !== undefined) {
    interpretContent = Object.entries(testInterpretations).map(
      ([interpretId, interpretValues]) => (
        <InterpretEditor
          key={interpretId}
          testScales={testScales}
          requiredScales={interpretValues.requiredScales}
          interpretId={interpretId}
          interpretText={interpretValues.interpretText}
          changeInterpretText={dispatchWithAction.onChangeInterpretText}
          deleteInterpret={dispatchWithAction.onDeleteInterpret}
          changeInterpretValueLimits={dispatchWithAction.onChangeInterpretValueLimits}
          changeInterpretRequiredScale={dispatchWithAction.onChangeInterpretRequiredScale}
          deleteInterpretRequiredScale={dispatchWithAction.onDeleteInterpretRequiredScale}
          addInterpretRequiredScale={dispatchWithAction.onAddInterpretRequiredScale}
        />
      )
    )
  }

  return (
    <div className={classes.InterpretsContainer}>
      <div className={classes.ContainerHeader}>
        <span>Інтерпретації</span>
      </div>
      <div className={classes.ContainerBody}>
        {interpretContent}
        <AddItemButton
          externalClasses={classes.AddButton}
          buttonText="Додати інтерпретацію"
          clicked={dispatchWithAction.onAddInterpret}
        />
      </div>
    </div>
  )
}

export default InterpretsContainer
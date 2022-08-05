import classes from './ScaleEditor.module.scss'

import EditableInput from '../UI/EditableInput/EditableInput'
import DeleteSideButton from '../UI/DeleteSideButton/DeleteSidebutton'
import DragButton from '../UI/DragButton/DragButton'

import { DragControls, motion } from 'framer-motion'

interface Props {
  scaleName: string,
  scaleId: string,
  scaleNumber: number,
  changeScaleName: (scaleName: string, targetScaleId: string) => void,
  deleteScale: (targetScaleId: string) => void,
  dragControls?: DragControls,
}


function ScaleEditor({
  scaleName,
  scaleId,
  scaleNumber,
  changeScaleName,
  deleteScale,
  dragControls
}: Props) {

  return (
    <motion.div
      layout
      className={classes.ScaleEditor}
    >
      <div className={classes.LeftSide}>
        {dragControls && <DragButton onPointerDown={(e) =>  dragControls.start(e) } />}
        <EditableInput
          inputId={scaleId}
          inputValue={scaleName}
          changed={(event: React.ChangeEvent<HTMLInputElement>) => changeScaleName(event.target.value, scaleId)}
          inputIndex={scaleNumber}
        />
      </div>
      <DeleteSideButton
        clicked={() => deleteScale(scaleId)}
      />
    </motion.div >
  )
}

export default ScaleEditor
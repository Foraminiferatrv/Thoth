import React, { useRef, useEffect, useState } from 'react';

import classes from './ScaleEditor.module.scss';

import EditableInput from '../../components/UI/EditableInput/EditableInput';
import DeleteSideButton from '../../components/UI/DeleteSideButton/DeleteSidebutton';

import { motion } from 'framer-motion';

import { useMeasurePositions } from '../../hooks/useMeasurePositions';


function ScaleEditor( { scaleName, index, scaleId, scaleNumber, changeScaleName, deleteScale, updatePosition, updateOrder } ) {

  const [isDragging, setDragging] = useState( false );

  const ref = useMeasurePositions( ( position ) => updatePosition( index, position ) );


  return (
    <motion.div
      layout
      style={ { zIndex: isDragging ? 3 : 1 } }
      ref={ ref }
      initial={ false }
      whileHover={ { scale: 1.01 } }
      className={ classes.ScaleEditor }
      drag="y"
      onDragStart={ () => setDragging( true ) }
      onDragEnd={ () => setDragging( false ) }
      onViewportBoxUpdate={ ( _viewportBox, delta ) => {
        isDragging && updateOrder( index, delta.y.translate );
      } }
    >
      <div className={ classes.LeftSide }>
        <EditableInput
          inputId={ scaleId }
          inputValue={ scaleName }
          changed={ ( event ) => changeScaleName( event.target.value, scaleId ) }
          inputIndex={ scaleNumber }
        />
      </div>
      <DeleteSideButton
        clicked={ () => deleteScale( scaleId ) }
      />
    </motion.div >
  )
}

export default ScaleEditor;
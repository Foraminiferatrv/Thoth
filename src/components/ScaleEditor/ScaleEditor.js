import React, { useRef, useEffect, useState } from 'react';

import classes from './ScaleEditor.module.scss';

import EditableInput from '../../components/UI/EditableInput/EditableInput';
import DeleteSideButton from '../../components/UI/DeleteSideButton/DeleteSidebutton';

import { motion, useMotionValue } from 'framer-motion';


function ScaleEditor( { scaleName, index, scaleId, scaleNumber, moveScale, changeScaleName, deleteScale, setPositions } ) {
  const [isDragging, setDragging] = useState( false );

  const ref = useRef( null );

  useEffect( () => setPositions( index, {
    height: ref.current.offsetHeight,
    top: ref.current.offsetTop
  } ) );

  const dragY = useMotionValue( 0 );


  return (
    <motion.div
      animate={ isDragging ? { zIndex: 1 } : { zIndex: 0, transition: { delay: 0.3 } } }
      ref={ ref }
      initial={ false }
      whileHover={ { scale: 1.01 } }
      whileTap={ { scale: 1.03 } }
      className={ classes.ScaleEditor }
      drag="y"
      layout
      dragY={ dragY }
      dragElastic={ 1 }
      onDrag={ ( event, { offset } ) => moveScale( scaleId, index, offset.y ) }
      onDragStart={ () => setDragging( true ) }
      onDragEnd={ () => setDragging( false ) }
      dragConstraints={ { top: 0, bottom: 0 } }
      positionTransition={ ( { delta } ) => {
        console.log(delta);
        if ( isDragging ) {
          dragY.set( dragY.get() + delta.y );
        }
        return !isDragging;
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
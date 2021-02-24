import React from 'react';

import classes from './ScaleEditor.module.scss';

import EditableInput from '../../components/UI/EditableInput/EditableInput';
import DeleteSideButton from '../../components/UI/DeleteSideButton/DeleteSidebutton';

function ScaleEditor( { scaleName, scaleId, scaleIndex, changeScaleName, deleteScale } ) {
  return (
    <div
      className={ classes.ScaleEditor }
    >
      <div className={ classes.LeftSide }>
        <EditableInput
          inputId={ scaleId }
          inputValue={ scaleName }
          changed={ ( event ) => changeScaleName( event.target.value, scaleId ) }
          inputIndex={ scaleIndex }
        />
      </div>
      <DeleteSideButton
        clicked={ () => deleteScale( scaleId ) }
      />
    </div >
  )
}

export default ScaleEditor;
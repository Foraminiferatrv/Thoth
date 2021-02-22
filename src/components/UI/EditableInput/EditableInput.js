import React, { useState } from 'react';

import classes from './EditableInput.module.scss';

import { Input } from '../Input/Input';
import EditButton from '../EditButton/EditButton';
import CheckButton from '../CheckButton/CheckButton';


function EditableInput( props ) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyza';
  const [editStatus, changeEditStatus] = useState( false );

  function toggleEditStatus( currentEdditStatus ) {
    changeEditStatus( !currentEdditStatus );
  }

  let componentContent = <Input
    inputlabel={ props.letterIndex ? alphabet[props.inputIndex] : props.inputIndex + 1 }
    inputtype='input'
    defaultValue={ props.inputValue }
    onChange={ event => props.changed( event ) } //TODO: answerText might need to be replaced due to better reusability
    //* FIXME:on change function is not flexible enough. */ 
    onBlur={ toggleEditStatus }
    autoFocus
  />;

  if ( !editStatus ) {
    componentContent = <div className={ classes.InputValueContainer }>
      <span className={ classes.InputIndex }>{ props.letterIndex ? alphabet[props.inputIndex] : props.inputIndex + 1 }</span>
      <span className={ classes.InputValue } onClick={()=> toggleEditStatus( editStatus ) }>
        { props.inputValue }    {/* FIXME:Input name should always be readble even if a name is too long. */ }
      </span>
    </div>;
  }


  return (
    <div className={ classes.EditableInput }>
      {componentContent }
      <div className={ classes.ButtonBlock }>
        { !editStatus ? <EditButton clicked={ () => toggleEditStatus( editStatus ) } /> :
          <CheckButton clicked={ () => toggleEditStatus( editStatus ) } /> }  {/* toggling edit button*/ }
      </div>
    </div>
  );
}

export default EditableInput;
import React, { useState } from 'react';

import classes from './EditableInput.module.css';

import { Input } from '../Input/Input';
import XButton from '../XButton/XButton';
import EditButton from '../EditButton/EditButton';
import CheckButton from '../CheckButton/CheckButton';


function EditableInput( props ) {
  const [editStatus, changeEditStatus] = useState( true );

  function toggleEditStatus( currentEdditStatus ) {
    changeEditStatus( !currentEdditStatus );
  }

  let componentContent = <Input
    inputlabel={ props.inputIndex + 1 }
    inputtype='input'
    defaultValue={ props.inputValue }
    onChange={ event => props.changed( event.target.value, props.inputId ) }
    //* FIXME:on change function is not flexible enough. */ 
    onBlur={ toggleEditStatus }
    autoFocus
  />;


  if ( !editStatus ) {
    componentContent = <div className={ classes.InputValueContainer }>
      <span className={ classes.InputIndex }>{ props.inputIndex + 1 }</span>
      <span className={ classes.InputValue }>
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
        <XButton clicked={ () => props.deleted( props.inputId ) } />
      </div>
    </div>
  );
}

export default EditableInput;
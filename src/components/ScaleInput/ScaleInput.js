import React, { useState } from 'react';

import classes from './ScaleInput.module.css';

import { Input } from '../UI/Input/Input';
import XButton from '../UI/XButton/XButton';
import EditButton from '../UI/EditButton/EditButton';
import CheckButton from '../UI/CheckButton/CheckButton';


function ScaleInput( props ) {
  const [editStatus, changeEditStatus] = useState( false );

  function toggleEditStatus( currentEdditStatus ) {
    changeEditStatus( !currentEdditStatus );
  }

  let scaleContent = <Input
    noLabel
    inputtype='input'
    defaultValue={ props.scaleName }
    onChange={ event => props.changed( event.target.value, props.inputId ) }
  />;

  if ( !editStatus ) {
    scaleContent = <div className={ classes.ScaleNameContainer }>
      <span className={ classes.ScaleName }>
        { props.scaleName }    {/* FIXME:Scale name should always be readble even if a name is too long. */ }
      </span>
    </div>
  }


  return (
    <div className={ classes.ScaleInput }>
      {scaleContent }
      <div className={ classes.ButtonBlock }>
        { !editStatus ? <EditButton clicked={ () => toggleEditStatus( editStatus ) } /> :
          <CheckButton clicked={ () => toggleEditStatus( editStatus ) } /> }  {/* toggling edit button*/ }
        <XButton clicked={ () => props.deleted( props.inputId ) } />
      </div>
    </div>
  );
}

export default ScaleInput;
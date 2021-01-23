import React from 'react';

import classes from './NewInterpret.module.css';

import AddItemButton from '../UI/AddItemButton/AddItemButton';
import { Input } from '../UI/Input/Input';
import NumRange from '../UI/NumRange/NumRange';
import ScalesList from '../ScalesList/ScalesList';
import XButton from '../UI/XButton/XButton';


function NewInterpret( props ) {
  let interpretContent = null;

  if ( props.interprets !== undefined ) {
    interpretContent = props.interprets.map(
      ( interpret ) =>
        <div className={ classes.InterpretBlock } key={ interpret.interpretId }>
          <div className={ classes.ScalesBlock }>
            <ScalesList
              testScales={ props.testScales }
              inputtype='select'
              selectPlaceholder={ "Оберіть шкалу..." }

            />
            <NumRange />
          </div>
          <div className={ classes.InterpretText }>
            <Input
              inputtype='textarea'
              placeholder="Введіть текст інтерпретації..."
              defaultValue={interpret.interpretText}
              onBlur={ ( event ) => props.changeInterpretText( interpret.interpretId, event.target.value ) }
            />
            <XButton
              clicked={ () => props.deleteInterpret( interpret.interpretId ) }
            />
          </div>
        </div>
    )
  }


  return (
    <div className={ classes.NewInterpret }>
      <AddItemButton
        buttonText="Додати інтерпретацію"
        clicked={ props.addInterpret }
      />
      {interpretContent }
    </div>
  );
}


export default NewInterpret;
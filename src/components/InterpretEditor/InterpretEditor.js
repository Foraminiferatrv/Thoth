import React from 'react';

import classes from './InterpretEditor.module.scss';

import { Input } from '../UI/Input/Input';
import DeleteSideButton from '../UI/DeleteSideButton//DeleteSidebutton';
import InterpretScale from '../InterpretScale/InterpretScale';
import AddItemButton from '../UI/AddItemButton/AddItemButton';
import LinkIcon from '@material-ui/icons/Link';


function InterpretEditor( props ) {
  let scalesContent;

  scalesContent = props.requiredScales.map( ( scale, index ) => (
    <React.Fragment key={ 'reqScale' + index }>
      <InterpretScale
        testScales={ props.testScales }
        interpretId={ props.interpretId }
        scaleIndex={ index }
        requiredValueLimits={ scale.requiredValueLimits }
        requiredScaleId={ scale.requiredScaleId }
        changeInterpretValueLimits={ props.changeInterpretValueLimits }
        changeInterpretRequiredScale={ props.changeInterpretRequiredScale }
        deleteInterpretRequiredScale={ props.deleteInterpretRequiredScale }
      />
      { ( props.requiredScales.length - 1 ) !== index && <div className={ classes.LinkChain }><LinkIcon fontSize='large' /></div> }
    </React.Fragment>
  )
  );

  return (
    <div className={ classes.InterpretEditor }>
      <div className={ classes.LeftSide }>
        <div className={ classes.ScalesBlock }  >
          { scalesContent }
          <AddItemButton
            externalClasses={ classes.AddButton }
            buttonText={ scalesContent.length !== 0 ? "Зв'язати шкалу" : "Додати шкалу" }
            clicked={ () => props.addInterpretRequiredScale( props.interpretId ) }
          />
        </div>
        <div className={ classes.InterpretText }>
          <Input
            inputtype='textarea'
            placeholder="Введіть текст інтерпретації..."
            defaultValue={ props.interpretText }
            onBlur={ ( event ) => props.changeInterpretText( props.interpretId, event.target.value ) }
          />
        </div>
      </div>
      <DeleteSideButton
        clicked={ () => props.deleteInterpret( props.interpretId ) }
      />
    </div>
  );
}

export default InterpretEditor;
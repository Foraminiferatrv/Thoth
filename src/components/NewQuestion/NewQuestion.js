import React, { useState } from 'react';

import classes from './NewQuestion.module.scss';

import EditableInput from '../UI/EditableInput/EditableInput';
import NewRadioAnswer from '../NewRadioAnswer/NewRadioAnswer';
import AddItemButton from '../UI/AddItemButton/AddItemButton';
import DeleteSideButton from '../UI/DeleteSideButton/DeleteSidebutton';

import comparator from '../../utils/comparator';

import { motion, useMotionValue, useDragControls } from 'framer-motion';

import { useMeasurePositions } from '../../hooks/useMeasurePositions';

import DragButton from '../UI/DragButton/DragButton';


function NewQuestion( props ) {

  const [isDragging, setDragging] = useState( false );
  const dragControls = useDragControls();

  const ref = useMeasurePositions( ( position ) => props.updatePosition( props.questionIndex, position ) );

  let radioAnswersContent = null;

  if ( props.radioAnswers !== undefined ) {
    radioAnswersContent = Object.entries( props.radioAnswers ).sort( ( elementA, elementB ) => comparator( elementA[1].answerNumber, elementB[1].answerNumber ) ).map( ( [answerId, answerValues], index ) => (
      <NewRadioAnswer
        key={ props.questionId.concat( index ) }
        questionId={ props.questionId }
        answerIndex={ index }
        answerId={ answerId }
        answerText={ answerValues.answerText }
        changeRadioAnswerText={ props.changeRadioAnswerText }
        changeAnswerValue={ props.changeAnswerValue }
        deleteRadioAnswer={ props.deleteRadioAnswer }
        scaleDependencies={ answerValues.scaleDependencies }
        testScales={ props.testScales }
        addDependency={ props.addDependency }
        changeScaleDependency={ props.changeScaleDependency }
        deleteDependency={ props.deleteDependency }
      />
    ) );
  }


  return (
    < motion.div
      ref={ ref }
      layout
      initial={ false }
      // style={ { zIndex: isDragging ? 10000 : 1 } }
      dragControls={ dragControls }
      drag="y"
      dragListener={ false }
      whileDrag={ { scale: 1.01 } }
      className={ classes.ScaleEditor }
      onDragStart={ () => setDragging( true ) }
      onDragEnd={ () =>  setDragging( false ) }
      onViewportBoxUpdate={ ( _viewportBox, delta ) => {
        isDragging && props.updateOrder( props.questionIndex, delta.y.translate );
      } }
      className={ classes.NewQuestion }
    >
      <div className={ classes.QuestionBlock }>
        <motion.div
          className={ classes.DragField }
          onMouseDown={ event => dragControls.start( event ) }
        >
          <DragButton />
        </motion.div>
        <div className={ classes.LeftSide }>
          <EditableInput
            inputValue={ props.questionText }
            inputId={ props.questionId }
            inputIndex={ props.questionIndex }
            changed={ event => props.changeQuestionText( event.target.value, props.questionId ) }
          />
        </div>
        <DeleteSideButton
          externalClasses={ classes.DeleteButton }
          clicked={ () => props.deleteQuestion( props.questionId ) }
        />
      </div>

      <div className={ classes.AnswerBlock }>
        { radioAnswersContent }
        <AddItemButton
          externalClasses={ classes.AddButton }
          clicked={ () => props.newRadioAnswer( props.questionId ) }
          buttonText="Додати відповідь"
        />
      </div>
    </motion.div >
  );
}

export default React.memo( NewQuestion );
import {
  updateObject
} from '../utility';

import * as actionTypes from '../actions/actionTypes';

import {
  v4 as uuidv4
} from 'uuid';

const initialState = {};


function createNewTest( state ) {
  const newTestObject = {
    testName: "",
    testId: uuidv4(),
    testScales: [],
    testQuestions: []
  };

  return updateObject( state, newTestObject );
}


function addTestName( state, testName ) {
  return updateObject( state, {
    testName: testName
  } )
}

// scale functions
function createNewScale( state ) {
  const updatedScales = [ ...state.testScales ];
  updatedScales.push( {
    scaleId: uuidv4(),
    scaleName: "",
    scaleValue: 0
  } );

  return updateObject( state, {
    testScales: updatedScales
  } );
}

function changeScaleName( state, scaleName, targetScaleId ) {
  let scalesCopy = [ ...state.testScales ];
  const targetScaleIndex = scalesCopy.indexOf( state.testScales.filter( ( element ) => element.scaleId === targetScaleId )[ 0 ] );

  scalesCopy[ targetScaleIndex ] = {
    ...scalesCopy[ targetScaleIndex ],
    scaleName: scaleName
  }
  return ( updateObject( state, {
    testScales: scalesCopy
  } ) )

}

function deleteScale( state, targetScaleId ) {
  const scalesCopy = [ ...state.testScales ];
  const targetScaleIndex = scalesCopy.indexOf( state.testScales.filter( ( element ) => element.scaleId === targetScaleId )[ 0 ] );

  scalesCopy.splice( targetScaleIndex, 1 );

  return ( updateObject( state, {
    testScales: scalesCopy
  } ) );
}
//end scale functions


// questions functions
function createNewQuestion( state ) {
  const questionsCopy = [ ...state.testQuestions ];
  questionsCopy.push( {
    questionNumber: null,
    questionText: "",
    questionId: uuidv4(),
    questionAnswers: [ {
      answerText: "",
      scaleDependencies: [ {
        scaleId: "",
        answerValue: "-1"
      } ]
    } ]
  } );
  return updateObject( state, {
    testQuestions: questionsCopy
  } );
}

function changeQuestionText( state, newQuestionText, targetQuestionId ) {
  let questionsCopy = [ ...state.testQuestions ];
  const targetQuestionIndex = questionsCopy.indexOf( questionsCopy.filter( ( element ) => element.questionId === targetQuestionId )[ 0 ] );

  questionsCopy[ targetQuestionIndex ] = {
    ...questionsCopy[ targetQuestionIndex ],
    questionText: newQuestionText
  }

  return updateObject( state, {
    testQuestions: questionsCopy
  } )
}

function deleteQestion( state, targetQuestionId ) {
  const questionsCopy = [ ...state.testQuestions ];
  const targetQuestionIndex = questionsCopy.indexOf( questionsCopy.filter( ( element ) => element.questionId === targetQuestionId )[ 0 ] );

  questionsCopy.splice( targetQuestionIndex, 1 );

  return updateObject( state, {
    testQuestions: questionsCopy
  } )
}
//end question functions


function testCreator( state = initialState, action ) {
  switch ( action.type ) {
    case actionTypes.CREATE_NEW_TEST:
      return createNewTest( state );

    case actionTypes.ADD_TEST_NAME:
      return addTestName( state, action.testName );

    case actionTypes.CREATE_NEW_SCALE:
      return createNewScale( state );

    case actionTypes.CHANGE_SCALE_NAME:
      return changeScaleName( state, action.scaleName, action.targetScaleId );

    case actionTypes.DELETE_SCALE:
      return deleteScale( state, action.scaleId );

    case actionTypes.CREATE_NEW_QUESTION:
      return createNewQuestion( state );

    case actionTypes.CHANGE_QUESTION_TEXT:
      return changeQuestionText( state, action.newQuestionText, action.targetQuestionId );

    case actionTypes.DELETE_QUESTION:
      return deleteQestion( state, action.targetQuestionId );


    default:
      return state;
  }
}

export {
  testCreator
};
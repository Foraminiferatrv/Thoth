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
    testScales: {
      "TESTID1": {
        scaleName: "Test SCALE!"
      }
    },
    testQuestions: {},
    testInterpretations: {
      [ uuidv4() ]: {
        requiredScales: [ {
          requiredScaleId: "TESTID1",
          requiredValueLimits: {
            from: -20,
            to: 60
          }
        } ],
        interpretText: "Кальмари мають обтічне торпедоподібне тіло, що дозволяє їм рухатися з великою швидкістю «хвостом» вперед, основний спосіб руху — реактивний. Уздовж тіла кальмара проходить хрящова «стрілка», що підтримує тіло. Вона називається гладіус і є рудиментом раковини..."
      },
      [ uuidv4() ]: {
        requiredScales: [ {
          requiredScaleId: '',
          requiredValueLimits: {
            from: 0,
            to: 0
          }
        } ],
        interpretText: ""
      }
    }
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
  let updatedScales = {
    ...state.testScales
  };
  updatedScales = {
    ...updatedScales,
    [ uuidv4() ]: {
      scaleName: ""
    }
  };

  return updateObject( state, {
    testScales: updatedScales
  } );
}

function changeScaleName( state, scaleName, targetScaleId ) {
  let scalesCopy = {
    ...state.testScales
  };

  scalesCopy[ targetScaleId ] = {
    ...scalesCopy[ targetScaleId ],
    scaleName: scaleName
  }
  return ( updateObject( state, {
    testScales: scalesCopy
  } ) )

}

function deleteScale( state, targetScaleId ) {
  const scalesCopy = {
    ...state.testScales
  };

  delete scalesCopy[ targetScaleId ];

  return ( updateObject( state, {
    testScales: scalesCopy
  } ) );
}
//end scale functions


// questions functions
function createNewQuestion( state ) {
  let questionsCopy = {
    ...state.testQuestions
  };
  questionsCopy = {
    ...questionsCopy,
    [ uuidv4() ]: {
      questionText: "",
      questionRadioAnswers: {}
    }
  };
  return updateObject( state, {
    testQuestions: questionsCopy
  } );
}

function changeQuestionText( state, newQuestionText, targetQuestionId ) {
  let questionsCopy = {
    ...state.testQuestions
  };

  questionsCopy[ targetQuestionId ] = {
    ...questionsCopy[ targetQuestionId ],
    questionText: newQuestionText
  }

  return updateObject( state, {
    testQuestions: questionsCopy
  } )
}

function deleteQestion( state, targetQuestionId ) {
  const questionsCopy = {
    ...state.testQuestions
  };
  delete questionsCopy[ targetQuestionId ];

  return updateObject( state, {
    testQuestions: questionsCopy
  } )
}
//end question functions


//answer functions
function addNewRadioAnswer( state, targetQuestionId ) {
  const questionsCopy = {
    ...state.testQuestions
  };
  questionsCopy[ targetQuestionId ].questionRadioAnswers = {
    ...questionsCopy[ targetQuestionId ].questionRadioAnswers,
    [ uuidv4() ]: {
      answerText: "",
      scaleDependencies: [ {
        scaleId: "",
        answerValue: 0
      } ]
    }
  };

  return updateObject( state, {
    testQuestions: questionsCopy
  } );
}

function changeRadioAnswerText( state, newAnswerText, targetQuestionId, answerId ) {
  const questionsCopy = {
    ...state.testQuestions
  };

  questionsCopy[ targetQuestionId ].questionRadioAnswers[ answerId ] = {
    ...questionsCopy[ targetQuestionId ].questionRadioAnswers[ answerId ],
    answerText: newAnswerText
  }

  return ( updateObject( state, {
    testQuestions: questionsCopy
  } ) );
}

function deleteRadioAnswer( state, targetQuestionId, answerId ) {
  const questionsCopy = {
    ...state.testQuestions
  };
  delete questionsCopy[ targetQuestionId ].questionRadioAnswers[ answerId ];

  return ( updateObject( state, {
    testQuestions: questionsCopy
  } ) );
}

function addDependency( state, targetQuestionId, answerId ) {
  const questionsCopy = {
    ...state.testQuestions
  };


  questionsCopy[ targetQuestionId ].questionRadioAnswers[ answerId ].scaleDependencies.push( {
    scaleId: "",
    answerValue: 0
  } )

  return ( updateObject( state, {
    testQuestions: questionsCopy
  } ) )
}


function changeScaleDependency( state, targetQuestionId, answerId, depIndex, newValue ) {
  const questionsCopy = {
    ...state.testQuestions
  };

  questionsCopy[ targetQuestionId ].questionRadioAnswers[ answerId ].scaleDependencies[ depIndex ].scaleId = newValue;

  return ( updateObject( state, {
    testQuestions: questionsCopy
  } ) );
}

function deleteDependency( state, targetQuestionId, answerId, depIndex ) {
  const questionsCopy = {
    ...state.testQuestions
  };

  questionsCopy[ targetQuestionId ].questionRadioAnswers[ answerId ].scaleDependencies.splice( depIndex, 1 );

  return ( updateObject( state, {
    testQuestions: questionsCopy
  } ) )
}

function changeAnswerValue( state, targetQuestionId, answerId, depIndex, newValue ) {
  const questionsCopy = {
    ...state.testQuestions
  };
  // const targetQuestionIndex = questionsCopy.indexOf( questionsCopy.filter( ( element ) => element.questionId === targetQuestionId )[ 0 ] );

  questionsCopy[ targetQuestionId ].questionRadioAnswers[ answerId ].scaleDependencies[ depIndex ].answerValue = newValue;

  return ( updateObject( state, {
    testQuestions: questionsCopy
  } ) );
}
//end answer functions


//interpret functions
function addInterpret( state ) {
  let interpretCopy = {
    ...state.testInterpretations
  };

  interpretCopy = {
    ...interpretCopy,
    [ uuidv4() ]: {
      requiredScales: [ {
        requiredScaleId: '',
        requiredValueLimits: {
          from: 0,
          to: 0
        }
      } ],
      interpretText: ""
    }
  }

  return ( updateObject( state, {
    testInterpretations: interpretCopy
  } ) )
}

function changeInterpretText( state, targetInterpretId, newInterpretText ) {
  const interpretCopy = {
    ...state.testInterpretations
  };


  interpretCopy[ targetInterpretId ] = {
    ...interpretCopy[ targetInterpretId ],
    interpretText: newInterpretText
  };

  return ( updateObject( state, {
    testInterpretations: interpretCopy
  } ) );
}

function changeInterpretValueLimits( state, targetInterpretId, scaleIndex, fromLimit, toLimit ) {
  const interpretCopy = {
    ...state.testInterpretations
  };


  interpretCopy[ targetInterpretId ].requiredScales[ scaleIndex ].requiredValueLimits = {
    from: fromLimit,
    to: toLimit
  };

  return ( updateObject( state, {
    testInterpretations: interpretCopy
  } ) );
}


function deleteInterpret( state, targetInterpretId ) {
  const interpretCopy = {
    ...state.testInterpretations
  };

  delete interpretCopy[ targetInterpretId ];

  return ( updateObject( state, {
    testInterpretations: interpretCopy
  } ) );
}

function changeInterpretRequiredScale( state, targetInterpretId, scaleIndex, newScaleId ) {
  const interpretCopy = {
    ...state.testInterpretations
  };

  interpretCopy[ targetInterpretId ].requiredScales[ scaleIndex ].requiredScaleId = newScaleId;

  return ( updateObject( state, {
    testInterpretations: interpretCopy
  } ) );
}
//end interpret functions


// TODO: Create function for element searching
//TODO: Apply deep cloning for objects
function testEditor( state = initialState, action ) {
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

    case actionTypes.CREATE_NEW_RADIO_ANSWER:
      return addNewRadioAnswer( state, action.targetQuestionId );

    case actionTypes.CHANGE_RADIO_ANSWER_TEXT:
      return changeRadioAnswerText( state, action.newAnswerText, action.targetQuestionId, action.answerId );

    case actionTypes.DELETE_RADIO_ANSWER:
      return deleteRadioAnswer( state, action.targetQuestionId, action.answerId );

    case actionTypes.ADD_DEPENDENCY:
      return addDependency( state, action.targetQuestionId, action.answerId );

    case actionTypes.CHANGE_SCALE_DEPENDENCY:
      return changeScaleDependency( state, action.targetQuestionId, action.answerId, action.depIndex, action.newValue );

    case actionTypes.DELETE_DEPENDENCY:
      return deleteDependency( state, action.targetQuestionId, action.answerId, action.depIndex );

    case actionTypes.CHANGE_ANSWER_VALUE:
      return changeAnswerValue( state, action.targetQuestionId, action.answerId, action.depIndex, action.newValue );

    case actionTypes.ADD_INTERPRET:
      return addInterpret( state );

    case actionTypes.DELETE_INTERPRET:
      return deleteInterpret( state, action.targetInterpretId );

    case actionTypes.CHANGE_INTERPRET_TEXT:
      return changeInterpretText( state, action.targetInterpretId, action.newInterpretText );

    case actionTypes.CHANGE_INTERPRET_VALUE_LIMITS:
      return changeInterpretValueLimits( state, action.targetInterpretId, action.scaleIndex, action.fromLimit, action.toLimit )

    case actionTypes.CHANGE_INTERPRET_REQUIRED_SCALE:
      return changeInterpretRequiredScale( state, action.targetInterpretId, action.scaleIndex, action.newScaleId );


    default:
      return state;
  }
}

export {
  testEditor
};
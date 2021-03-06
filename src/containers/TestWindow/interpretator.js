export default function showInterpret( results, questions, scales, interprets ) {
  let finalInterpret = [];
  let scalesPoints = {};

  function checkInterpret( points, limits ) {
    if ( points >= parseFloat( limits.from ) && points <= parseFloat( limits.to ) ) {
      return true;
    }
    return false;
  }

  //Create points counter.
  Object.keys( scales ).forEach( key => scalesPoints = {
    ...scalesPoints,
    [ key ]: 0
  } );



  //Calculating results.
  Object.entries( results ).forEach( ( [ questionId, answerId ] ) => {
    console.log( questions[ questionId ] );
    questions[ questionId ].questionRadioAnswers[ answerId ].scaleDependencies.forEach( dep => (
      scalesPoints = {
        ...scalesPoints,
        [ dep.scaleId ]: scalesPoints[ dep.scaleId ] + dep.answerValue
      }
    ) )
  } );



  //Comparing avalible and required points. Pushing interpretaitons.
  Object.values( interprets ).forEach( interpretValues => {
    let interpretIsValid = true;

    const scaleId = interpretValues.requiredScales[ 0 ].requiredScaleId;

    const from = interpretValues.requiredScales[ 0 ].requiredValueLimits.from;
    const to = interpretValues.requiredScales[ 0 ].requiredValueLimits.to;


    interpretValues.requiredScales.forEach( requiredScale => {
      if ( !interpretIsValid || !checkInterpret( scalesPoints[ requiredScale.requiredScaleId ], requiredScale.requiredValueLimits ) ) {
        interpretIsValid = false;
      }
    } );


    if ( interpretIsValid ) {
      finalInterpret.push( interpretValues.interpretText );
    }
  } );

  return finalInterpret;
}
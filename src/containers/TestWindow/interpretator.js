export default function showInterpret( results, questions, scales, interprets ) {
  let finalInterpret = [];
  let scalesPoints = {};
  //Create points counter.
  Object.keys( scales ).forEach( key => scalesPoints = {
    ...scalesPoints,
    [ key ]: 0
  } );
  //Calculating results.
  Object.entries( results ).forEach( ( [ questionId, answerId ] ) => (
    questions[ questionId ].questionRadioAnswers[ answerId ].scaleDependencies.forEach( dep => (
      scalesPoints = {
        ...scalesPoints,
        [ dep.scaleId ]: scalesPoints[ dep.scaleId ] + dep.answerValue
      }
    ) )
  ) );
  //Comparing avalible and required points. Pushing interpretaiton.
  Object.values( interprets ).forEach( interpretValues => {
    const scaleId = interpretValues.requiredScales[ 0 ].requiredScaleId;
    const from = interpretValues.requiredScales[ 0 ].requiredValueLimits.from;
    const to = interpretValues.requiredScales[ 0 ].requiredValueLimits.to;
    if ( scalesPoints[ scaleId ] >= from && scalesPoints[ scaleId ] <= to ) {
      finalInterpret.push( interpretValues.interpretText );
    }
  } );

  return finalInterpret;
}
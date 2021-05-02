import {
  clamp,
  distance
} from "@popmotion/popcorn";

const buffer = 5;

const findIndex = ( index, offset, positions ) => {
  let targetIndex = index;
  const {
    top,
    height
  } = positions[ index ];
  const bottom = top + height;
  if ( offset > 0 ) {
    const nextItem = positions[ index + 1 ];
    if ( nextItem === undefined ) {
      return index
    };
    const swapOffset =
      distance( bottom, nextItem.top + nextItem.height / 2 ) + buffer;
    if ( offset > swapOffset ) targetIndex = index + 1;

    // If moving up
  } else if ( offset < 0 ) {
    const prevItem = positions[ index - 1 ];
    if ( prevItem === undefined ) return index;

    const prevBottom = prevItem.top + prevItem.height;
    const swapOffset = distance( top, prevBottom - prevItem.height / 2 ) + buffer;
    if ( offset < -swapOffset ) targetIndex = index - 1;
  }

  return clamp( 0, positions.length, targetIndex );
}

export default findIndex;
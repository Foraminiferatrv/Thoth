function comparator( elementA, elementB ) {
  if ( elementA < elementB ) {
    return -1;
  }
  if ( elementA > elementB ) {
    return 1;
  }
  return 0;
}

export default comparator;